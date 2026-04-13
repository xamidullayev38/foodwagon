import { onMounted } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useReveal(refEl) {
  onMounted(() => {
    if (!refEl.value) return

    gsap.from(refEl.value, {
      scrollTrigger: {
        trigger: refEl.value,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
  })
}