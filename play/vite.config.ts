import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import windiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windiCSS()],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
});
