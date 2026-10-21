# 🚀 Portafolio — Jhonpi (Jhon Alexander Pimiento Bueno)

Portafolio personal hecho con **Vue 3 + Vite + GSAP**, con animaciones fluidas, modo oscuro/claro, contenido bilingüe (ES/EN) y diseño responsivo. Pensado para compartir con empresas junto a tu hoja de vida.

---

## 🧰 Requisitos

| Software | Uso |
| --- | --- |
| **Node.js** (18+) | Runtime |
| **npm** | Gestor de dependencias |
| **Visual Studio Code** | Editor |
| **Navegador web** (Chrome, Edge, Firefox…) | Ver el resultado |

### Tecnologías

- **Vue 3** (Composition API + `<script setup>`)
- **Vite 8** (dev server y build)
- **JavaScript**, **HTML5**, **CSS3**
- **GSAP + ScrollTrigger** → animaciones de entrada, contadores, barras y parallax
- **vue-i18n** → español / inglés
- **@vueuse/core** → scroll, utilidades reactivas

### Dependencias instaladas

```bash
npm install
npm install gsap
npm install @vueuse/core vue-i18n   # ya incluidas en package.json
```

---

## ▶️ Ejecutar

```bash
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
npm test         # smoke test SSR (verifica que todo renderiza)
```

---

## 🌐 Demos en vivo

Los proyectos destacados del portafolio con demo pública verificada:

| Proyecto | Demo | Alojamiento |
|---|---|---|
| **GUA-iti** — gestión de guiñas (Vue 3 + Quasar + Express + MongoDB) | [guaiti-web.onrender.com](https://guaiti-web.onrender.com/) | Render (API + web) |
| **Tienda — Gestión de Inventario** (Vue 3 + Express + MongoDB) | [tienda-sena-market.onrender.com](https://tienda-sena-market.onrender.com/) | Render |
| **Fotos Panachi** — catálogo fotográfico | [fotos-panachi.onrender.com](https://fotos-panachi.onrender.com/) | Render |
| **CRUD Barbería** — reservas y gestión (Quasar CLI + Vue 3) | [jhonpi33.github.io/CRUD_BARBERIA](https://jhonpi33.github.io/CRUD_BARBERIA/) | GitHub Pages |

---

## 📁 Estructura

```
PORTAFOLIO_Jhonpi/
├── index.html                  # meta, fuentes, anti-flash de tema
├── public/
│   ├── favicon.svg
│   ├── cv/cv-jhon-pimiento.pdf # 👈 tu hoja de vida
│   └── img/
│       ├── perfil.jpg           # 👈 tu foto
│       └── proyectos/*.svg      # 👈 capturas reales
├── scripts/
│   ├── smoke-test.mjs           # npm test
│   ├── generate-project-images.mjs
│   └── generate-cv.mjs
└── src/
    ├── main.js
    ├── App.vue                  # barra de progreso + secciones
    ├── style.css                # 🎨 design tokens (tema claro/oscuro)
    ├── i18n.js                  # configuración de idioma
    ├── data/
    │   ├── portfolio.js         # ⚠️ datos, habilidades y proyectos
    │   └── messages.js          # ⚠️ todos los textos ES / EN
    ├── composables/
    │   ├── useTheme.js          # 🌙 modo oscuro/claro
    │   ├── useGsap.js           # 🎞️ animaciones con alcance por sección
    │   └── useScroll.js         # scroll-spy + estado de scroll
    └── components/
        ├── NavBar.vue           # 🔗 navegación, hamburguesa, idioma, tema
        ├── LogoMark.vue         # 🏷️ monograma JP (SVG con degradado azul)
        ├── Icon.vue             # 🎯 set propio de iconos SVG (24×24, trazo)
        ├── HeroSection.vue      # Inicio
        ├── AboutSection.vue     # Sobre mí
        ├── SkillsSection.vue    # Habilidades
        ├── ProjectsSection.vue  # Proyectos (con filtros)
        ├── ContactSection.vue   # Contacto + formulario
        └── SiteFooter.vue       # Footer
```

### Sistema de diseño (paleta azul)

Todo el color vive en `src/style.css` como **design tokens**. No hay colores sueltos en los componentes: si cambias un token, cambia todo el sitio.

| Token | Modo oscuro | Modo claro | Para qué sirve |
| --- | --- | --- | --- |
| `--bg` / `--bg-2` | `#060a13` / `#090f1c` | `#f3f6fc` / `#ffffff` | fondo de página y de secciones alternas |
| `--surface` / `--surface-2` | `#0e1524` / `#131c2e` | `#ffffff` / `#e8eefb` | tarjetas, inputs, chips |
| `--accent` | `#4d8dff` | `#2563eb` | botones primarios, barras, filtros activos |
| `--accent-text` | `#77a8ff` | `#1d4ed8` | texto y eyebrows sobre fondo |
| `--accent-2` | `#35c3f0` | `#0284c7` | segundo color de los degradados |
| `--accent-ink` | `#041020` | `#ffffff` | texto encima del acento |

**Iconografía:** no se usan emojis ni librerías externas. `src/components/Icon.vue` concentra un set propio de SVG (`mail`, `download`, `github`, `layout`, `server`, `database`, `wrench`, `cap`, `pin`, `target`, `zap`, `send`, `sun`, `moon`, …). Para añadir uno, agrégalo al objeto `strokeIcons` (trazo) o `fillIcons` (relleno) y úsalo como `<Icon name="..." :size="20" />`.

### Secciones

`Inicio → Sobre mí → Habilidades → Proyectos → Contacto → Footer`

---

## ⚠️ Personaliza el contenido

### 1. Datos personales y enlaces — `src/data/portfolio.js`

```js
export const profile = {
  email:    'jhonpimiento31@gmail.com',           // 👈 tu correo real
  github:   'https://github.com/Jhonpi33',        // 👈 tu GitHub
  linkedin: 'https://www.linkedin.com/in/tu-usuario', // 👈 pon tu LinkedIn real (pendiente)
  cv:       '/cv/cv-jhon-pimiento.pdf',
}
```

También edita ahí mismo:
- **`skillGroups`** → tus habilidades reales con su nivel (0–100).
- **`projects`** → tus proyectos: título, descripción (ES/EN), tecnologías, `repo`, `demo` e `image`.
- **`projectCategories`** → categorías de los filtros.

### 2. Textos — `src/data/messages.js`

Todos los textos del sitio en `es` y `en`. Si cambias una clave, cámbiala en ambos idiomas.

### 3. Imágenes y CV

| Qué | Dónde |
| --- | --- |
| Foto de perfil | `public/img/perfil.jpg` |
| Capturas de proyectos | `public/img/proyectos/*.svg` → reemplázalas por `.png`/`.jpg` (actualiza la extensión en `portfolio.js`) |
| Hoja de vida | `public/cv/cv-jhon-pimiento.pdf` (hoy hay una plantilla de ejemplo) |

Regenerar los placeholders:

```bash
npm run gen:images
npm run gen:cv
```

---

## ✨ Características implementadas

- 🎞️ **Animaciones fluidas** con GSAP ScrollTrigger: entradas, cascadas, contadores y barras de progreso
- 🌙 **Modo oscuro / claro** persistente en `localStorage`
- 🇨🇴 **Español / 🇺🇸 Inglés** persistente en `localStorage`
- 📱 **Menú hamburguesa** animado para celular
- 🧭 **Navegación fluida** con scroll-spy (resalta la sección activa) y barra de progreso de lectura
- 📄 **CV descargable** en navbar, hero, contacto y footer
- ✉️ **Contacto por correo** con formulario validado (abre el cliente de email)
- 🔗 **GitHub y LinkedIn** accesibles desde contacto y footer
- 📱 **100% responsivo**: celular, tablet y computador
- ♿ **Accesible**: `aria-label`, foco visible y soporte de `prefers-reduced-motion`

---

## 🚀 Publicar en GitHub + Vercel

```bash
git init
git add .
git commit -m "Portafolio Jhonpi"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio-jhonpi.git
git push -u origin main
```

Luego en [vercel.com](https://vercel.com) → **Add New → Import** → elige el repo.

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Cada `git push` redespliega automáticamente. ✅

---

## 🧪 Pruebas

```bash
npm test
```

Verifica que las 6 secciones, proyectos, barras, contadores, CV, menú hamburguesa, idioma y tema rendericen correctamente en **es** e **en**.
