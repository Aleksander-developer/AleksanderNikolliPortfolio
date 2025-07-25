import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

export async function app(): Promise<express.Express> {
  const server = express();

  // ✅ Import dinamico corretto per Angular SSR
  const { AppServerModule } = await import('./src/main.server');

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  // serverDistFolder sarà qualcosa come: /home/alexdev/AleksanderNikolliPortfolio/dist/aleksander-nikolli-portfolio/server

  // MODIFICATO: Risolvi il percorso risalendo di un livello e poi scendendo in 'browser'
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  // browserDistFolder sarà ora: /home/alexdev/AleksanderNikolliPortfolio/dist/aleksander-nikolli-portfolio/browser


  // 🔍 Debug log
  console.log('📁 serverDistFolder:', serverDistFolder);
  console.log('📁 browserDistFolder:', browserDistFolder); // Questo ora dovrebbe essere corretto

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
          publicPath: localePath, // publicPath dovrebbe puntare alla cartella della lingua specifica
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

