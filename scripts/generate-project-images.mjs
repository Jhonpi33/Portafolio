/**
 * Genera imágenes SVG para los proyectos (placeholders con estilo).
 * Uso: node scripts/generate-project-images.mjs
 * Cuando tengas capturas reales, reemplaza los archivos en public/img/proyectos/
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'img', 'proyectos')
mkdirSync(outDir, { recursive: true })

const items = [
  { file: 'portafolio.svg', title: 'Portafolio Personal', sub: 'Vue 3 · Vite · GSAP', c1: '#a8ff60', c2: '#5eead4', icon: 'J' },
  { file: 'api-tareas.svg', title: 'API REST de Tareas', sub: 'Node · Express · MySQL', c1: '#7c5cff', c2: '#47bfff', icon: '{ }' },
  { file: 'ecommerce.svg', title: 'Tienda Online', sub: 'Vue · Pinia · CSS3', c1: '#ff8a5c', c2: '#ffd166', icon: '[]' },
  { file: 'gestor-gastos.svg', title: 'Gestor de Gastos', sub: 'JavaScript · Firebase', c1: '#ff5c8a', c2: '#ffb86b', icon: '$' },
  { file: 'blog-adso.svg', title: 'Blog Académico', sub: 'PHP · MySQL · Bootstrap', c1: '#5cc9ff', c2: '#7c5cff', icon: '✎' },
  { file: 'clima-app.svg', title: 'App del Clima', sub: 'JavaScript · API REST', c1: '#5eead4', c2: '#47bfff', icon: '☀' },
]

const W = 800
const H = 500

const svg = ({ file, title, sub, c1, c2, icon }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1014"/>
      <stop offset="100%" stop-color="#141a21"/>
    </linearGradient>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0v40" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="72%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${c1}" stop-opacity=".45"/>
      <stop offset="100%" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- ventana mock -->
  <g opacity=".95">
    <rect x="72" y="86" width="440" height="264" rx="16" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)"/>
    <circle cx="96" cy="110" r="6" fill="#ff5f57"/>
    <circle cx="116" cy="110" r="6" fill="#febc2e"/>
    <circle cx="136" cy="110" r="6" fill="#28c840"/>
    <rect x="96" y="140" width="240" height="14" rx="7" fill="rgba(255,255,255,.16)"/>
    <rect x="96" y="168" width="330" height="10" rx="5" fill="rgba(255,255,255,.09)"/>
    <rect x="96" y="190" width="290" height="10" rx="5" fill="rgba(255,255,255,.09)"/>
    <rect x="96" y="230" width="150" height="34" rx="17" fill="url(#g1)"/>
    <rect x="96" y="290" width="380" height="42" rx="10" fill="rgba(255,255,255,.05)"/>
  </g>

  <!-- badge icon -->
  <g transform="translate(548 150)">
    <rect width="180" height="180" rx="34" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)"/>
    <text x="90" y="118" text-anchor="middle" font-family="Sora, system-ui, sans-serif" font-size="62" font-weight="800" fill="url(#g1)">${icon}</text>
  </g>

  <!-- texto -->
  <text x="72" y="418" font-family="Sora, system-ui, sans-serif" font-size="42" font-weight="800" fill="#f4f7f2">${title}</text>
  <text x="72" y="456" font-family="Inter, system-ui, sans-serif" font-size="22" fill="${c1}" font-weight="600">${sub}</text>
</svg>
`

for (const item of items) {
  writeFileSync(join(outDir, item.file), svg(item), 'utf8')
  console.log('✓', item.file)
}
console.log('Imágenes generadas en', outDir)
