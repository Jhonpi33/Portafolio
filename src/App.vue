<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { y } = useWindowScroll()
const progress = computed(() => {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  return max > 0 ? Math.min(y.value / max, 1) : 0
})
</script>

<template>
  <!-- Barra de progreso de lectura -->
  <div class="scroll-progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />

  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  z-index: 1100;
  will-change: transform;
}
</style>
