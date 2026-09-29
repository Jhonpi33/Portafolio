import { ref } from 'vue'

const theme = ref('dark')

function apply() {
  document.documentElement.setAttribute('data-theme', theme.value)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme.value === 'dark' ? '#0a0c0f' : '#f6f7f4')
}

export function initTheme() {
  let saved = null
  try {
    saved = localStorage.getItem('theme')
  } catch (e) {
    /* localStorage no disponible */
  }
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  theme.value = saved || (prefersLight ? 'light' : 'dark')
  apply()
}

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem('theme', theme.value)
  } catch (e) {
    /* ignorar */
  }
  apply()
}

export { theme }
