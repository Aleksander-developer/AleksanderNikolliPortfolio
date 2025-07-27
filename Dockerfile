# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build:ssr

# Stage 2: Serve the application with a lightweight Node.js server
FROM node:20-alpine

WORKDIR /usr/src/app

# Copia solo i file essenziali dalla fase di build
# Questi percorsi sono corretti:
COPY --from=builder /app/dist/aleksander-nikolli-portfolio/browser ./browser
COPY --from=builder /app/dist/aleksander-nikolli-portfolio/server ./server
COPY --from=builder /app/package.json ./

# Installa solo le dipendenze di produzione per il server Node.js
RUN npm install --only=production

EXPOSE 8080

# ***** MODIFICA QUI: Correggi il percorso nel comando CMD *****
# Il main.js del server si trova in ./server/main.js all'interno di /usr/src/app
CMD [ "node", "./server/main.js" ]
# *************************************************************
