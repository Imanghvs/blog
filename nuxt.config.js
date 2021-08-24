export default {
	// Global page headers
	head: {
		title: 'ایمانگرام',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'با ایمانگرام در سه سوت بلاگ بسازید!',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
	},

	// Global CSS
	css: ['@/assets/global.css'],

	// Plugins to run before rendering page
	plugins: [],

	// Auto import components
	components: true,

	// Modules for dev and build
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

	// Modules
	modules: ['@nuxtjs/axios'],

	// Axios module configuration
	axios: {},

	// Vuetify module configuration
	vuetify: {
		rtl: true,
	},

	build: {},
}
