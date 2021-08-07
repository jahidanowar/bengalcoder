export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BengalCoder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['node_modules/lite-youtube-embed/src/lite-yt-embed.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filters.js', '~/plugins/lite-yt.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
  ],

  // Multi language support: https://go.nuxtjs.dev/config-i18n
  i18n: {
    locales: [
      { code: 'bn', name: 'বাংলা', iso: 'bn', file: 'bn.js' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    strategy: 'prefix',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Bengal Coder',
      short_name: 'Bengal Coder',
      description: 'Programming videos and post in Bangla',
      theme_color: '#6366F1',
    },
  },

  // Color Mode (https://go.nuxtjs.dev/color-mode):
  colorMode: {
    classSuffix: '',
    mode: 'light',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Google Analytics: https://go.nuxtjs.dev/google-analytics
  googleAnalytics: {
    id: 'UA-128597158-2',
  },

  // Sitemap: https://go.nuxtjs.dev/sitemap
  sitemap: {
    // options
    hostname: 'https://www.bengalcoder.com',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
