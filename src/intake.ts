import { createApp } from 'vue'
import IntakeApp from './IntakeApp.vue'
import { applyDocumentLocale } from './i18n'
import './style.css'

applyDocumentLocale()
createApp(IntakeApp).mount('#app')
