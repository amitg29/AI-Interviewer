import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import settings from './configuration/settings'
// import colors from 'vuetify/util/colors'


export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles',
    '~/assets/css/main.css',
    "@mdi/font/css/materialdesignicons.css"
  ],
  runtimeConfig :{
    api_key : 'testApi key',
    public : {
      ...settings
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  watch : ['~/configuration/*.js'],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
  },
})
