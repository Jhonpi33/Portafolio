/**
 * =========================================================
 *  DATOS PERSONALES, HABILIDADES Y PROYECTOS
 *  ⚠️  EDITA ESTE ARCHIVO CON TU INFORMACIÓN REAL.
 * =========================================================
 */

/* ---------- Datos personales ---------- */
export const profile = {
  fullName: 'Jhon Alexander Pimiento Bueno',
  shortName: 'Jhonpi',
  role: 'Desarrollador Full Stack',
  career: 'Tecnólogo en Analítica y Desarrollo de Software (ADSO)',
  photo: '/img/perfil.jpg',

  // ⚠️ Reemplaza estos datos por los tuyos
  email: 'tucorreo@ejemplo.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
  cv: '/cv/cv-jhon-pimiento.pdf', // coloca tu PDF en public/cv/
}

/* ---------- Habilidades agrupadas por categoría ---------- */
export const skillGroups = [
  {
    id: 'frontend',
    icon: '🎨',
    name: { es: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3 / Flexbox / Grid', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Vue.js 3', level: 84 },
      { name: 'React', level: 68 },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    name: { es: 'Backend', en: 'Backend' },
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 76 },
      { name: 'REST APIs', level: 78 },
      { name: 'PHP', level: 62 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    id: 'data',
    icon: '🗄️',
    name: { es: 'Bases de datos', en: 'Databases' },
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 68 },
      { name: 'Firebase', level: 64 },
      { name: 'Modelado de datos', level: 72 },
    ],
  },
  {
    id: 'tools',
    icon: '🛠️',
    name: { es: 'Herramientas', en: 'Tools' },
    skills: [
      { name: 'Git / GitHub', level: 86 },
      { name: 'Vite', level: 82 },
      { name: 'Figma', level: 66 },
      { name: 'Postman', level: 74 },
      { name: 'Metodologías ágiles', level: 70 },
    ],
  },
]

/* ---------- Tecnologías del marquee ---------- */
export const stackMarquee = [
  'Vue.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'Git',
  'GitHub',
  'Vite',
  'Figma',
  'Postman',
  'Firebase',
]

/* ---------- Proyectos ---------- */
export const projects = [
  {
    id: 'portafolio',
    title: 'Portafolio Personal',
    year: '2025',
    category: 'frontend',
    image: '/img/proyectos/portafolio.svg',
    description: {
      es: 'Sitio portafolio construido con Vue 3 y Vite, con animaciones GSAP, modo oscuro/claro y contenido bilingüe.',
      en: 'Portfolio site built with Vue 3 and Vite, featuring GSAP animations, dark/light mode and bilingual content.',
    },
    tech: ['Vue 3', 'Vite', 'GSAP', 'i18n'],
    repo: 'https://github.com/tu-usuario/portafolio',
    demo: 'https://tu-usuario.vercel.app',
    featured: true,
  },
  {
    id: 'api-tareas',
    title: 'API REST de Tareas',
    year: '2025',
    category: 'backend',
    image: '/img/proyectos/api-tareas.svg',
    description: {
      es: 'API RESTful con autenticación JWT, validaciones y documentación. Gestión de usuarios y tareas con roles.',
      en: 'RESTful API with JWT authentication, validations and documentation. User and task management with roles.',
    },
    tech: ['Node.js', 'Express', 'MySQL', 'JWT'],
    repo: 'https://github.com/tu-usuario/api-tareas',
    demo: '',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'Tienda Online',
    year: '2025',
    category: 'frontend',
    image: '/img/proyectos/ecommerce.svg',
    description: {
      es: 'E-commerce responsivo con carrito de compras, filtros de productos y checkout simulado.',
      en: 'Responsive e-commerce with shopping cart, product filters and simulated checkout.',
    },
    tech: ['Vue 3', 'Pinia', 'CSS3'],
    repo: 'https://github.com/tu-usuario/tienda-online',
    demo: 'https://tienda-tu-usuario.vercel.app',
    featured: true,
  },
  {
    id: 'gestor-gastos',
    title: 'Gestor de Gastos',
    year: '2024',
    category: 'mobile',
    image: '/img/proyectos/gestor-gastos.svg',
    description: {
      es: 'Aplicación para registrar gastos por categoría, con gráficas mensuales y exportación de reportes.',
      en: 'App to track expenses by category, with monthly charts and report export.',
    },
    tech: ['JavaScript', 'Firebase', 'Chart.js'],
    repo: 'https://github.com/tu-usuario/gestor-gastos',
    demo: '',
    featured: false,
  },
  {
    id: 'blog-adso',
    title: 'Blog Académico',
    year: '2024',
    category: 'backend',
    image: '/img/proyectos/blog-adso.svg',
    description: {
      es: 'Blog con panel de administración, CRUD de artículos, categorías y sistema de comentarios.',
      en: 'Blog with admin panel, article CRUD, categories and a comment system.',
    },
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    repo: 'https://github.com/tu-usuario/blog-adso',
    demo: '',
    featured: false,
  },
  {
    id: 'clima-app',
    title: 'App del Clima',
    year: '2024',
    category: 'frontend',
    image: '/img/proyectos/clima-app.svg',
    description: {
      es: 'Consulta de clima en tiempo real consumiendo una API pública, con búsqueda de ciudades y pronóstico a 5 días.',
      en: 'Real-time weather lookup consuming a public API, with city search and a 5-day forecast.',
    },
    tech: ['JavaScript', 'API REST', 'CSS3'],
    repo: 'https://github.com/tu-usuario/clima-app',
    demo: 'https://clima-tu-usuario.vercel.app',
    featured: false,
  },
]

/* ---------- Categorías de filtro de proyectos ---------- */
export const projectCategories = [
  { id: 'all', label: { es: 'Todos', en: 'All' } },
  { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
  { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
  { id: 'mobile', label: { es: 'Apps', en: 'Apps' } },
]

/* ---------- Redes sociales ---------- */
export const socials = [
  { id: 'github', label: 'GitHub', url: profile.github, icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', url: profile.linkedin, icon: 'linkedin' },
  { id: 'email', label: 'Email', url: `mailto:${profile.email}`, icon: 'mail' },
]
