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

/* Paleta: toda la familia azul para que el grid se vea cohesionado,
   variando solo el matiz (índigo → azul → cielo → cian). */
const items = [
  { file: 'portafolio.svg', title: 'Portafolio Personal', sub: 'Vue 3 · Vite · GSAP', c1: '#6aa4ff', c2: '#1d4ed8', icon: 'JP' },
  { file: 'lab-ficat.svg', title: 'Laboratorio FICAT', sub: 'Vue · Quasar · Node.js', c1: '#38bdf8', c2: '#2563eb', icon: 'LF' },
  { file: 'guaiti.svg', title: 'Gua-iti Aventura', sub: 'Vue · Express · JWT', c1: '#818cf8', c2: '#4338ca', icon: 'GA' },
  { file: 'tienda.svg', title: 'Tienda Inventario', sub: 'Vue · Express · Docker', c1: '#22d3ee', c2: '#0e7490', icon: '$' },
  { file: 'gestion-academica.svg', title: 'Gestión Académica', sub: 'Vue · Quasar · JWT', c1: '#60a5fa', c2: '#1e40af', icon: 'JWT' },
  { file: 'fichero.svg', title: 'Fichero', sub: 'Node · PostgreSQL · Render', c1: '#7dd3fc', c2: '#0284c7', icon: '>_' },
  { file: 'crud-barberia.svg', title: 'Panel de Barbería', sub: 'Vue · Vite · CRUD', c1: '#6aa4ff', c2: '#1d4ed8', icon: 'CR' },
  { file: 'servicios-sena.svg', title: 'Servicios SENA', sub: 'Vue · Quasar · SPA', c1: '#38bdf8', c2: '#2563eb', icon: 'SE' },
  { file: 'biblioteca-api.svg', title: 'API de Reservas', sub: 'Node · Express · JWT', c1: '#818cf8', c2: '#4338ca', icon: '{ }' },
  { file: 'guaiti-guias.svg', title: 'Guaiti Guianzas', sub: 'Supabase · JavaScript', c1: '#22d3ee', c2: '#0e7490', icon: 'API' },
  { file: 'areagua.svg', title: 'Areagua', sub: 'HTML · CSS · JavaScript', c1: '#60a5fa', c2: '#1e40af', icon: 'AR' },
  { file: 'mj.svg', title: 'MJ Cosmetología', sub: 'HTML · CSS · Carrito', c1: '#7dd3fc', c2: '#0284c7', icon: 'MJ' },
  { file: 'fotos-panachi.svg', title: 'Fotos Panachi', sub: 'Web Crypto · AES-GCM', c1: '#6aa4ff', c2: '#1d4ed8', icon: 'AES' },
  { file: 'abogados.svg', title: 'Estudio Jurídico', sub: 'HTML · CSS · Responsive', c1: '#38bdf8', c2: '#2563eb', icon: 'AJ' },
]

const W = 800
const H = 500

const svg = ({ file, title, sub, c1, c2, icon }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070c17"/>
      <stop offset="100%" stop-color="#0d1526"/>
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
