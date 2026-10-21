<script setup>
/**
 * Marca gráfica del portafolio.
 * Icono con degradado azul y brillo superior (sin monograma).
 * El id del degradado es único por instancia para no duplicar ids en el DOM.
 */
import { useId } from 'vue'

defineProps({
  size: { type: [Number, String], default: 34 },
  label: { type: String, default: 'Jhonpi' },
})

const uid = useId()
const bgId = `jp-mark-bg-${uid}`
const shineId = `jp-mark-shine-${uid}`
</script>

<template>
  <svg
    class="mark"
    :width="size"
    :height="size"
    viewBox="0 0 44 44"
    role="img"
    :aria-label="label"
  >
    <defs>
      <linearGradient :id="bgId" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6aa4ff" />
        <stop offset="55%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
      <linearGradient :id="shineId" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.40" />
        <stop offset="55%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
    </defs>

    <!-- base -->
    <rect x="0" y="0" width="44" height="44" rx="13" :fill="`url(#${bgId})`" />
    <!-- brillo superior -->
    <rect x="1" y="1" width="42" height="42" rx="12" :fill="`url(#${shineId})`" />
    <!-- borde interior -->
    <rect
      x="1"
      y="1"
      width="42"
      height="42"
      rx="12"
      fill="none"
      stroke="rgba(255,255,255,0.28)"
      stroke-width="1"
    />

    <!-- monograma -->
  </svg>
</template>

<style scoped>
.mark {
  display: block;
  flex-shrink: 0;
}
</style>

