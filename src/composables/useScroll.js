import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export function useScrollSpy(ids) {
  const active = ref(ids[0])
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.value = entry.target.id
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onBeforeUnmount(() => observer && observer.disconnect())

  return active
}

export function useScrolled(offset = 24) {
  const { y } = useWindowScroll()
  return computed(() => y.value > offset)
}
