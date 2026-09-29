import { createI18n } from 'vue-i18n'
import { messages } from './data/messages.js'

const initialLang = (() => {
  try {
    return localStorage.getItem('lang') || 'es'
  } catch (e) {
    return 'es'
  }
})()

const i18n = createI18n({
  legacy: false,
  locale: initialLang,
  fallbackLocale: 'es',
  messages,
  missingWarn: false,
  fallbackWarn: false,
})

export function setLang(lang) {
  i18n.global.locale.value = lang
  document.documentElement.setAttribute('lang', lang)
  try {
    localStorage.setItem('lang', lang)
  } catch (e) {
    /* ignorar */
  }
}

export default i18n
