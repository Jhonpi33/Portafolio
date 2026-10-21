<script setup>

import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
  stroke: { type: [Number, String], default: 1.75 },
})


const strokeIcons = {
  'arrow-right': '<path d="M4 12h15"/><path d="m12.5 5.5 7 6.5-7 6.5"/>',
  'arrow-down': '<path d="M12 4.5V20"/><path d="m5.5 13 6.5 7 6.5-7"/>',
  'arrow-up': '<path d="M12 19.5V5"/><path d="m5.5 11.5 6.5-7 6.5 7"/>',
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  download:
    '<path d="M21 15.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5"/><path d="m7.5 10.5 4.5 5 4.5-5"/><path d="M12 15V3"/>',
  file:
    '<path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z"/><path d="M14 2.5V8h5.5"/><path d="M15 13.5H9"/><path d="M15 17.5H9"/><path d="M11 9.5H9"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 7 7.7 5.4a2 2 0 0 0 2.2 0L21 7"/>',
  send: '<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2"/><path d="M12 19.5v2"/><path d="m5.3 5.3 1.4 1.4"/><path d="m17.3 17.3 1.4 1.4"/><path d="M2.5 12h2"/><path d="M19.5 12h2"/><path d="m6.7 17.3-1.4 1.4"/><path d="m18.7 5.3-1.4 1.4"/>',
  moon: '<path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z"/>',
  code: '<path d="m16.5 17.5 5-5.5-5-5.5"/><path d="M7.5 6.5l-5 5.5 5 5.5"/><path d="m13.5 4-3 16"/>',
  'external-link':
    '<path d="M14.5 3.5H20.5V9.5"/><path d="M20.5 3.5 12 12"/><path d="M18 14v5.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.5"/>',
  layout: '<rect x="3" y="3.5" width="18" height="17" rx="2.5"/><path d="M3 9.5h18"/><path d="M9.5 20.5v-11"/>',
  server:
    '<rect x="2.5" y="3" width="19" height="7.5" rx="2"/><rect x="2.5" y="13.5" width="19" height="7.5" rx="2"/><path d="M6.5 6.75h.01"/><path d="M6.5 17.25h.01"/><path d="M10.5 6.75h5"/><path d="M10.5 17.25h5"/>',
  database:
    '<ellipse cx="12" cy="5.5" rx="8.5" ry="3.2"/><path d="M3.5 5.5v13c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2v-13"/><path d="M3.5 12c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2"/>',
  wrench:
    '<path d="M14.9 6.4a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l3.2-3.2a6 6 0 0 1-7.9 7.9l-6.4 6.4a2.1 2.1 0 0 1-3-3l6.4-6.4a6 6 0 0 1 7.9-7.9Z"/>',
  cap: '<path d="M21.5 10 12 5.2 2.5 10 12 14.8 21.5 10Z"/><path d="M6.5 12.2V17c0 1.6 2.5 2.9 5.5 2.9s5.5-1.3 5.5-2.9v-4.8"/><path d="M21.5 10v5.5"/>',
  pin: '<path d="M19.5 10.3c0 5.6-7.5 11.2-7.5 11.2S4.5 15.9 4.5 10.3a7.5 7.5 0 0 1 15 0Z"/><circle cx="12" cy="10.2" r="2.7"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.2"/><circle cx="12" cy="12" r="1.4"/>',
  zap: '<path d="M13.2 2.5 4.5 13.4h6.6l-.9 8.1 9.3-11.2h-6.8Z"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  'alert-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5"/><path d="M12 16.4h.01"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8.2 12.2 2.6 2.6 5-5.4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  rocket:
    '<path d="M12 2.5c3.6 2 5.6 5.6 5.6 9.6l-2.6 4.4H9L6.4 12.1C6.4 8.1 8.4 4.5 12 2.5Z"/><path d="M9 16.5 6.5 19"/><path d="M15 16.5 17.5 19"/><circle cx="12" cy="10" r="2"/>',
}

const fillIcons = {
  github:
    'M12 .5C5.73.5.9 5.34.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53l-.02-1.86c-3.08.67-3.73-1.49-3.73-1.49-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.07 5.48.4.34.75 1.02.75 2.06l-.01 3.05c0 .3.2.64.77.53A11.12 11.12 0 0 0 23 11.6C23 5.34 18.27.5 12 .5Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z',
  whatsapp:
    'M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.2h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm5.76 14.06c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.8-.12-.42-.12-.96-.3-1.66-.6-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.18-1.56-1.18-2.98s.74-2.12 1-2.4c.26-.3.58-.36.76-.36h.56c.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.06.14.1.3.02.48-.34.7-.72.68-.52 1.02.74 1.28 1.48 1.72 2.6 2.3.18.1.3.08.42-.04.12-.14.5-.58.64-.78.14-.2.28-.16.46-.1.2.06 1.24.6 1.46.7.2.1.34.16.4.26.06.1.06.56-.18 1.24Z',
}

const isFill = computed(() => Boolean(fillIcons[props.name]))
const markup = computed(() => fillIcons[props.name] || strokeIcons[props.name] || '')
</script>

<template>
  <svg
    v-if="markup"
    class="ic"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="isFill ? 'currentColor' : 'none'"
    :stroke="isFill ? 'none' : 'currentColor'"
    :stroke-width="isFill ? undefined : stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="markup"
  />
</template>

<style scoped>
.ic {
  display: block;
  flex-shrink: 0;
}
</style>
