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
  email: 'jhonpimiento31@gmail.com',
  github: 'https://github.com/Jhonpi33',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
  cv: '/cv/Hoja_De_Vida_Jhon_Pimiento.pdf', // tu hoja de vida real en public/cv/
}

/* ---------- Habilidades agrupadas por categoría ---------- */
export const skillGroups = [
  {
    id: 'frontend',
    icon: 'layout',
    name: { es: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3 / Flexbox / Grid', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Vue.js 3', level: 84 },
      { name: 'Quasar', level: 78 },
      { name: 'React', level: 68 },
    ],
  },
  {
    id: 'backend',
    icon: 'server',
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
    icon: 'database',
    name: { es: 'Bases de datos', en: 'Databases' },
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 74 },
      { name: 'MongoDB', level: 68 },
      { name: 'Firebase', level: 64 },
      { name: 'Supabase', level: 66 },
      { name: 'Modelado de datos', level: 72 },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    name: { es: 'Herramientas', en: 'Tools' },
    skills: [
      { name: 'Git / GitHub', level: 86 },
      { name: 'Vite', level: 82 },
      { name: 'Docker', level: 62 },
      { name: 'Figma', level: 66 },
      { name: 'Postman', level: 74 },
      { name: 'Metodologías ágiles', level: 70 },
    ],
  },
]

/* ---------- Chips con logo alrededor de la foto de perfil ----------
   Para agregar o quitar tecnologías solo añade/quita una línea aquí.
   Los logos viven en public/img/logos/
   url → página oficial de la tecnología (en GitHub va tu repo)          */
export const heroChips = [
  { name: 'Vue.js', logo: '/img/logos/vuejs-original.svg', url: 'https://vuejs.org/' },
  {
    name: 'JavaScript',
    logo: '/img/logos/javascript-original.svg',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  { name: 'Node.js', logo: '/img/logos/nodejs-original.svg', url: 'https://nodejs.org/' },
  { name: 'Git', logo: '/img/logos/git-original.svg', url: 'https://git-scm.com/' },
  { name: 'GitHub', logo: '/img/logos/github-original.svg', url: 'https://github.com/Jhonpi33' },
  { name: 'MySQL', logo: '/img/logos/mysql-original.svg', url: 'https://www.mysql.com/' },
]

/* ---------- Tecnologías del marquee ---------- */
export const stackMarquee = [
  'Vue.js',
  'Quasar',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'Git',
  'GitHub',
  'Vite',
  'Docker',
  'Figma',
  'Postman',
  'Firebase',
]

/* ---------- Proyectos ---------- */
export const projects = [
  {
    id: 'portafolio',
    title: 'Portafolio Personal',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/portafolio.png',
    description: {
      es: 'Sitio portafolio construido con Vue 3 y Vite, con animaciones GSAP, modo oscuro/claro y contenido bilingüe.',
      en: 'Portfolio site built with Vue 3 and Vite, featuring GSAP animations, dark/light mode and bilingual content.',
    },
    tech: ['Vue 3', 'Vite', 'GSAP', 'i18n'],
    repo: 'https://github.com/Jhonpi33/Portafolio',
    demo: '',
    featured: true,
  },
  {
    id: 'lab-ficat',
    title: 'Laboratorio FICAT',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/lab-ficat.png',
    description: {
      es: 'Sistema de gestión para el Laboratorio de Alimentos y Grasas del SENA: solicitudes, muestras, cotizaciones y facturación con roles y trazabilidad.',
      en: 'Management system for the SENA Food and Fats Laboratory: requests, samples, quotes and invoicing with roles and traceability.',
    },
    tech: ['Vue 3', 'Quasar', 'Express', 'MongoDB'],
    repo: 'https://github.com/Jhonpi33/LAB_FICAT',
    demo: '',
    featured: true,
  },
  {
    id: 'guaiti',
    title: 'Gua-iti — Turismo de Aventura',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/guaiti.png',
    description: {
      es: 'Sistema con roles (JWT) para una empresa de cuevas y cuatrimotos: guías, clientes, actividades, motos y tarifas configurables desde el panel.',
      en: 'Role-based system (JWT) for a caving and quad-bike company: guides, clients, activities, bikes and rates configurable from the panel.',
    },
    tech: ['Vue 3', 'Express', 'JWT', 'MongoDB'],
    repo: 'https://github.com/Jhonpi33/GUAITI',
    demo: 'https://guaiti-web.onrender.com',
    featured: true,
  },
  {
    id: 'tienda',
    title: 'Tienda — Gestión de Inventario',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/tienda.png',
    description: {
      es: 'App de inventario con productos, categorías, proveedores, movimientos de stock y reportes exportables a CSV y PDF.',
      en: 'Inventory app with products, categories, suppliers, stock movements and reports exportable to CSV and PDF.',
    },
    tech: ['Vue 3', 'Express', 'MongoDB', 'Docker'],
    repo: 'https://github.com/Jhonpi33/TIENDA',
    demo: 'https://tienda-sena-market.onrender.com/',
    featured: true,
  },
  {
    id: 'gestion-academica',
    title: 'Gestión Académica con JWT',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/gestion-academica.png',
    description: {
      es: 'Autenticación con roles (JWT) para administrar cursos, aprendices y usuarios, con API REST en Express y panel en Vue/Quasar.',
      en: 'Role-based authentication (JWT) to manage courses, students and users, with an Express REST API and a Vue/Quasar dashboard.',
    },
    tech: ['Vue 3', 'Quasar', 'Express', 'JWT'],
    repo: 'https://github.com/Jhonpi33/LOGIN-',
    demo: '',
    featured: false,
  },
  {
    id: 'fichero',
    title: 'Fichero — Bitácora de Comandos',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/fichero.png',
    description: {
      es: 'App para compartir comandos de terminal en una bitácora, con API Express, PostgreSQL y protección por código de acceso.',
      en: 'App to share terminal commands in a logbook, with an Express API, PostgreSQL and access-code protection.',
    },
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Render'],
    repo: 'https://github.com/Jhonpi33/fichero',
    demo: '',
    featured: false,
  },
  {
    id: 'crud-barberia',
    title: 'Panel CRUD de Barbería',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/crud-barberia.png',
    description: {
      es: 'Panel para agendar citas por barbero con validación de horarios, control de cobros, fidelidad de clientes y estadísticas.',
      en: 'Panel to book appointments per barber with schedule validation, payment tracking, customer loyalty and statistics.',
    },
    tech: ['Vue 3', 'Vite', 'JavaScript', 'CRUD'],
    repo: 'https://github.com/Jhonpi33/CRUD_BARBERIA',
    demo: 'https://jhonpi33.github.io/CRUD_BARBERIA/',
    featured: false,
  },
  {
    id: 'servicios-sena',
    title: 'Directorio de Servicios SENA',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/servicios-sena.png',
    description: {
      es: 'SPA que reúne los servicios del centro de formación: buscador con filtros y fichas con horarios, encargado y contacto de cada dependencia.',
      en: 'SPA gathering the training center services: search with filters and detail cards with schedules, staff and contact info.',
    },
    tech: ['Vue 3', 'Quasar', 'Vite', 'SPA'],
    repo: 'https://github.com/Jhonpi33/SERVICIOS_SENA',
    demo: '',
    featured: false,
  },
  {
    id: 'biblioteca-api',
    title: 'API de Reserva de Espacios',
    year: '2026',
    category: 'backend',
    image: '/img/proyectos/biblioteca-api.png',
    description: {
      es: 'API REST con autenticación JWT para gestionar miembros, salas y reservas, con reglas de negocio como cálculo de costos y anti-solapamiento.',
      en: 'JWT-authenticated REST API for members, rooms and bookings, with business rules such as cost calculation and overlap prevention.',
    },
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Jhonpi33/Biblioteca_Web',
    demo: '',
    featured: false,
  },
  {
    id: 'guaiti-guias',
    title: 'Guaiti — Registro de Guianzas',
    year: '2026',
    category: 'fullstack',
    image: '/img/proyectos/guaiti-guias.png',
    description: {
      es: 'App para registrar guianzas de transporte y calcular pagos, consumiendo la API de Supabase directamente desde el navegador.',
      en: 'App to log transport trips and compute payouts, consuming the Supabase API straight from the browser.',
    },
    tech: ['Supabase', 'JavaScript', 'REST API'],
    repo: 'https://github.com/Jhonpi33/GUA-ITI-GUIAS',
    demo: '',
    featured: false,
  },
  {
    id: 'areagua',
    title: 'Areagua — Taller Artesanal',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/areagua.png',
    description: {
      es: 'Landing artesanal para un taller de tejido en fique: animaciones al hacer scroll, catálogo con lightbox y contacto directo por WhatsApp.',
      en: 'Artisan landing page for a fique weaving workshop: scroll animations, lightbox catalog and direct WhatsApp contact.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Diseño'],
    repo: 'https://github.com/Jhonpi33/PEG_Aregua',
    demo: '',
    featured: false,
  },
  {
    id: 'mj',
    title: 'MJ — Tienda de Cosmetología',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/mj.png',
    description: {
      es: 'Landing de cosmetología con catálogo de productos, carrito de compras y formulario de reserva de citas, con diseño responsive.',
      en: 'Cosmetology landing page with product catalog, shopping cart and appointment booking form, responsive design.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce'],
    repo: 'https://github.com/Jhonpi33/MJ',
    demo: '',
    featured: false,
  },
  {
    id: 'fotos-panachi',
    title: 'Portal de Fotos Privadas',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/fotos-panachi.png',
    description: {
      es: 'Galería que protege los enlaces de Drive con cifrado AES-GCM dentro del navegador y solicitud de clave por WhatsApp.',
      en: 'Gallery that protects Drive links with AES-GCM encryption in the browser and key requests via WhatsApp.',
    },
    tech: ['Web Crypto', 'AES-GCM', 'JavaScript', 'Render'],
    repo: 'https://github.com/Jhonpi33/FOTOS_PANACHI',
    demo: 'https://fotos-panachi.onrender.com',
    featured: false,
  },
  {
    id: 'abogados',
    title: 'Estudio Jurídico Mejía & Asociados',
    year: '2026',
    category: 'frontend',
    image: '/img/proyectos/abogados.png',
    description: {
      es: 'Sitio corporativo responsive para un estudio jurídico con hero en video, servicios, equipo y contacto.',
      en: 'Responsive corporate site for a law firm with video hero, services, team and contact.',
    },
    tech: ['HTML5', 'CSS3', 'Responsive', 'Video'],
    repo: 'https://github.com/Jhonpi33/Abogados',
    demo: '',
    featured: false,
  },
]

/* ---------- Categorías de filtro de proyectos ---------- */
export const projectCategories = [
  { id: 'all', label: { es: 'Todos', en: 'All' } },
  { id: 'fullstack', label: { es: 'Full Stack', en: 'Full Stack' } },
  { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
  { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
]

/* ---------- Redes sociales ---------- */
export const socials = [
  { id: 'github', label: 'GitHub', url: profile.github, icon: 'github' },
  { id: 'email', label: 'Email', url: `mailto:${profile.email}`, icon: 'mail' },
]
