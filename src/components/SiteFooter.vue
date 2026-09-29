<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile, socials } from '../data/portfolio.js'

const { t } = useI18n()

const root = ref(null)
useGsap(root)

const year = new Date().getFullYear()

const icons = {
  github:
    'M12 .5C5.73.5.9 5.34.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53l-.02-1.86c-3.08.67-3.73-1.49-3.73-1.49-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.07 5.48.4.34.75 1.02.75 2.06l-.01 3.05c0 .3.2.64.77.53A11.12 11.12 0 0 0 23 11.6C23 5.34 18.27.5 12 .5Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z',
  mail: 'M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.4.5 7.6 5.4L19.6 6H4.4ZM20 7.8l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.8V18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V7.8Z',
}

const links = computed(() => [
  { id: 'inicio', label: t('nav.home') },
  { id: 'sobre-mi', label: t('nav.about') },
  { id: 'habilidades', label: t('nav.skills') },
  { id: 'proyectos', label: t('nav.projects') },
  { id: 'contacto', label: t('nav.contact') },
])

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function backTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer ref="root" class="footer">
    <div class="container footer-inner">
      <div class="foot-brand" data-reveal="up">
        <a href="#inicio" class="logo" @click.prevent="goTo('inicio')">
          <span class="logo-mark">J</span>
          <span class="logo-text">{{ profile.shortName }}<i>.</i></span>
        </a>
        <p class="tagline">{{ t('footer.tagline') }}</p>

        <div class="socials">
          <a
            v-for="s in socials"
            :key="s.id"
            :href="s.url"
            class="social"
            target="_blank"
            rel="noopener"
            :aria-label="s.label"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path :d="icons[s.icon]" />
            </svg>
          </a>
        </div>
      </div>

      <nav class="foot-nav" data-reveal="stagger" aria-label="Footer">
        <a v-for="l in links" :key="l.id" :href="`#${l.id}`" @click.prevent="goTo(l.id)">
          {{ l.label }}
        </a>
      </nav>

      <div class="foot-cta" data-reveal="up">
        <a :href="profile.cv" class="btn btn-primary" download target="_blank" rel="noopener">
          📄 {{ t('nav.downloadCV') }}
        </a>
        <button class="back-top" type="button" @click="backTop">
          ↑ {{ t('footer.backTop') }}
        </button>
      </div>
    </div>

    <div class="container foot-bottom">
      <span>© {{ year }} {{ profile.fullName }}. {{ t('footer.rights') }}</span>
      <span class="stack">{{ t('footer.builtWith') }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-2);
  padding-top: 56px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr auto;
  gap: 40px;
  align-items: start;
  padding-bottom: 40px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 20px;
  color: var(--text-strong);
}
.logo-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 17px;
}
.logo-text i {
  font-style: normal;
  color: var(--accent-text);
}

.tagline {
  margin-top: 14px;
  font-size: 14.5px;
  color: var(--text-dim);
  max-width: 320px;
}

.socials {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.social {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.social:hover {
  color: var(--accent-text);
  border-color: var(--accent);
  transform: translateY(-4px);
  background: var(--accent-soft);
}

.foot-nav {
  display: grid;
  gap: 10px;
}
.foot-nav a {
  font-size: 15px;
  color: var(--text);
  width: fit-content;
  position: relative;
  transition: color 0.25s ease, transform 0.25s ease;
}
.foot-nav a::before {
  content: '→ ';
  opacity: 0;
  color: var(--accent-text);
  transition: opacity 0.25s ease;
}
.foot-nav a:hover {
  color: var(--text-strong);
  transform: translateX(4px);
}
.foot-nav a:hover::before {
  opacity: 1;
}

.foot-cta {
  display: grid;
  gap: 12px;
  justify-items: stretch;
}
.back-top {
  padding: 11px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.back-top:hover {
  border-color: var(--accent);
  color: var(--accent-text);
  transform: translateY(-3px);
}

.foot-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding-block: 22px;
  border-top: 1px solid var(--border);
  font-size: 13.5px;
  color: var(--text-dim);
}
.stack {
  color: var(--accent-text);
}

@media (max-width: 860px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: left;
  }
  .foot-cta {
    justify-items: start;
  }
}
</style>
