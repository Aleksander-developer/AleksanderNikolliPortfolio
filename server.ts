// server.ts
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
// Non useremo più fileURLToPath e dirname direttamente per i percorsi di build
// import { fileURLToPath } from 'node:url';
import { join } from 'node:path'; // Usiamo solo join
import { LOCALE_ID } from '@angular/core';
import { existsSync } from 'node:fs';

export async function app(): Promise<express.Express> {
  const server = express();

  const projectName = 'aleksander-nikolli-portfolio';

  const { AppServerModule } = await import('./src/main.server');

  // ***** MODIFICHE QUI: Percorsi per Cloud Run *****
  // Cloud Run esegue il server da /usr/src/app (come definito nel Dockerfile)
  // I file del browser sono in /usr/src/app/browser
  // I file del server sono in /usr/src/app/server
  const currentDir = process.cwd(); // Ottiene la directory di lavoro corrente del processo Node.js
  let browserDistFolder = join(process.cwd(), 'browser'); // Il tuo Dockerfile copia in /usr/src/app/browser
  let serverDistFolder  = join(process.cwd(), 'server');  // Il tuo Dockerfile copia in /usr/src/app/server

  // 2️⃣ fallback per locale
  if (!existsSync(browserDistFolder)) {
    browserDistFolder = join(
      process.cwd(),
      'dist',
      projectName,
      'browser'
    );
    serverDistFolder = join(
      process.cwd(),
      'dist',
      projectName,
      'server'
    );
  }

  console.log('📁 browserDistFolder:', browserDistFolder);
  console.log('📁 serverDistFolder:', serverDistFolder);

  if (!existsSync(browserDistFolder)) {
    throw new Error(`❌ browserDistFolder NOT FOUND: ${browserDistFolder}`);
  }

    console.log('📁 currentDir:', currentDir);
  console.log('📁 serverDistFolder:', serverDistFolder);
  console.log('📁 browserDistFolder:', browserDistFolder);
  // *************************************************

  const supportedLocales = ['it', 'en'];
  const defaultLocale = 'it';

  const commonEngine = new CommonEngine();
  server.set('view engine', 'html');

  // Serve gli asset globali dalla root della cartella browser
  server.use(express.static(browserDistFolder, {
    maxAge: '1y',
  }));

  // Serve gli asset specifici della lingua
  supportedLocales.forEach((locale) => {
    const localePath = join(browserDistFolder, locale); // Usiamo join qui
    server.use(`/${locale}`, express.static(localePath, {
      maxAge: '1y',
    }));
  });

  // SSR per ogni lingua
  supportedLocales.forEach((locale) => {
    const localePath = join(browserDistFolder, locale); // Usiamo join qui
    const indexHtml = join(localePath, 'index.html'); // Usiamo join qui

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
            { provide: LOCALE_ID, useValue: locale }
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
  const port = process.env['PORT'] || 8080;
  const server = await app();
  server.listen(port, () => {
    console.log(`✅ Angular SSR multilingua avviato su http://localhost:${port}`);
  });
}

run();
