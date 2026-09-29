import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.js'
import { initTheme } from './composables/useTheme.js'

initTheme()

createApp(App).use(i18n).mount('#app')
