<template>
  <section class="cta-section">
    <!-- Decorative blurred orbs -->
    <div class="orb orb-top-right"></div>
    <div class="orb orb-bottom-left"></div>

    <div class="cta-inner">
      <!-- Heading -->
      <h3 class="cta-heading">
        Operar com <em>clareza institucional</em><br class="md-br" />
        não é mais opcional.
      </h3>

      <!-- Subtitle -->
      <p class="cta-sub">
        A tecnologia que os grandes players usam, agora disponível para a sua mesa de operações.
      </p>

      <!-- CTA Button -->
      <a href="/auth?mode=signup" class="cta-btn">
        Solicitar acesso à plataforma
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>

      <!-- Stats row -->
      <div class="cta-stats">
        <div class="stat-item">
          <p class="stat-label">Market Scope</p>
          <p class="stat-value">Cripto · Forex · Ações · Índices · Commodities</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Engine</p>
          <p class="stat-value">Visão computacional + LLMs proprietários</p>
        </div>
        <div class="stat-item stat-span">
          <p class="stat-label">Output</p>
          <p class="stat-value">Entrada, stop e alvos objetivos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'CtaBanner',
  setup() {
    const triggers = []

    onMounted(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 95%',
          once: true
        }
      })

      tl.fromTo(
        ['.cta-heading', '.cta-sub', '.cta-btn', '.cta-stats'],
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 2.8,
          ease: 'power3.out',
          stagger: 0.2
        }
      )

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger)
    })

    onUnmounted(() => {
      triggers.forEach(t => t && t.kill())
    })
  }
}
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 6rem 40px;
  overflow: hidden;
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #3b82f6 100%);
}

/* Decorative orbs */
.orb {
  pointer-events: none;
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 9999px;
  filter: blur(80px);
}

.orb-top-right {
  top: -8rem;
  right: -8rem;
  background: rgba(255, 255, 255, 0.12);
}

.orb-bottom-left {
  bottom: -10rem;
  left: -8rem;
  background: rgba(255, 255, 255, 0.06);
}

/* Inner content */
.cta-inner {
  position: relative;
  width: 100%;
  max-width: 1400px;
}

/* Heading */
.cta-heading {
  font-family: var(--font-sans);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  color: #ffffff;
  max-width: 850px;
  margin-bottom: 1.75rem;
  letter-spacing: -0.02em;
}

.cta-heading em {
  font-style: italic;
  font-weight: 900;
}

.md-br {
  display: none;
}

@media (min-width: 768px) {
  .md-br {
    display: block;
  }
}

/* Subtitle */
.cta-sub {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  max-width: 580px;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

/* CTA Button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.1rem 2.5rem;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  text-decoration: none;
  border-radius: 0;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
}

.cta-btn:hover {
  background: hsl(var(--background) / 0.85);
  transform: translateY(-1px);
}

.cta-btn svg {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

/* Stats row */
.cta-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2.5rem;
  margin-top: 3.5rem;
  max-width: 850px;
}

@media (min-width: 640px) {
  .cta-stats {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem 3rem;
  }

  .stat-span {
    grid-column: auto;
  }
}

.stat-item {
  text-align: left;
}

.stat-span {
  grid-column: span 2;
}

@media (min-width: 640px) {
  .stat-span {
    grid-column: span 1;
  }
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.35rem;
}

.stat-value {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
}

/* Responsive padding */
@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 20px;
  }

  .cta-btn {
    padding: 1rem 1.75rem;
    font-size: 10px;
  }
}

/* GSAP Initial state hiding to prevent FOUC */
.cta-heading,
.cta-sub,
.cta-btn,
.cta-stats {
  opacity: 0;
}
</style>
