import { onMounted, onBeforeUnmount, nextTick, unref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Composable de animaciones con GSAP + ScrollTrigger (alcance por componente).
 *
 * Uso:
 *   const root = ref(null)          // ref del elemento raíz de la sección
 *   useGsap(root)
 *
 * En el template:
 *   <div data-reveal="up">          → sube + fade
 *   <div data-reveal="left">        → entra desde la izquierda
 *   <div data-reveal="right">       → entra desde la derecha
 *   <div data-reveal="scale">       → escala desde 0.9
 *   <div data-reveal="stagger">     → contenedor: anima sus hijos en cascada
 *   <span data-count="90" data-suffix="%">0%</span>   → contador numérico
 *   <span class="bar-fill" data-progress="85">        → barra de progreso
 */

const variants = {
  up: { y: 44, x: 0 },
  left: { y: 0, x: -56 },
  right: { y: 0, x: 56 },
  scale: { y: 0, x: 0, scale: 0.9 },
  none: { y: 0, x: 0 },
}

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useGsap(root, { stagger = 0.09, start = 'top 85%' } = {}) {
  let ctx = null
  let triggers = []

  function scope() {
    return (root && unref(root)) || document
  }

  function animate() {
    if (reducedMotion()) return
    kill()

    ctx = gsap.context(() => {
      const base = scope()

      /* ---------- Entradas genéricas: [data-reveal] ---------- */
      base.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.dataset.reveal === 'stagger') return // lo maneja su contenedor

        const from = variants[el.dataset.reveal] || variants.up
        const tween = gsap.from(el, {
          ...from,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: el, start, once: true },
        })
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      /* ---------- Cascadas: hijos de [data-reveal="stagger"] ---------- */
      base.querySelectorAll('[data-reveal="stagger"]').forEach((parent) => {
        const children = parent.children
        if (!children.length) return

        const tween = gsap.from(children, {
          y: 46,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: parent, start, once: true },
        })
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      /* ---------- Barras de progreso ---------- */
      base.querySelectorAll('[data-progress]').forEach((bar) => {
        const value = Number(bar.dataset.progress) || 0
        const tween = gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${value}%`,
            duration: 1.3,
            ease: 'power2.out',
            scrollTrigger: { trigger: bar, start, once: true },
          },
        )
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      /* ---------- Contadores numéricos ---------- */
      base.querySelectorAll('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count) || 0
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        const tween = gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start, once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`
          },
        })
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })
    })

    ScrollTrigger.refresh()
  }

  function kill() {
    triggers.forEach((t) => t.kill())
    triggers = []
    if (ctx) {
      ctx.revert()
      ctx = null
    }
  }

  onMounted(() => nextTick(animate))
  onBeforeUnmount(kill)

  return { animate, kill, gsap, ScrollTrigger }
}

export default useGsap
