<script setup>
import { ref, watch, computed, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollSpy, useScrolled } from '../composables/useScroll.js'
import { theme, toggleTheme } from '../composables/useTheme.js'
import { setLang } from '../i18n.js'
import { profile } from '../data/portfolio.js'
import {
  House,
  User,
  Wrench,
  FolderGit2,
  Send,
  Languages,
  Sun,
  Moon,
  Download,
} from '@lucide/vue'

const { t, locale } = useI18n()

const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto']

const active = useScrollSpy(SECTIONS)
const scrolled = useScrolled(30)
const menuOpen = ref(false)

const links = computed(() => [
  { id: 'inicio', label: t('nav.home'), icon: House },
  { id: 'sobre-mi', label: t('nav.about'), icon: User },
  { id: 'habilidades', label: t('nav.skills'), icon: Wrench },
  { id: 'proyectos', label: t('nav.projects'), icon: FolderGit2 },
  { id: 'contacto', label: t('nav.contact'), icon: Send },
])

const isDark = computed(() => theme.value === 'dark')
const otherLang = computed(() => (locale.value === 'es' ? 'en' : 'es'))

function changeLang() {
  setLang(otherLang.value)
}

function goTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

watch(menuOpen, (open) => {
  document.body.classList.toggle('no-scroll', open)
})

onBeforeUnmount(() => document.body.classList.remove('no-scroll'))
</script>

<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner container">
      <!-- Logo -->
      <a href="#inicio" class="logo" @click.prevent="goTo('inicio')" aria-label="Inicio">
        <span class="monogramo">Jhon Pimiento</span>
      </a>

      <!-- Links desktop -->
      <nav class="nav-links" aria-label="Principal">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ active: active === link.id }"
          @click.prevent="goTo(link.id)"
        >
          <component
            :is="link.icon"
            class="nav-ic"
            :size="15"
            :stroke-width="2.1"
            aria-hidden="true"
          />
          <span>{{ link.label }}</span>
        </a>
      </nav>

      <!-- Acciones -->
      <div class="nav-actions">
        <button
          class="ctrl-btn lang-btn"
          type="button"
          :aria-label="t('nav.toggleLang')"
          @click="changeLang"
        >
          <Languages class="ctrl-ic" :size="15" :stroke-width="2.1" aria-hidden="true" />
          <span>{{ locale.toUpperCase() }}</span>
        </button>

        <button
          class="ctrl-btn"
          type="button"
          :aria-label="t('nav.toggleTheme')"
          @click="toggleTheme"
        >
          <component
            :is="isDark ? Sun : Moon"
            class="ctrl-ic theme-icon"
            :size="17"
            :stroke-width="2.1"
            aria-hidden="true"
          />
        </button>

        <a
          :href="profile.cv"
          class="btn btn-primary btn-sm cv-btn"
          download
          target="_blank"
          rel="noopener"
        >
          <Download class="btn-ic" :size="16" :stroke-width="2.1" aria-hidden="true" />
          <span class="cv-label">{{ t('nav.downloadCV') }}</span>
        </a>

        <!-- Hamburguesa -->
        <button
          class="burger"
          :class="{ open: menuOpen }"
          type="button"
          :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition name="menu">
      <nav v-if="menuOpen" class="mobile-menu" aria-label="Móvil">
        <a
          v-for="(link, i) in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ active: active === link.id }"
          :style="{ transitionDelay: `${0.05 + i * 0.05}s` }"
          @click.prevent="goTo(link.id)"
        >
          <span class="mobile-num">0{{ i + 1 }}</span>
          {{ link.label }}
        </a>
        <a :href="profile.cv" class="btn btn-primary" download target="_blank" rel="noopener">
          <Download class="btn-ic" :size="17" :stroke-width="2.1" aria-hidden="true" />
          {{ t('nav.downloadCV') }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border-bottom-color: var(--border);
  box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.7);
}

.navbar-inner {
  position: relative;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* logo */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 19px;
  color: var(--text-strong);
}
/* monograma de texto (reemplaza el icono azul) */
.monogramo {
  display: inline-block;
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 17.5px;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--text-strong);
  white-space: nowrap;
  transition: color 0.25s ease;
}
.logo:hover .monogramo {
  color: var(--accent-text);
}

/* links: centrados exactamente en el navbar, sin importar el ancho de logo/acciones */
.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-links a {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text);
  border-radius: 999px;
  transition: color 0.25s ease, background 0.25s ease;
}
.nav-ic {
  flex-shrink: 0;
  color: var(--text-dim);
  transition: color 0.25s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.nav-links a:hover .nav-ic,
.nav-links a.active .nav-ic {
  color: var(--accent-text);
}
.nav-links a::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 3px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.nav-links a:hover {
  color: var(--text-strong);
}
.nav-links a.active {
  color: var(--text-strong);
}
.nav-links a.active::after,
.nav-links a:hover::after {
  transform: scaleX(1);
}

/* acciones */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ctrl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 40px;
  height: 40px;
  padding: 0 11px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-strong);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
}
.ctrl-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.ctrl-ic {
  flex-shrink: 0;
  color: var(--text-strong);
}
.btn-ic {
  flex-shrink: 0;
}
.cv-btn {
  text-decoration: none;
}

/* burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 0 10px;
}
.burger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--text-strong);
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
}
.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* menú móvil */
.mobile-menu {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  padding: 32px 24px;
  overflow-y: auto;
  z-index: 999;
}
.mobile-menu a {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--font-head);
  font-size: clamp(28px, 8vw, 40px);
  font-weight: 700;
  color: var(--text-strong);
  padding: 10px 0;
  opacity: 0;
  transform: translateY(18px);
  animation: menuIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  transition: color 0.25s ease;
}
.mobile-menu a.active {
  color: var(--accent-text);
}
.mobile-menu .btn {
  font-size: 16px;
  align-items: center;
  margin-top: 22px;
  opacity: 0;
  animation: menuIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
}
.mobile-num {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-text);
  letter-spacing: 0.1em;
}
@keyframes menuIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 1000px) {
  .nav-links {
    display: none;
  }
  .burger {
    display: flex;
  }
  .cv-btn .cv-label {
    display: none;
  }
  .cv-btn {
    padding: 10px 14px;
  }
}
</style>
