import './assets/main.css'
import 'quasar/src/css/index.sass'
import iconSet from 'quasar/icon-set/fontawesome-v6'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {
  Quasar,
  QBtn,
  QInput,
  QItem,
  QItemLabel,
  QList,
  QItemSection,
  QForm,
  QSelect,
  QSpinnerHourglass,
  QOptionGroup,
  QTable,
  QTd,
  QSlider
} from 'quasar'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  components: {
    QBtn,
    QInput,
    QList,
    QItem,
    QSlider,
    QItemLabel,
    QItemSection,
    QForm,
    QSelect,
    QSpinnerHourglass,
    QOptionGroup,
    QTable,
    QTd
  },
  plugins: {},
  iconSet,
  config: {
    brand: {
      primary: '#1976d2',
      secondary: '#26A69A',
      accent: '#9C27B0',

      dark: '#1d1d1d',
      'dark-page': '#121212',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})
app.mount('#app')
