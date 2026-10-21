<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { skillGroups, stackMarquee } from '../data/portfolio.js'
import Icon from './Icon.vue'

const { t, locale } = useI18n()

const root = ref(null)
useGsap(root)

function levelLabel(level) {
  if (level >= 85) return t('skills.levels.advanced')
  if (level >= 70) return t('skills.levels.intermediate')
  return t('skills.levels.basic')
}
</script>

<template>
  <section id="habilidades" ref="root" class="section">
    <div class="container">
      <header class="section-head" data-reveal="up">
        <span class="eyebrow">{{ t('skills.eyebrow') }}</span>
        <h2>{{ t('skills.title') }}</h2>
        <p>{{ t('skills.subtitle') }}</p>
      </header>

      <!-- Marquee de stack -->
      <div class="marquee" data-reveal="up" aria-hidden="true">
        <div class="marquee-track">
          <span v-for="(item, i) in [...stackMarquee, ...stackMarquee]" :key="i" class="marquee-item">
            {{ item }} <i>◆</i>
          </span>
        </div>
      </div>

      <!-- Grupos -->
      <div class="skills-grid" data-reveal="stagger">
        <article v-for="group in skillGroups" :key="group.id" class="skill-card card">
          <header class="skill-head">
            <span class="skill-icon">
              <Icon :name="group.icon" :size="20" />
            </span>
            <h3>{{ group.name[locale] }}</h3>
          </header>

          <ul class="skill-list">
            <li v-for="skill in group.skills" :key="skill.name" class="skill">
              <div class="skill-top">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ levelLabel(skill.level) }}</span>
              </div>
              <div class="bar">
                <span
                  class="bar-fill"
                  :data-progress="skill.level"
                  :style="{ width: skill.level + '%' }"
                ></span>
              </div>
            </li>
          </ul>
        </article>
      </div>

      <p class="skills-note" data-reveal="up">{{ t('skills.note') }}</p>
    </div>
  </section>
</template>

<style scoped>
/* marquee */
.marquee {
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  padding: 14px 0;
  border-block: 1px solid var(--border);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  gap: 26px;
  animation: scrollX 34s linear infinite;
}
.marquee:hover .marquee-track {
  animation-play-state: paused;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 26px;
  font-family: var(--font-head);
  font-size: 17px;
  font-weight: 600;
  color: var(--text-dim);
  white-space: nowrap;
  transition: color 0.3s ease;
}
.marquee-item:hover {
  color: var(--accent-text);
}
.marquee-item i {
  font-style: normal;
  font-size: 9px;
  color: var(--accent);
  opacity: 0.7;
}
@keyframes scrollX {
  to {
    transform: translateX(-50%);
  }
}

/* grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}
.skill-card {
  padding: 26px 24px 28px;
}
.skill-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.skill-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
}
.skill-head h3 {
  font-size: 18px;
}

.skill-list {
  display: grid;
  gap: 16px;
}
.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 7px;
}
.skill-name {
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-strong);
}
.skill-level {
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  white-space: nowrap;
}
.bar {
  height: 7px;
  border-radius: 999px;
  background: var(--surface-2);
  overflow: hidden;
}
.bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 14px -3px var(--glow);
}

.skills-note {
  margin-top: 34px;
  text-align: center;
  color: var(--text-dim);
  font-size: 15px;
}
</style>
