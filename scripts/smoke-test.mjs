/* Smoke test SSR: renderiza <App/> en Node para detectar errores en runtime.
   Uso: node scripts/smoke-test.mjs */
import { createServer } from 'vite'
import { renderToString } from 'vue/server-renderer'
import { createSSRApp } from 'vue'

// --- Shim mínimo de navegador para SSR ---
const rootStub = {
  documentElement: { setAttribute() {}, scrollHeight: 4000 },
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener() {},
  removeEventListener() {},
  body: { classList: { toggle() {}, add() {}, remove() {} } },
}
globalThis.document = rootStub
globalThis.window = {
  innerHeight: 800,
  innerWidth: 1440,
  location: { href: '' },
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {},
  requestAnimationFrame: (cb) => setTimeout(cb, 0),
}
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} }
globalThis.IntersectionObserver = class {
  observe() {}
  disconnect() {}
}
globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0)
globalThis.cancelAnimationFrame = (id) => clearTimeout(id)

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.vue')
  const { default: i18n } = await server.ssrLoadModule('/src/i18n.js')

  // window/localStorage no existen en Node: proveer mínimos para initTheme/i18n
  const app = createSSRApp(App)
  app.use(i18n)

  const html = await renderToString(app)

  const checks = [
    ['Nombre', html.includes('Jhon Alexander')],
    ['Sección inicio', html.includes('id="inicio"')],
    ['Sección sobre-mi', html.includes('id="sobre-mi"')],
    ['Sección habilidades', html.includes('id="habilidades"')],
    ['Sección proyectos', html.includes('id="proyectos"')],
    ['Sección contacto', html.includes('id="contacto"')],
    ['Footer', html.includes('footer')],
    ['Proyectos listados', (html.match(/class="project card"/g) || []).length >= 6],
    ['Habilidades (barras)', html.includes('data-progress')],
    ['Contadores', html.includes('data-count')],
    ['CV descargable', html.includes('HojaDeVida_SENA_Jhon_Alexander_Pimiento.pdf')],
    ['Icono GitHub como <path> (no texto suelto)', html.includes('class="social"') && html.includes('<path d="M12 .5C5.73')],
    ['Logo del footer con monograma JP', /<text[^>]*>\s*JP\s*<\/text>/.test(html)],
    ['Menú hamburguesa', html.includes('class="burger"')],
    ['Botón idioma', html.includes('lang-btn')],
    ['Botón tema', html.includes('theme-icon')],
    ['Imagen de perfil', html.includes('/img/perfil.jpg')],
    ['Sin undefined visible', !html.includes('undefined')],
    ['Sin [object Object]', !html.includes('[object Object]')],
    ['Sin hero.roles crudo', !html.includes('hero.roles')],
    ['Sin about.facts crudo', !html.includes('about.facts')],
  ]

  let failed = 0
  for (const [name, ok] of checks) {
    console.log(`${ok ? '✅' : '❌'} ${name}`)
    if (!ok) failed++
  }

  // --- Segunda pasada: inglés ---
  i18n.global.locale.value = 'en'
  const htmlEn = await renderToString(app)
  const enChecks = [
    ['EN: nav About me', htmlEn.includes('About me')],
    ['EN: projects title', htmlEn.includes('Things I have built')],
    ['EN: no placeholder "hero."', !htmlEn.replace(/\/img\/proyectos\/[^"')\s]+/g, '').includes('hero.')],
    ['EN: contact form', htmlEn.includes('Send message')],
    ['EN: CV label', htmlEn.includes('Download CV')],
  ]
  for (const [name, ok] of enChecks) {
    console.log(`${ok ? '✅' : '❌'} ${name}`)
    if (!ok) failed++
  }
  checks.push(...enChecks)

  console.log(`\n${checks.length - failed}/${checks.length} comprobaciones OK`)
  if (failed) process.exitCode = 1
} catch (err) {
  console.error('❌ Error renderizando:', err)
  process.exitCode = 1
} finally {
  await server.close()
}
