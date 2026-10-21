<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile, heroChips } from '../data/portfolio.js'
import Icon from './Icon.vue'

const { t, tm } = useI18n()

/* Coloca los chips en círculo alrededor de la foto */
function chipStyle(i) {
  const angle = ((-90 + (360 / heroChips.length) * i) * Math.PI) / 180
  const r = 62
  return {
    left: `calc(50% + ${(Math.cos(angle) * r).toFixed(2)}%)`,
    top: `calc(50% + ${(Math.sin(angle) * r).toFixed(2)}%)`,
    '--delay': `${(i * 0.45).toFixed(2)}s`,
  }
}

const section = ref(null)
const photoWrap = ref(null)
const roleText = ref(null)

const { gsap } = useGsap(section)

let roleTimer = null
let roleIndex = 0

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function rotateRoles() {
  roleTimer = setInterval(() => {
    const roles = tm('hero.roles') || []
    if (!roles.length || !roleText.value) return
    roleIndex = (roleIndex + 1) % roles.length
    const next = roles[roleIndex]
    gsap.to(roleText.value, {
      y: -14,
      opacity: 0,
      duration: 0.28,
      ease: 'power2.in',
      onComplete: () => {
        if (!roleText.value) return
        roleText.value.textContent = next
        gsap.fromTo(
          roleText.value,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
        )
      },
    })
  }, 2600)
}

const onMove = (e) => {
  if (!photoWrap.value || window.innerWidth < 900) return
  const x = (e.clientX / window.innerWidth - 0.5) * 18
  const y = (e.clientY / window.innerHeight - 0.5) * 18
  gsap.to(photoWrap.value, { x, y, duration: 0.9, ease: 'power3.out' })
}

onMounted(() => {
  rotateRoles()
  window.addEventListener('mousemove', onMove, { passive: true })
})

onBeforeUnmount(() => {
  clearInterval(roleTimer)
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <section id="inicio" ref="section" class="hero">
    <!-- fondos decorativos -->
    <div class="hero-bg" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="grid-lines"></span>
    </div>

    <div class="container hero-inner">
      <!-- Texto -->
      <div class="hero-copy">
        <p class="hello" data-reveal="up">{{ t('hero.greeting') }}</p>

        <h1 class="title" data-reveal="up">
          {{ t('hero.name') }}
          <span class="grad">{{ t('hero.lastname') }}</span>
        </h1>

        <p class="role">
          <span ref="roleText" class="role-text">{{ tm('hero.roles')[0] }}</span>
          <span class="cursor" aria-hidden="true"></span>
        </p>

        <p class="intro" data-reveal="up">{{ t('hero.intro') }}</p>

        <div class="cta" data-reveal="stagger">
          <button class="btn btn-primary" @click="goTo('proyectos')">
            {{ t('hero.ctaProjects') }}
            <Icon name="arrow-down" :size="17" />
          </button>
          <a
            :href="profile.cv"
            class="btn btn-ghost"
            download
            target="_blank"
            rel="noopener"
          >
            <Icon name="download" :size="17" />
            {{ t('hero.ctaCV') }}
          </a>
          <button class="btn btn-soft" @click="goTo('contacto')">
            <Icon name="mail" :size="17" />
            {{ t('hero.ctaContact') }}
          </button>
        </div>

        <!-- Estadísticas -->
        <div class="stats" data-reveal="stagger">
          <div v-for="(s, i) in tm('hero.stats')" :key="i" class="stat">
            <strong>
              <span :data-count="s.value" :data-suffix="s.suffix">0{{ s.suffix }}</span>
            </strong>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Foto -->
      <div class="hero-visual" data-reveal="scale">
        <div ref="photoWrap" class="photo-wrap">
          <span class="ring" aria-hidden="true"></span>
          <span class="ring ring-2" aria-hidden="true"></span>
          <img
            :src="profile.photo"
            :alt="profile.fullName"
            class="photo"
            width="340"
            height="340"
          />

          <!-- chips flotantes con logo y link a cada tecnología -->
          <a
            v-for="(chip, i) in heroChips"
            :key="chip.name"
            class="chip-orbit"
            :href="chip.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Sitio oficial de ${chip.name}`"
            :style="chipStyle(i)"
          >
            <span class="chip-float">
              <img
                :src="chip.logo"
                alt=""
                width="17"
                height="17"
                aria-hidden="true"
                :class="{
                  'is-github': chip.name === 'GitHub',
                  'is-mysql': chip.name === 'MySQL'
                }"
              />
              {{ chip.name }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- scroll indicator -->
    <a href="#sobre-mi" class="scroll-hint" aria-label="Scroll">
      <span class="mouse"><i></i></span>
      <span class="scroll-text">{{ t('hero.scroll') }}</span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + 40px) 0 80px;
  overflow: hidden;
}

/* fondos */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
}
.orb-1 {
  width: 460px;
  height: 460px;
  top: -120px;
  left: -140px;
  background: radial-gradient(circle, var(--glow), transparent 70%);
}
.orb-2 {
  width: 520px;
  height: 520px;
  bottom: -180px;
  right: -160px;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent-2) 55%, transparent), transparent 70%);
}
.grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%);
  opacity: 0.5;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 50px;
}

/* copy */
.hello {
  font-size: 17px;
  color: var(--text-dim);
  font-weight: 500;
}

.title {
  font-size: clamp(38px, 6.4vw, 74px);
  font-weight: 800;
  margin-top: 6px;
  line-height: 1.04;
}
.title .grad {
  display: block;
}

.role {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 18px;
  min-height: 40px;
  font-family: var(--font-head);
  font-size: clamp(18px, 2.6vw, 26px);
  font-weight: 600;
  color: var(--text-strong);
}
.role-text {
  display: inline-block;
}
.cursor {
  display: inline-block;
  width: 3px;
  height: 1.05em;
  margin-left: 6px;
  background: var(--accent);
  border-radius: 2px;
  animation: blink 1s steps(2, start) infinite;
}
@keyframes blink {
  to {
    visibility: hidden;
  }
}

.intro {
  margin-top: 20px;
  max-width: 560px;
  font-size: clamp(15.5px, 1.6vw, 17.5px);
  color: var(--text);
  line-height: 1.75;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

/* stats */
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin-top: 46px;
  padding-top: 30px;
  border-top: 1px solid var(--border);
}
.stat strong {
  display: block;
  font-family: var(--font-head);
  font-size: clamp(26px, 3.4vw, 36px);
  font-weight: 800;
  color: var(--text-strong);
  line-height: 1;
}
.stat-label {
  font-size: 13.5px;
  color: var(--text-dim);
}

/* visual */
.hero-visual {
  display: flex;
  justify-content: center;
}
.photo-wrap {
  position: relative;
  width: min(360px, 78vw);
  aspect-ratio: 1;
}
.photo {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid color-mix(in srgb, var(--accent) 55%, transparent);
  box-shadow: 0 30px 70px -30px var(--glow), var(--shadow);
}
.ring {
  position: absolute;
  inset: -18px;
  border: 1px dashed color-mix(in srgb, var(--accent) 45%, transparent);
  border-radius: 50%;
  animation: spin 26s linear infinite;
}
.ring-2 {
  inset: -40px;
  border-style: solid;
  border-color: var(--border);
  animation-duration: 44s;
  animation-direction: reverse;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.chip-orbit {
  position: absolute;
  z-index: 3;
  display: block;
  text-decoration: none;
  transform: translate(-50%, -50%);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.chip-orbit:hover,
.chip-orbit:focus-visible {
  z-index: 4;
  transform: translate(-50%, -50%) scale(1.08);
}
.chip-float {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  padding: 8px 15px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-strong);
  box-shadow: var(--shadow);
  animation: float 5s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.chip-float:hover {
  border-color: var(--accent);
  box-shadow: 0 10px 26px -14px var(--glow);
}
.chip-orbit:focus-visible .chip-float {
  border-color: var(--accent);
  outline: none;
}
.chip-float img {
  width: 17px;
  height: 17px;
  object-fit: contain;
  flex-shrink: 0;
}
/* Logos que no se veían sobre el chip oscuro (tema dark):
   - GitHub: el SVG original es casi negro (#181616) y desaparecía;
     se pinta en blanco (versión oficial de GitHub para fondos oscuros).
   - MySQL: azul muy oscuro (#00618A); se aclara hasta lograr contraste.
   En tema claro se revierte: ahí los logos originales ya son visibles. */
.chip-float img.is-github {
  filter: brightness(0) invert(1);
}
.chip-float img.is-mysql {
  filter: brightness(1.9) saturate(1.2);
}
[data-theme='light'] .chip-float img.is-github,
[data-theme='light'] .chip-float img.is-mysql {
  filter: none;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}

/* scroll hint */
.scroll-hint {
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-dim);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}
.scroll-hint:hover {
  color: var(--accent-text);
}
.mouse {
  width: 24px;
  height: 38px;
  border: 1.5px solid currentColor;
  border-radius: 14px;
  display: grid;
  justify-content: center;
  padding-top: 7px;
}
.mouse i {
  width: 3px;
  height: 7px;
  border-radius: 2px;
  background: currentColor;
  animation: wheel 1.6s ease-in-out infinite;
}
@keyframes wheel {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(13px);
    opacity: 0;
  }
}

/* ---------- responsive ---------- */
@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 56px;
  }
  .hero-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .intro {
    margin-inline: auto;
  }
  .cta,
  .stats {
    justify-content: center;
  }
  .stats {
    gap: 26px;
  }
  .hero-visual {
    order: -1;
  }
  .photo-wrap {
    width: min(270px, 66vw);
  }
  .scroll-hint {
    display: none;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: calc(var(--nav-h) + 24px);
  }
  .cta {
    width: 100%;
  }
  .cta .btn {
    width: 100%;
  }
  .chip-float {
    font-size: 11.5px;
    padding: 6px 11px;
    gap: 5px;
  }
  .chip-float img {
    width: 14px;
    height: 14px;
  }
}
</style>
