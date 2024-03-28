import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                // tsx
                'resources/base_components/SampleBase.tsx',
                // scss
                'resources/scss/index.scss',
            ],
            refresh: true,
        }),
    ],
});
