import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const isDev = process.env.NODE_ENV !== 'production';

// Optional: Nur laden, wenn du den Inline-Editor im Dev wirklich brauchst.
// In Prod werden die Plugins NICHT geladen.
let inlineEditPlugin, editModeDevPlugin;
if (isDev) {
  try {
    inlineEditPlugin = (await import('./plugins/visual-editor/vite-plugin-react-inline-editor.js')).default;
    editModeDevPlugin = (await import('./plugins/visual-editor/vite-plugin-edit-mode.js')).default;
  } catch {
    // Plugins sind optional – wenn nicht vorhanden, einfach ignorieren
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ...(inlineEditPlugin ? [inlineEditPlugin()] : []),
    ...(editModeDevPlugin ? [editModeDevPlugin()] : []),
  ],
  server: {
    // Kein globales CORS nötig, weil wir im Dev über Proxy auf localhost:3000 gehen
    proxy: {
      // wichtig: direkt zum lokalen Express-Server
      '/send-form': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/send-forms': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // falls du das brauchst – sonst kannst du es auch löschen
      external: [
        '@babel/parser',
        '@babel/traverse',
        '@babel/generator',
        '@babel/types',
      ],
    },
  },
});
