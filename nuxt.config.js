import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

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
});
