export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Me chamo Maycon, sou desenvolvedor WEB especialista em SPA (Single-page applications) e chatbots para diversas plataformas como Twitch, Booyah e Discord.' },
      { property: 'og:description', content: 'Me chamo Maycon, sou desenvolvedor WEB especialista em SPA (Single-page applications) e chatbots para diversas plataformas como Twitch, Booyah e Discord.' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:title', content: 'Maycon Jesus Pinto' },
      { property: 'og:site_name', content: 'Maycon Jesus Pinto' },
      { property: 'og:image', content: 'https://mayconjesus.com/static/og-icon.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '639' },
      { property: 'og:image:height', content: '872' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
