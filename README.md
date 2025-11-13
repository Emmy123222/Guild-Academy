# Guild Academy Website

A modern, static React website built with TypeScript and Vite. Uses TailwindCSS for styling and a hash-based router implemented in `App.tsx`. Form submissions are proxied to a Google Apps Script Web App via the `/api` path in development and should be reverse-proxied in production.

- **Framework**: React 19 + TypeScript
- **Bundler/Dev server**: Vite 
- **Styling**: TailwindCSS
- **Routing**: Hash-based (no server-side routing required)
- **Animations/3D**: framer-motion, gsap, matter-js, three
- **Theme**: Light/Dark via `ThemeProvider`

## Project structure

- **`src/main.tsx`**: App bootstrap
- **`src/App.tsx`**: Hash-based page switching for `#/`, `#/bootcamps`, `#/apply`, `#/events`, `#/events/:slug`, `#/about`, `#/admin`, etc.
- **`src/landpage/**`**: All page sections and pages
- **`vite.config.ts`**: Dev server and proxy configuration
- **`tailwind.config.js`**: Tailwind setup

## Prerequisites (Linux)

- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node)
- Git
- Optional for production: Nginx 1.18+ or Docker

Verify versions:

```bash
node -v
npm -v
```

## Install dependencies

```bash
# from the repo root
cd Guild-Academy
npm install
```

## Local development

```bash
npm run dev
```

Then open the URL shown by Vite (typically `http://localhost:5173`).

API calls during development are sent to `/api` and proxied by Vite to the Google Apps Script endpoint defined in `vite.config.ts`:

```ts
// vite.config.ts (excerpt)
server: {
  proxy: {
    '/api': {
      target: 'https://script.google.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(
        /^\/api/,
        '/macros/s/AKfycbwumHzWVD_DMkIDUe-7QWpZTIOftlyjSPSb85ojfil11VCIxkVQGTMeFdHsqsE3XY4Z/exec'
      ),
    },
  },
}
```

## Build for production

```bash
npm run build
```

The production assets are emitted to `dist/` and can be served by any static HTTP server.

You can test the production build locally:

```bash
npm run preview
```

## Production deployment on Linux (Nginx)

Because the app is static and uses hash routing, you only need to serve `dist/` and configure a reverse proxy for `/api` to the Google Apps Script URL. Below is a minimal Nginx site config for Ubuntu/Debian:

```nginx
server {
  listen 80;
  server_name your.domain.com;

  root /var/www/guild-academy/dist;
  index index.html;

  # Serve static build
  location / {
    try_files $uri /index.html;
  }

  # Reverse proxy for form submissions
  location /api {
    proxy_pass https://script.google.com/macros/s/AKfycbwumHzWVD_DMkIDUe-7QWpZTIOftlyjSPSb85ojfil11VCIxkVQGTMeFdHsqsE3XY4Z/exec;

    proxy_http_version 1.1;
    proxy_set_header Host script.google.com;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # Optional: avoid redirect rewriting
    proxy_redirect off;
  }
}
```

Steps:

- **Build** on your CI or local machine: `npm run build`
- **Copy** the `dist/` folder to the server, e.g. `/var/www/guild-academy/dist`
- **Install** Nginx and place the config above in `/etc/nginx/sites-available/guild-academy`
- **Enable** the site: `ln -s /etc/nginx/sites-available/guild-academy /etc/nginx/sites-enabled/`
- **Test** config: `sudo nginx -t`
- **Reload**: `sudo systemctl reload nginx`

Tip: Use a process like `rsync` or `scp` to upload the `dist/` directory, or build directly on the server after `git pull`.

## Optional: Deploy with Docker + Nginx

If you prefer Docker, you can use an Nginx image to serve the static files and proxy `/api`:

```Dockerfile
# Dockerfile (example, not checked in)
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

Example `nginx.conf` (same as above but adapted for container paths):

```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri /index.html;
  }

  location /api {
    proxy_pass https://script.google.com/macros/s/AKfycbwumHzWVD_DMkIDUe-7QWpZTIOftlyjSPSb85ojfil11VCIxkVQGTMeFdHsqsE3XY4Z/exec;
    proxy_http_version 1.1;
    proxy_set_header Host script.google.com;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_redirect off;
  }
}
```

Build and run:

```bash
npm run build
docker build -t guild-academy:latest .
# serve on port 8080
docker run --rm -p 8080:80 guild-academy:latest
```

## Environment configuration

- No `.env` is required for this project.
- The only external dependency is the Google Apps Script endpoint used for form submissions.
- In development, Vite proxies `/api` to the GAS URL.
- In production, ensure your HTTP server proxies `/api` to the same GAS URL as shown above.

## Troubleshooting

- **Blank page in production**: ensure you are serving `index.html` for all paths (hash routes should generally work, but `try_files $uri /index.html;` is still recommended).
- **CORS/redirect issues on `/api`**: confirm Nginx is proxying `/api` to the GAS URL and `proxy_redirect off;` is set.
- **Build fails**: verify Node.js version (18+) and reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`.

## Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Build production assets into `dist/`
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint
