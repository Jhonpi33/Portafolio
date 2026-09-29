<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { projects, projectCategories } from '../data/portfolio.js'

const { t, locale } = useI18n()

const activeCat = ref('all')
const filtered = computed(() =>
  activeCat.value === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCat.value),
)

// Re-animar solo el grid al cambiar de filtro (sin tocar el resto)
const root = ref(null)
const grid = ref(null)
const { revealNow } = useGsap(root)

function setCat(id) {
  if (activeCat.value === id) return
  activeCat.value = id
  requestAnimationFrame(() => revealNow(grid.value))
}
</script>

<template>
  <section id="proyectos" ref="root" class="section section--alt">
    <div class="container">
      <header class="section-head head-row" data-reveal="up">
        <div>
          <span class="eyebrow">{{ t('projects.eyebrow') }}</span>
          <h2>{{ t('projects.title') }}</h2>
          <p>{{ t('projects.subtitle') }}</p>
        </div>
      </header>

      <!-- Filtros -->
      <div class="filters" role="tablist" data-reveal="up">
        <button
          v-for="cat in projectCategories"
          :key="cat.id"
          class="filter"
          :class="{ active: activeCat === cat.id }"
          role="tab"
          :aria-selected="activeCat === cat.id"
          @click="setCat(cat.id)"
        >
          {{ cat.label[locale] }}
        </button>
      </div>

      <!-- Grid -->
      <transition-group name="grid" tag="div" class="projects-grid">
        <article v-for="p in filtered" :key="p.id" class="project card">
          <div class="thumb">
            <img :src="p.image" :alt="p.title" loading="lazy" width="640" height="400" />
            <span class="year">{{ p.year }}</span>
            <div class="overlay">
              <a
                v-if="p.repo"
                :href="p.repo"
                class="ov-btn"
                target="_blank"
                rel="noopener"
                :aria-label="t('projects.viewCode')"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 .5C5.73.5.9 5.34.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53l-.02-1.86c-3.08.67-3.73-1.49-3.73-1.49-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.07 5.48.4.34.75 1.02.75 2.06l-.01 3.05c0 .3.2.64.77.53A11.12 11.12 0 0 0 23 11.6C23 5.34 18.27.5 12 .5Z"
                  />
                </svg>
                {{ t('projects.viewCode') }}
              </a>
              <a
                v-if="p.demo"
                :href="p.demo"
                class="ov-btn primary"
                target="_blank"
                rel="noopener"
                :aria-label="t('projects.viewDemo')"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ t('projects.viewDemo') }}
              </a>
            </div>
          </div>

          <div class="project-body">
            <h3>{{ p.title }}</h3>
            <p>{{ p.description[locale] }}</p>
            <div class="tags">
              <span v-for="tech in p.tech" :key="tech" class="chip">{{ tech }}</span>
            </div>
          </div>
        </article>
      </transition-group>

      <p v-if="!filtered.length" class="empty">{{ t('projects.empty') }}</p>
    </div>
  </section>
</template>

<style scoped>
.head-row {
  max-width: 760px;
}

/* filtros */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}
.filter {
  padding: 9px 20px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.filter:hover {
  color: var(--text-strong);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}
.filter.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
  font-weight: 600;
}

/* grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 26px;
}

.project {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--surface-2);
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.project:hover .thumb img {
  transform: scale(1.07);
}
.year {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 16px;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.project:hover .overlay,
.project:focus-within .overlay {
  opacity: 1;
}
.ov-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--text-strong);
  transform: translateY(12px);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease,
    color 0.25s ease;
}
.project:hover .ov-btn {
  transform: translateY(0);
}
.project:hover .ov-btn:nth-child(2) {
  transition-delay: 0.06s;
}
.ov-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}
.ov-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}
.ov-btn.primary:hover {
  filter: brightness(1.06);
}

.project-body {
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.project-body h3 {
  font-size: 20px;
}
.project-body p {
  font-size: 14.8px;
  color: var(--text);
  line-height: 1.65;
  flex: 1;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tags .chip {
  font-size: 12px;
  padding: 5px 11px;
}

.empty {
  text-align: center;
  color: var(--text-dim);
  padding: 40px 0;
}

/* transición de grid */
.grid-enter-active,
.grid-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.97);
}
.grid-leave-active {
  position: absolute;
}
.grid-move {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 720px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72), transparent 62%);
    backdrop-filter: none;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 14px;
  }
  .ov-btn {
    transform: none;
    background: rgba(255, 255, 255, 0.94);
    border-color: transparent;
    color: #10131a;
  }
  .ov-btn.primary {
    background: var(--accent);
    color: var(--accent-ink);
  }
}
</style>
