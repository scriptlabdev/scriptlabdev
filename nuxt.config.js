import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'path';
import fs from 'fs-extra';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  css: [
    '@mdi/font/css/materialdesignicons.css',
    // 'leaflet/dist/leaflet.css',
  ],

  modules: [

    // https://vueuse.org/guide/
    ['@vueuse/nuxt', {}],

  ],

  build: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['javascript', 'html', 'css', 'php'],
      }),
    ],
  },

  hooks: {
    async 'build:done'(nuxt) {
      const pathFrom = path.join(__dirname, '.output', 'public');
      const pathTo = path.join(__dirname, 'docs');
      await fs.rmSync(pathTo, { recursive: true, force: true });
      await fs.moveSync(pathFrom, pathTo);
    },
  },
});
