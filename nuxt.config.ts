export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Frontendmentor | Rest countries API',
    },
  },
  css: ['@/layouts/global.css'],
});
