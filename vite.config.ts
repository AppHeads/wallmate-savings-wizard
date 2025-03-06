
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
    // Add the allowed host configuration
    cors: true,
    strictPort: true,
    host: true,
    hmr: {
      clientPort: 443
    },
    // Add the specific host to allowedHosts
    allowedHosts: ['962353f4-ab46-4b20-a746-e1ca1e52a027.lovableproject.com']
  },
  // Add the allowedHosts configuration
  preview: {
    host: true,
    port: 8080
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
