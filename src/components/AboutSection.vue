<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile } from '../data/portfolio.js'
import Icon from './Icon.vue'

const { t, tm } = useI18n()

const root = ref(null)
useGsap(root)

function p1() {
  return t('about.p1', { name: profile.fullName, career: profile.career })
}
</script>

<template>
  <section id="sobre-mi" ref="root" class="section section--alt">
    <div class="container">
      <header class="section-head" data-reveal="up">
        <span class="eyebrow">{{ t('about.eyebrow') }}</span>
        <h2>{{ t('about.title') }}</h2>
      </header>

      <div class="about-grid">
        <!-- Columna izquierda: texto -->
        <div class="about-text">
          <p class="lead" data-reveal="up">{{ p1() }}</p>
          <p class="lead" data-reveal="up">{{ t('about.p2') }}</p>

          <!-- conocimientos blandos -->
          <div class="soft" data-reveal="up">
            <h3>{{ t('about.knowledge') }}</h3>
            <div class="soft-chips" data-reveal="stagger">
              <span v-for="k in tm('about.knowledgeItems')" :key="k" class="chip">
                <Icon name="check" :size="14" :stroke="2.4" />
                {{ k }}
              </span>
            </div>
          </div>
        </div>

        <!-- Columna derecha: tarjetas de datos -->
        <div class="about-facts" data-reveal="stagger">
          <article v-for="f in tm('about.facts')" :key="f.title" class="fact card">
            <span class="fact-icon">
              <Icon :name="f.icon" :size="22" />
            </span>
            <div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.text }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-wrap">
        <h3 class="timeline-title" data-reveal="up">{{ t('about.timelineTitle') }}</h3>
        <ol class="timeline" data-reveal="stagger">
          <li v-for="(item, i) in tm('about.timeline')" :key="i">
            <span class="dot" aria-hidden="true"></span>
            <span class="period">{{ item.period }}</span>
            <div class="tl-body">
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: start;
}

.lead {
  font-size: clamp(16px, 1.7vw, 18px);
  line-height: 1.8;
  color: var(--text);
}
.lead + .lead {
  margin-top: 20px;
}

.soft {
  margin-top: 36px;
}
.soft h3 {
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 16px;
}
.soft-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.soft-chips .chip {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease,
    color 0.3s ease;
}
.soft-chips .chip:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  color: var(--accent-text);
}

/* facts */
.about-facts {
  display: grid;
  gap: 14px;
}
.fact {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 22px;
}
.fact-icon {
  font-size: 26px;
  line-height: 1;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
}
.fact h4 {
  font-size: 15.5px;
  margin-bottom: 4px;
}
.fact p {
  font-size: 14.5px;
  color: var(--text);
  line-height: 1.55;
}

/* timeline */
.timeline-wrap {
  margin-top: 72px;
}
.timeline-title {
  font-size: clamp(22px, 3vw, 30px);
  margin-bottom: 34px;
}
.timeline {
  position: relative;
  display: grid;
  gap: 4px;
  padding-left: 26px;
  border-left: 2px solid var(--border);
}
.timeline li {
  position: relative;
  padding: 18px 0 18px 22px;
}
.timeline .dot {
  position: absolute;
  left: -33px;
  top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--accent);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.timeline li:hover .dot {
  transform: scale(1.25);
  box-shadow: 0 0 0 6px var(--accent-soft);
}
.period {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--accent-text);
  text-transform: uppercase;
}
.tl-body h4 {
  font-size: clamp(17px, 2vw, 20px);
  margin: 8px 0 6px;
}
.tl-body p {
  font-size: 15px;
  color: var(--text);
  max-width: 760px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
