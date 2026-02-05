import { defineConfig } from 'vite';

// Best Practice: Explicitly define the config object
export default defineConfig({
  base: './', // Ensures assets work on GitHub Pages
  server: {
    port: 3000,
    open: true
  }
});