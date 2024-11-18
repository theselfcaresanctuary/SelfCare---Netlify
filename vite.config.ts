import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true
  }
});