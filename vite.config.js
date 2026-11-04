import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React core runtime
          'react-vendor': ['react', 'react-dom'],
          // Vendor chunk for animation and scroll libraries
          'animation-vendor': ['framer-motion', 'react-scroll'],
          // Vendor chunk for icon graphics
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
});
