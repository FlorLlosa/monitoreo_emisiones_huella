import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'

import './index.css'//tailwind

const app = createApp(App)
    app.use(router)
    app.mount('#app')
