import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Tells Vite to serve and build from the directory containing your HTML
  root: 'build',
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Outputs the final production build to a separate 'dist' folder
    outDir: '../dist',
    emptyOutDir: true,
  },
});
