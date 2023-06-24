export default {
  app: {
    head: {
      title: 'with-nuxt',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: [],
  plugins: [],
  modules: [
    '@nuxtjs/eslint-module',
  ],

  serverHandlers: [{
    route: '/**',
    handler: '~/server'
  }],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
