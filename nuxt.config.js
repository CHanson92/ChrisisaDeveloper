export default {
	target: 'static',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Chris Hanson - Junior Developer',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'I am a passionate junior developer keen to building my development skills'
			}
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
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		// FontAwesome
		'~/plugins/fontawesome.js',
		'~/plugins/vue-lazysizes.client.js'
	],

	/*
	 ** Nuxt.js modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
		'@nuxtjs/bulma',
		'@aceforth/nuxt-optimized-images'
	],

	optimizedImages: {
		optimizedImages: true
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
		extend(config, { isDev, isClient, loaders: { vue } }) {
			// Run Lazysizes
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
			// Run ESLint on save
			if (isDev && isClient) {
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
