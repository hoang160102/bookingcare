import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import BannerImage from './components/layout/BannerImage.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)

app.component('banner-image', BannerImage)

app.use(router)
app.use(vuetify)

app.mount('#app')
