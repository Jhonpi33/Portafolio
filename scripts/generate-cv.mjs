/* Genera un CV en PDF (plantilla básica) sin dependencias.
   Uso: node scripts/generate-cv.mjs
   Sustituye este archivo por tu hoja de vida real en public/cv/cv-jhon-pimiento.pdf */
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'cv', 'cv-jhon-pimiento.pdf')
mkdirSync(dirname(out), { recursive: true })

const lines = [
  'JHON ALEXANDER PIMIENTO BUENO  (Jhonpi)',
  'Desarrollador Full Stack | Estudiante de ADSO - SENA',
  '',
  'CONTACTO',
  'Correo: tucorreo@ejemplo.com',
  'GitHub: https://github.com/tu-usuario',
  'LinkedIn: https://www.linkedin.com/in/tu-usuario',
  '',
  'PERFIL',
  'Estudiante de Analitica y Desarrollo de Software enfocado en',
  'construir aplicaciones web completas, desde la interfaz en Vue.js',
  'hasta la logica del servidor y las bases de datos.',
  '',
  'FORMACION',
  '2024 - 2026  Tecnologo en ADSO - SENA',
  '2024         Fundamentos web: HTML, CSS y JavaScript',
  '2025         Ecosistema Vue: Vue 3, Vite y GSAP',
  '',
  'HABILIDADES',
  'Frontend : HTML5, CSS3, JavaScript, Vue.js, React',
  'Backend  : Node.js, Express, REST APIs, PHP, Python',
  'Datos    : MySQL, MongoDB, Firebase',
  'Tools    : Git/GitHub, Vite, Figma, Postman',
  '',
  'PROYECTOS',
  'Portafolio personal (Vue 3 + Vite + GSAP)',
  'API REST de tareas (Node.js + Express + MySQL)',
  'Tienda online responsiva (Vue + Pinia)',
  'Gestor de gastos con graficas (JavaScript + Firebase)',
  '',
  'NOTE: Reemplaza este archivo por tu hoja de vida real.',
]

const escape = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
let y = 780
const body = lines
  .map((l, i) => {
    const bold = i === 0 || /^(CONTACTO|PERFIL|FORMACION|HABILIDADES|PROYECTOS)$/.test(l)
    const font = bold ? '/F2' : '/F1'
    const size = i === 0 ? 18 : 11
    const text = `BT ${font} ${size} Tf 60 ${y} Td (${escape(l)}) Tj ET`
    y -= bold ? 30 : 20
    return text
  })
  .join('\n')

const content = `BT /F1 10 Tf 60 40 Td (${escape('Hoja de vida - Jhon Alexander Pimiento Bueno')}) Tj ET\n${body}`
const contentLen = Buffer.byteLength(content, 'latin1')

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${contentLen} >>\nstream\n${content}\nendstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
]

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf, 'latin1'))
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
})

const xrefPos = Buffer.byteLength(pdf, 'latin1')
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
offsets.forEach((o) => {
  pdf += `${String(o).padStart(10, '0')} 00000 n \n`
})
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`

writeFileSync(out, Buffer.from(pdf, 'latin1'))
console.log('CV generado en', out)
