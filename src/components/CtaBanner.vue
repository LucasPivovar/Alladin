<template>
  <section class="cta-section">
    <!-- Central Glow Background -->
    <div class="glow-bg"></div>

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
  background: linear-gradient(180deg, #071126 0%, #0B1730 60%, #02050c 100%);
}
@media (min-width: 768px) {
  .cta-section { padding: 8rem 40px; }
}

/* Central Glow */
.glow-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(37, 99, 235, 0.25), transparent 70%);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
}

/* Inner content */
.cta-inner {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Heading */
.cta-heading {
  font-family: var(--font-sans);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.9);
  max-width: 850px;
  margin: 0 auto 1.75rem auto;
  letter-spacing: -0.02em;
}

.cta-heading em {
  font-style: normal;
  font-weight: 400;
  color: hsl(var(--primary));
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
  margin: 0 auto 2.5rem auto;
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
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.cta-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -150%; width: 100%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
  transform: skewX(-20deg);
  transition: all 0.6s ease;
}

.cta-btn:hover::after {
  left: 150%;
}

.cta-btn:hover {
  background: hsl(var(--background) / 0.85);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
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
  margin: 3.5rem auto 0 auto;
  max-width: 850px;
  width: 100%;
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
  text-align: center;
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
