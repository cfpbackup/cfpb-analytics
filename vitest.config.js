import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    include: ['packages/**/*.spec.js'],
    // Handle the CSS imports that are in JS files:
    css: true,
    coverage: {
      enabled: true,
      reportsDirectory: './coverage',
      include: ['**/packages/**/src/**/*.js'],
      exclude: ['**/*.{scss,css}'],
    },
  },
});
