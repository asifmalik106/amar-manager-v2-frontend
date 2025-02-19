import './assets/css/argon-dashboard.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import './assets/css/custom.css'

import './assets/js/core/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
//  import './assets/js/plugins/perfect-scrollbar.min.js'
// import './assets/js/plugins/smooth-scrollbar.min.js'
// import './assets/js/plugins/chartjs.min.js'
// import './assets/js/argon-dashboard.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
