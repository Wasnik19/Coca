import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 8080,
        open: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});
