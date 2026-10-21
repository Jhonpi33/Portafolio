/**
 * =========================================================
 *  CONTENIDO BILINGÜE DEL PORTAFOLIO (ES / EN)
 *  Edita aquí todos los textos del sitio.
 * =========================================================
 */

export const messages = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      toggleTheme: 'Cambiar tema',
      toggleLang: 'Cambiar idioma',
    },

    hero: {
      greeting: 'Hola, soy',
      name: 'Jhon Alexander',
      lastname: 'Pimiento Bueno',
      aka: 'también me dicen Jhonpi',
      roles: ['Desarrollador Full Stack', 'Estudiante de ADSO', 'Creador de interfaces web'],
      intro: 'Construyo interfaces rápidas y atractivas, y backends que resuelven problemas reales. Estoy buscando mi primera experiencia profesional para seguir aprendiendo y aportar valor al equipo.',
      ctaProjects: 'Ver proyectos',
      ctaCV: 'Descargar hoja de vida',
      ctaContact: 'Hablemos',
      status: 'Buscando mi primer empleo',
      scroll: 'Desliza',
      stats: [
        { value: 14, suffix: '+', label: 'Proyectos' },
        { value: 12, suffix: '+', label: 'Tecnologías' },
        { value: 100, suffix: '%', label: 'Ganas de aprender' },
      ],
    },

    about: {
      eyebrow: 'Sobre mí',
      title: 'Un poco sobre quién soy y hacia dónde voy',
      p1: 'Soy {name}, estudiante de {career} en el SENA. Me especializo en construir aplicaciones web completas desde el diseño de la interfaz hasta la lógica del servidor y las bases de datos.',
      p2: 'Disfruto convertir ideas en productos funcionales, cuidando los detalles de experiencia de usuario, el rendimiento y el código limpio. Busco mi primera oportunidad profesional para seguir creciendo como desarrollador.',
      facts: [
        { icon: 'cap', title: 'Formación', text: 'ADSO — Analítica y Desarrollo de Software · SENA' },
        { icon: 'pin', title: 'Ubicación', text: 'Colombia · Disponible en remoto o presencial' },
        { icon: 'target', title: 'Objetivo', text: 'Primera experiencia profesional como desarrollador' },
        { icon: 'zap', title: 'Me motiva', text: 'Resolver problemas reales con tecnología' },
      ],
      timelineTitle: 'Mi recorrido',
      timeline: [
        {
          period: '2025 — 2026',
          title: 'Tecnólogo en ADSO — SENA',
          text: 'Analítica y Desarrollo de Software: programación, bases de datos, testing y metodologías ágiles.',
        },
        {
          period: '2024',
          title: 'Fundamentos web — HTML, CSS y JavaScript',
          text: 'Construcción de sitios responsivos, accesibles y con animaciones.',
        },
        {
          period: '2025',
          title: 'Bases de datos',
          text: 'MySQL y modelado de datos: consultas SQL, relaciones, procedimientos y diseño de bases de datos.',
        },
        {
          period: '2025',
          title: 'Frontend y Backend',
          text: 'Interfaces con HTML, CSS y JavaScript; del otro lado APIs con Node.js, Express y PHP.',
        },
        {
          period: '2025',
          title: 'Especialización en el ecosistema Vue',
          text: 'Vue 3, Vite, composables, Vue Router y animaciones con GSAP.',
        },
        {
          period: '2026',
          title: 'Frontend, Backend y POO con Python',
          text: 'Año enfocado en frontend y backend, y en programación orientada a objetos con Python.',
        },
        {
          period: 'Dic 2026',
          title: 'De etapa lectiva a etapa productiva',
          text: 'Actualmente estoy en etapa lectiva y en diciembre de este año inicio la etapa productiva (práctica profesional).',
        },
      ],
      knowledge: 'Lo que mejor se me da',
      knowledgeItems: ['Responsivo', 'Código limpio', 'Trabajo en equipo', 'Comunicación', 'Autoaprendizaje'],
    },

    skills: {
      eyebrow: 'Habilidades',
      title: 'Tecnologías con las que trabajo',
      subtitle: 'Un stack en constante crecimiento. Estas son las herramientas que uso día a día para diseñar, construir y desplegar productos web.',
      levels: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
      note: 'Siempre aprendiendo algo nuevo',
    },

    projects: {
      eyebrow: 'Proyectos',
      title: 'Cosas que he construido',
      subtitle: 'Una selección de proyectos académicos y personales donde aplico todo lo que he aprendido.',
      all: 'Todos',
      viewCode: 'Código',
      viewDemo: 'Demo',
      empty: 'No hay proyectos en esta categoría todavía.',
    },

    contact: {
      eyebrow: 'Contacto',
      title: '¿Trabajamos juntos?',
      subtitle: 'Estoy abierto a ofertas laborales, prácticas y proyectos freelance. Escríbeme y te respondo lo antes posible.',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Hoja de vida',
      form: {
        name: 'Tu nombre',
        namePh: 'Escribe tu nombre',
        email: 'Tu correo',
        emailPh: "tu{'@'}correo.com",
        message: 'Mensaje',
        messagePh: 'Cuéntame sobre tu proyecto o vacante...',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        required: 'Completa todos los campos con un correo válido.',
        success: '¡Listo! Se abrió tu aplicación de correo para enviar el mensaje.',
      },
      note: 'Los mensajes se envían a través de tu aplicación de correo habitual.',
    },

    footer: {
      tagline: 'Diseñado y desarrollado por Jhonpi.',
      rights: 'Todos los derechos reservados.',
      backTop: 'Volver arriba',
      builtWith: 'Hecho con Vue 3, Vite y GSAP',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      toggleTheme: 'Toggle theme',
      toggleLang: 'Toggle language',
    },

    hero: {
      greeting: 'Hi, I am',
      name: 'Jhon Alexander',
      lastname: 'Pimiento Bueno',
      aka: 'also known as Jhonpi',
      roles: ['Full Stack Developer', 'ADSO Student', 'Web interface builder'],
      intro: 'I build fast, engaging interfaces and backends that solve real problems. I am looking for my first professional experience to keep learning and add value to the team.',
      ctaProjects: 'View projects',
      ctaCV: 'Download résumé',
      ctaContact: "Let's talk",
      status: 'Looking for my first job',
      scroll: 'Scroll',
      stats: [
        { value: 14, suffix: '+', label: 'Projects' },
        { value: 12, suffix: '+', label: 'Technologies' },
        { value: 100, suffix: '%', label: 'Eagerness to learn' },
      ],
    },

    about: {
      eyebrow: 'About me',
      title: 'A bit about who I am and where I am heading',
      p1: 'I am {name}, a {career} student at SENA. I specialize in building complete web applications: from the interface design in Vue.js to server logic and databases.',
      p2: 'I enjoy turning ideas into functional products, taking care of user experience, performance and clean code. I am looking for my first professional opportunity to keep growing as a developer.',
      facts: [
        { icon: 'cap', title: 'Education', text: 'ADSO — Software Development & Analytics · SENA' },
        { icon: 'pin', title: 'Location', text: 'Colombia · Available remote or on-site' },
        { icon: 'target', title: 'Goal', text: 'First professional experience as a developer' },
        { icon: 'zap', title: 'What drives me', text: 'Solving real problems with technology' },
      ],
      timelineTitle: 'My path',
      timeline: [
        {
          period: '2025 — 2026',
          title: 'ADSO Technologist — SENA',
          text: 'Software Development & Analytics: programming, databases, testing and agile methodologies.',
        },
        {
          period: '2024',
          title: 'Web fundamentals — HTML, CSS & JavaScript',
          text: 'Building responsive, accessible and animated websites.',
        },
        {
          period: '2025',
          title: 'Databases',
          text: 'MySQL and data modeling: SQL queries, relationships, stored procedures and database design.',
        },
        {
          period: '2025',
          title: 'Frontend and Backend',
          text: 'Interfaces with HTML, CSS and JavaScript; on the other side, APIs with Node.js, Express and PHP.',
        },
        {
          period: '2025',
          title: 'Specialization in the Vue ecosystem',
          text: 'Vue 3, Vite, composables, Vue Router and animations with GSAP.',
        },
        {
          period: '2026',
          title: 'Frontend, Backend and OOP with Python',
          text: 'A year focused on frontend and backend, plus object-oriented programming with Python.',
        },
        {
          period: 'Dec 2026',
          title: 'From learning stage to productive stage',
          text: 'I am currently in the learning stage and in December of this year I start the productive stage (professional internship).',
        },
      ],
      knowledge: 'What I am best at',
      knowledgeItems: ['Responsive design', 'Clean code', 'Teamwork', 'Communication', 'Self-learning'],
    },

    skills: {
      eyebrow: 'Skills',
      title: 'Technologies I work with',
      subtitle: 'A constantly growing stack. These are the tools I use every day to design, build and ship web products.',
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
      note: 'Always learning something new',
    },

    projects: {
      eyebrow: 'Projects',
      title: 'Things I have built',
      subtitle: 'A selection of academic and personal projects where I apply everything I have learned.',
      all: 'All',
      viewCode: 'Code',
      viewDemo: 'Demo',
      empty: 'No projects in this category yet.',
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Shall we work together?',
      subtitle: 'I am open to job offers, internships and freelance projects. Write to me and I will reply as soon as possible.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Résumé',
      form: {
        name: 'Your name',
        namePh: 'Type your name',
        email: 'Your email',
        emailPh: "you{'@'}example.com",
        message: 'Message',
        messagePh: 'Tell me about your project or opening...',
        send: 'Send message',
        sending: 'Sending...',
        required: 'Please fill in every field with a valid email.',
        success: 'Done! Your email app opened to send the message.',
      },
      note: 'Messages are sent through your usual email application.',
    },

    footer: {
      tagline: 'Designed and developed by Jhonpi.',
      rights: 'All rights reserved.',
      backTop: 'Back to top',
      builtWith: 'Built with Vue 3, Vite and GSAP',
    },
  },
}

export default messages
