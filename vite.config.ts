import { defineConfig } from 'vite';
import phaser from 'vite-plugin-phaser';

export default defineConfig({
  plugins: [phaser()],
  server: {
    port: 8080,
    host: true
  },
  build: {
    outDir: 'dist'
  }
});