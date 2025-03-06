
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    allowedHosts: ['962353f4-ab46-4b20-a746-e1ca1e52a027.lovableproject.com'],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        standalone: path.resolve(__dirname, 'src/standalone.tsx'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'standalone' 
            ? 'assets/wallmates-calculator.[hash].js' 
            : 'assets/[name].[hash].js';
        },
      },
    },
  },
});
