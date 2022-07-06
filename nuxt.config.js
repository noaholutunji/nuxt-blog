const bodyParser = require('body-parser')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web Development Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },
  /*
  ** Global CSS
  */
 loading: { color: '#fa923f', height: '4px', duration: 5000 },
 loadingIndicator: {
   name: 'circle',
   color: '#fa923f'
 },
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL:  process.env.BASE_URL || 'https://nuxt-blog-fd53b.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-fd53b.firebaseio.com',
    fbAPIKey: 'AIzaSyB92KIBjsA431op5yGouxAmH7rAW-5PMyk'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
