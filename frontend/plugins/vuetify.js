// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myAllBlackTheme = {
    dark: true,
    dark: {
        primary: '#21242D',
        primaryVariant: '#ef9088',
        accent: '#424242',
        secondary: '#424242',
        info: '#26a69a',
        warning: '#ffc107',
        error: '#dd2c00',
        success: '#4CAF50',
        successbug: '#4CAF50',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                myAllBlackTheme,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})

// vuetify: {
//     theme: {
//       dark: true, //you don't actually need this line as it's for default
//         themes: {
// dark: {
//     primary: '#21242D',
//         primaryVariant: '#ef9088',
//             accent: '#424242',
//                 secondary: '#424242',
//                     info: '#26a69a',
//                         warning: '#ffc107',
//                             error: '#dd2c00',
//                                 success: '#4CAF50',
//                                     successbug: '#4CAF50',
//             }
//         }
//     }
// },