import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

export async function app(): Promise<express.Express> {
  const server = express();

  // ✅ Import dinamico corretto per Angular SSR
  // Questo percorso è relativo al file server.ts (o main.js compilato)
  const { AppServerModule } = await import('./src/main.server');

  // Questa riga risolve la directory del file che sta eseguendo il codice.
  // Sui log di Render, questo è stato mostrato come /opt/render/project/src
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));

  // MODIFICATO: Calcola browserDistFolder relativo alla radice del progetto
  // Se serverDistFolder è /opt/render/project/src
  // e i file del browser sono in /opt/render/project/src/dist/aleksander-nikolli-portfolio/browser
  // allora il percorso deve essere costruito in questo modo.
  const browserDistFolder = resolve(serverDistFolder, 'dist', 'aleksander-nikolli-portfolio', 'browser');


  // 🔍 Debug log (questi ora dovrebbero mostrare i percorsi corretti)
  console.log('📁 serverDistFolder:', serverDistFolder);
  console.log('📁 browserDistFolder:', browserDistFolder);

  const supportedLocales = ['it', 'en'];
  const defaultLocale = 'it';

  const commonEngine = new CommonEngine();
  server.set('view engine', 'html');

  // Serve file statici
  supportedLocales.forEach((locale) => {
    const localePath = resolve(browserDistFolder, locale);
    server.get(`/${locale}/*.*`, express.static(localePath, {
      maxAge: '1y',
    }));
  });

  // SSR per ogni lingua
  supportedLocales.forEach((locale) => {
    const localePath = resolve(browserDistFolder, locale);
    const indexHtml = resolve(localePath, 'index.html');

    server.get(`/${locale}*`, async (req, res, next) => {
      try {
        console.log(`🔄 SSR rendering ${req.originalUrl} → ${indexHtml}`);
        const html = await commonEngine.render({
          bootstrap: AppServerModule,
          documentFilePath: indexHtml,
          url: req.originalUrl,
          publicPath: localePath,
          providers: [
            { provide: APP_BASE_HREF, useValue: `/${locale}/` },
          ],
        });
        res.send(html);
      } catch (err) {
        console.error(`❌ SSR error for ${req.originalUrl}:`, err);
        next(err);
      }
    });
  });

  // Redirect dalla root alla lingua predefinita
  server.get('/', (req, res) => {
    res.redirect(`/${defaultLocale}`);
  });

  return server;
}

async function run(): Promise<void> {
  const port = process.env['PORT'] || 4000;
  const server = await app();
  server.listen(port, () => {
    console.log(`✅ Angular SSR multilingua avviato su http://localhost:${port}`);
  });
}

run();
