import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { APP_CONFIG } from './config';

export default defineConfig({
  base: APP_CONFIG.BASE_PATH,
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
