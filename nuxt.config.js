import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    // Bulma
    'bulma',
    // CSS file
    '@/assets/css/main.css',
    // SCSS file
    '@/assets/scss/main.scss',
    // FontAwesome
    '@fortawesome/fontawesome-svg-core/styles.css',
    // Animate.css
    '@/assets/css/animate.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // FontAwesome
    '~/plugins/fontawesome.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Nuxt Optimized Images
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) =>
      isDev ? '[path][name][hash:optimized].[ext]' : 'img/[hash:7].[ext]',
    responsiveImagesName: ({ isDev }) =>
      isDev
        ? '[path][name]--[width][hash:optimized].[ext]'
        : 'img/[hash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80
    },
    pngquant: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
