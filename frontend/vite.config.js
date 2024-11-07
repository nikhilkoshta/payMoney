import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  server: mode === 'development' ? {
    proxy: {
      "/api": "http://localhost:3000",
    },
  } : {},
  plugins: [react()],
}));
