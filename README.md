# AleksanderNikolliPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# lavorare sul frontend con hot-reload (senza SSR):
npm start

# Modalità SSR (Angular Universal + Express)
# Step 1 – Compila tutto
npm run build:ssr
# Step 2 – Avvia il server SSR
npm run serve:ssr



ng g module pages/logo --route logo --module app.module



ng g module pages/vetrina --routing
ng g component pages/vetrina
ng g service services/vetrina


ng g module shared/components/social-icons
ng g c shared/components/social-icons --standalone=false

ng g c shared/vetrina-software/crea-logo-software --standalone=false

ng g m shared/vetrina-software


ng g module shared/projects

ng g c shared/projects/project-tile --standalone=false
ng g c shared/projects/azzurra-makeup --standalone=false

ng g c shared/projects/sharing-tv-europa --standalone=false

ng g c shared/projects/fondazione-gea --standalone=false

ng g c shared/projects/universita-crea --standalone=false


ng g c shared/components/skills-box --standalone=false


ng g c shared/components/social-icons/svg-github --standalone=false
ng g c shared/components/social-icons/svg-linkedin --standalone=false
ng g c shared/components/social-icons/svg-instagram --standalone=false
ng g c shared/components/social-icons/svg-facebook --standalone=false
ng g c shared/components/social-icons/svg-whatsapp --standalone=false

ng g c shared/components/faq --standalone=false

ng g c shared/components/tech-stack --standalone=false

rm -rf src/app/pages/servizi/servizi
rm -rf src/app/pages/servizi/consulenza-digitale
rm -rf src/app/pages/servizi/sviluppo-app


ng g c pages/servizi/creazione-software --standalone=false
ng g c pages/servizi/sviluppo-app --standalone=false
ng g c pages/servizi/streaming-media --standalone=false
ng g c pages/servizi/manutenzione-software --standalone=false
ng g c pages/servizi/google-ads --standalone=false
ng g c pages/servizi/seo-contenuti --standalone=false
ng g c pages/servizi/consulenza-digitale --standalone=false
ng g c pages/servizi/gestione-progetti --standalone=false


ng extract-i18n --output-path src/locale

Ogni volta che fai modifiche Angular → devi rifare:
    npm run build:ssr
Avvia il server SSR in modalità produzione
    npm run serve:ssr
