<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { projects, projectCategories } from '../data/portfolio.js'
import Icon from './Icon.vue'

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
                <Icon name="github" :size="17" />
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
                <Icon name="external-link" :size="17" />
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
