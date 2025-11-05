import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/macros/s/AKfycbwumHzWVD_DMkIDUe-7QWpZTIOftlyjSPSb85ojfil11VCIxkVQGTMeFdHsqsE3XY4Z/exec'),
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Remove redirects and handle them manually
            if (proxyRes.statusCode === 302 || proxyRes.statusCode === 301) {
              proxyRes.statusCode = 200;
              delete proxyRes.headers['location'];
            }
          });
        }
      },
    },
  },
})