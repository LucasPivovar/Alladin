<template>
  <footer class="site-footer" ref="footerRef">
    <div class="footer-inner">
      <!-- Brand -->
      <div class="footer-brand">
        <img src="/assets/magic-lamp.svg" alt="Alladin IA" class="footer-logo" />
        <div class="footer-brand-text">
          <span class="footer-brand-name">Alladin IA</span>
          <span class="footer-brand-sub">Inteligência de Mercado</span>
        </div>
      </div>

      <!-- Copyright -->
      <p class="footer-copy">
        © 2025 <strong>Alladin IA</strong> — Todos os direitos reservados.
      </p>


    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SiteFooter',
  setup() {
    const footerRef = ref(null)

    onMounted(() => {
      gsap.fromTo(
        '.footer-inner > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4, // Slowed down for a premium feel
          ease: 'power3.out',
          stagger: 0.18, // Slower stagger
          scrollTrigger: {
            trigger: footerRef.value,
            start: 'top bottom', // Triggers reliably as soon as the footer enters the viewport
            once: true
          }
        }
      )
    })

    return { footerRef }
  }
}
</script>

<style scoped>
.site-footer {
  background: #02050c;
  border-top: none;
  padding: 48px 80px;
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.008) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.008) 1px, transparent 1px);
  background-size: 65px 65px;
  pointer-events: none;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  gap: 24px;
}

/* Brand */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: start;
}

.footer-logo {
  height: 28px;
  width: auto;
  filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.4));
}

.footer-brand-text {
  display: flex;
  flex-direction: column;
}

.footer-brand-name {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-transform: uppercase;
}

.footer-brand-sub {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
}

/* Copyright */
.footer-copy {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.04em;
  text-align: center;
  justify-self: center;
}

.footer-copy strong {
  color: #60a5fa;
  font-weight: 700;
}



/* Mobile */
@media (max-width: 768px) {
  .site-footer {
    padding: 40px 20px;
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* GSAP Initial state hiding to prevent FOUC */
.footer-inner > * {
  opacity: 0;
}
</style>
