import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fade-up animation triggered by scroll.
 * @param {Ref|string} target - Vue template ref or CSS selector
 * @param {Object} options
 */
export function useFadeUp(target, options = {}) {
  const {
    y = 40,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 88%',
    stagger = 0,
  } = options

  onMounted(() => {
    const el = typeof target === 'string' ? target : target.value
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        stagger: stagger || undefined,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      }
    )
  })

  onUnmounted(() => ScrollTrigger.getAll().forEach(t => t.kill()))
}

/**
 * Fade-from-left animation triggered by scroll.
 */
export function useFadeLeft(target, options = {}) {
  const { x = -36, duration = 0.7, ease = 'power3.out', start = 'top 87%', stagger = 0 } = options

  onMounted(() => {
    const el = typeof target === 'string' ? target : target.value
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, x },
      {
        opacity: 1,
        x: 0,
        duration,
        ease,
        stagger: stagger || undefined,
        scrollTrigger: { trigger: el, start, once: true },
      }
    )
  })
}

/**
 * Scale-in animation triggered by scroll.
 */
export function useScaleIn(target, options = {}) {
  const { scale = 0.88, duration = 0.9, ease = 'power3.out', start = 'top 86%' } = options

  onMounted(() => {
    const el = typeof target === 'string' ? target : target.value
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, scale },
      {
        opacity: 1,
        scale: 1,
        duration,
        ease,
        scrollTrigger: { trigger: el, start, once: true },
      }
    )
  })
}
