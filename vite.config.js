import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: "trends",
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  }

});