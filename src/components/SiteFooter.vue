<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile, socials } from '../data/portfolio.js'
import LogoMark from './LogoMark.vue'
import Icon from './Icon.vue'

const { t } = useI18n()

const root = ref(null)
useGsap(root)

const year = new Date().getFullYear()

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
          <LogoMark :size="36" />
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
            <Icon :name="s.icon" :size="18" />
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
          <Icon name="download" :size="17" /> {{ t('nav.downloadCV') }}
        </a>
        <button class="back-top" type="button" @click="backTop">
          <Icon name="arrow-up" :size="15" /> {{ t('footer.backTop') }}
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
.logo .mark {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.logo:hover .mark {
  transform: rotate(-6deg) scale(1.05);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
