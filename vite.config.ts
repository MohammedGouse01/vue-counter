import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import type { UserConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  // Add the `test` field manually to the type
  test: {
    globals: true,
    environment: 'jsdom',
  },
} as UserConfig & { test: any });
