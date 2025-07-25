// server.ts
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { LOCALE_ID } from '@angular/core';

export async function app(): Promise<express.Express> {
  const server = express();

  const { AppServerModule } = await import('./src/main.server');

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, 'dist', 'aleksander-nikolli-portfolio', 'browser');

  console.log('📁 serverDistFolder:', serverDistFolder);
  console.log('📁 browserDistFolder:', browserDistFolder);

  const supportedLocales = ['it', 'en'];
  const defaultLocale = 'it';

  const commonEngine = new CommonEngine();
  server.set('view engine', 'html');

  // ✅ CORREZIONE 1: Serve gli asset globali dalla root della cartella browser
  // (es. /assets/sfondo.png, /favicon.ico)
  server.use(express.static(browserDistFolder, {
    maxAge: '1y',
  }));

  // ✅ CORREZIONE 2: Serve gli asset specifici della lingua (se presenti)
  // (es. /it/assets/specifico.png, o i tuoi bundle JS/CSS che sono sotto /it/ o /en/)
  supportedLocales.forEach((locale) => {
    const localePath = resolve(browserDistFolder, locale);
    server.use(`/${locale}`, express.static(localePath, {
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
  const port = process.env['PORT'] || 4000;
  const server = await app();
  server.listen(port, () => {
    console.log(`✅ Angular SSR multilingua avviato su http://localhost:${port}`);
  });
}

run();
