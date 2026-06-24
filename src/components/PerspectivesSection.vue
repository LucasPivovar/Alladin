<template>
  <section class="persp-section">
    <div class="persp-inner">

      <!-- ── Header row ───────────────────────────────── -->
      <div class="persp-header">
        <div class="persp-header-left">
          <h3 class="persp-tag">Aladdin Perspectives</h3>
          <h4 class="persp-heading">
            Inteligência aplicada ao <em class="persp-heading-em">trading institucional.</em>
          </h4>
        </div>
        <button class="persp-explore-btn" @click="toggleLibrary">
          {{ isOpen ? 'Fechar biblioteca' : 'Explorar biblioteca' }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            :class="['persp-chevron', { 'persp-chevron--open': isOpen }]">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <!-- ── Editorial cards (3 with images) ─────────── -->
      <div class="persp-grid">

        <a href="https://finance.yahoo.com/news/ai-trading-flooding-wall-street-165840934.html"
          target="_blank" rel="noopener noreferrer" class="persp-card">
          <div class="persp-img-wrap">
            <img src="/assets/editorial-ai-wallstreet.jpg"
              alt="IA inunda Wall Street e impulsiona 1,2 trilhão de mensagens por dia"
              class="persp-img" loading="lazy" />
          </div>
          <span class="persp-card-tag persp-tag-amber">NYSE · Wall Street</span>
          <h5 class="persp-card-title">IA inunda Wall Street e impulsiona 1,2 trilhão de mensagens por dia</h5>
          <p class="persp-card-desc">Presidente da NYSE explica como algoritmos de IA agora ditam o ritmo do mercado — humanos deixaram de ser os principais executores.</p>
          <div class="persp-read-link"><span class="persp-arrow">›</span> Ler matéria (Yahoo Finance)</div>
        </a>

        <a href="http://www.broker-forex.eu/pt/IA-psicologia-do-trading.php"
          target="_blank" rel="noopener noreferrer" class="persp-card">
          <div class="persp-img-wrap">
            <img src="/assets/editorial-ai-psychology.jpg"
              alt="Como a IA está revolucionando a psicologia do trader"
              class="persp-img" loading="lazy" />
          </div>
          <span class="persp-card-tag persp-tag-primary">Psicologia</span>
          <h5 class="persp-card-title">Como a IA está revolucionando a psicologia do trader</h5>
          <p class="persp-card-desc">Estudo sobre como sistemas inteligentes reduzem viés emocional, FOMO e revenge trading — devolvendo disciplina à mesa de operações.</p>
          <div class="persp-read-link"><span class="persp-arrow">›</span> Acessar estudo (Broker-Forex)</div>
        </a>

        <a href="https://www.gov.br/investidor/pt-br/penso-logo-invisto/a-psicologia-da-inteligencia-artificial-no-mercado-financeiro-beneficios-e-desafios-em-um-mundo-automatizado"
          target="_blank" rel="noopener noreferrer" class="persp-card">
          <div class="persp-img-wrap">
            <img src="/assets/editorial-ai-risk.jpg"
              alt="IA no mercado financeiro: gerenciamento de risco automatizado"
              class="persp-img" loading="lazy" />
          </div>
          <span class="persp-card-tag persp-tag-muted">Gov.br · CVM</span>
          <h5 class="persp-card-title">IA no mercado financeiro: gerenciamento de risco automatizado</h5>
          <p class="persp-card-desc">Portal do Investidor analisa benefícios e desafios da IA na gestão de risco institucional e na proteção do capital do trader varejo.</p>
          <div class="persp-read-link"><span class="persp-arrow">›</span> Ler artigo oficial</div>
        </a>

      </div>

      <!-- ── Library expand section (toggled) ─────────── -->
      <transition name="library-fade">
        <div v-if="isOpen" class="library-section">

          <div class="library-header">
            <h4 class="library-tag">Biblioteca Aladdin</h4>
            <h5 class="library-heading">
              Estudos e artigos sobre <em class="library-heading-em">IA aplicada ao trading.</em>
            </h5>
            <p class="library-desc">
              Curadoria de leituras essenciais sobre como a inteligência artificial está transformando execução, gestão de risco e psicologia operacional.
            </p>
          </div>

          <div class="library-grid">

            <a v-for="item in libraryItems" :key="item.href"
              :href="item.href" target="_blank" rel="noopener noreferrer" class="lib-card">
              <div class="lib-card-top">
                <span class="lib-category">{{ item.category }}</span>
                <span class="lib-source">{{ item.source }}</span>
              </div>
              <h6 class="lib-title">{{ item.title }}</h6>
              <p class="lib-desc">{{ item.desc }}</p>
              <span class="lib-link"><span class="lib-arrow">›</span> Ler estudo</span>
            </a>

          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PerspectivesSection',
  setup() {
    const isOpen = ref(false)
    const triggers = []

    onMounted(() => {
      const headerTween = gsap.fromTo(
        ['.persp-tag', '.persp-heading', '.persp-explore-btn'],
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 2.6, // Ultra-slow reveal
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.persp-header',
            start: 'top 95%',
            once: true
          }
        }
      )
      if (headerTween.scrollTrigger) triggers.push(headerTween.scrollTrigger)

      const cardsTween = gsap.fromTo(
        '.persp-grid .persp-card',
        { opacity: 0, y: 65 },
        {
          opacity: 1,
          y: 0,
          duration: 3.0, // Very slow reveal
          ease: 'power3.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: '.persp-grid',
            start: 'top 95%',
            once: true
          }
        }
      )
      if (cardsTween.scrollTrigger) triggers.push(cardsTween.scrollTrigger)
    })

    onUnmounted(() => {
      triggers.forEach(t => t && t.kill())
    })

    const toggleLibrary = () => {
      isOpen.value = !isOpen.value
      if (isOpen.value) {
        // Scroll smoothly to library after next tick
        setTimeout(() => {
          const el = document.querySelector('.library-section')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    }

    const libraryItems = [
      {
        href: 'https://agentiveaiq.com/blog/how-ai-is-transforming-trading-in-2025',
        category: 'Execução · Mercado',
        source: 'agentiveAIQ',
        title: 'AI in Trading 2025: How AI Is Reshaping Financial Markets',
        desc: 'Mercado de IA em trading saltará de US$18,2B (2023) para US$50,4B até 2033. Casos como XTX Markets processando US$315B/dia.'
      },
      {
        href: 'https://ai2people.com/pt/the-psychology-of-letting-ai-trade-for-you/',
        category: 'Psicologia',
        source: 'AI2People',
        title: 'A psicologia de deixar a IA negociar por você',
        desc: 'Os desafios emocionais de ceder o controle a algoritmos — medo, ego e o vínculo entre disciplina e automação.'
      },
      {
        href: 'https://thealgotrading.com.br/como-controlar-emocoes-e-evitar-decisoes-impulsivas-operando-robos/',
        category: 'Robôs · Emocional',
        source: 'The Algo Trading',
        title: 'Psicologia do Trading Automatizado: controlando emoções com robôs',
        desc: 'Como evitar decisões impulsivas operando estratégias automatizadas e construir confiança nos sistemas algorítmicos.'
      },
      {
        href: 'https://www.ata.blog.br/2025/07/inteligencia-artificial-nos-mercados.html',
        category: 'Gestão de Risco',
        source: 'ATA Blog',
        title: 'IA nos mercados financeiros: oportunidades, riscos e decisões',
        desc: 'Análise prática sobre como a IA influencia decisões de trading, gerenciamento de exposição e mitigação de drawdown.'
      },
      {
        href: 'https://nber.org/papers/w34054',
        category: 'Acadêmico · NBER',
        source: 'NBER',
        title: 'AI-Powered Trading, Algorithmic Collusion, and Price Efficiency',
        desc: 'Paper acadêmico (National Bureau of Economic Research) sobre eficiência de preços e dinâmicas entre algoritmos de IA.'
      },
      {
        href: 'https://cepr.org/publications/dp20748',
        category: 'Capital Markets',
        source: 'CEPR',
        title: 'The Future of AI in Capital Markets (CEPR Discussion Paper)',
        desc: 'Como a IA generativa está impactando trading institucional, complementando duas décadas de machine learning aplicado.'
      },
      {
        href: 'https://www.gov.br/investidor/pt-br/penso-logo-invisto/inteligencia-artificial-e-mercado-financeiro-tecnologia-vieses-humanos-e-a-ilusao-do-controle',
        category: 'Viés · Controle',
        source: 'Gov.br / CVM',
        title: 'IA e Mercado Financeiro: vieses humanos e a ilusão do controle',
        desc: 'Portal do Investidor (CVM) sobre como a IA expõe vieses cognitivos do trader e remodela a relação com o risco.'
      },
      {
        href: 'https://www.bloomberg.com/news/articles/2025-11-14/chicago-trading-floor-gets-second-act-powering-ai-led-future',
        category: 'Bloomberg',
        source: 'Bloomberg',
        title: 'Chicago Trading Floor Gets Second Act Powering AI-Led Future',
        desc: 'O pregão de Chicago renasce como infraestrutura para a próxima geração de trading liderado por IA.'
      },
      {
        href: 'https://arxiv.org/pdf/2512.02227',
        category: 'Agentic Trading',
        source: 'arXiv',
        title: 'Orchestration Framework for Financial Agents (arXiv)',
        desc: 'Do algorithmic trading ao agentic trading: framework para coordenar múltiplos agentes de IA em mercados financeiros.'
      }
    ]

    return { isOpen, toggleLibrary, libraryItems }
  }
}
</script>

<style scoped>
/* ── Section ──────────────────────────────────── */
.persp-section {
  position: relative;
  padding: 5rem 40px;
  border-top: 1px solid rgba(59, 130, 246, 0.12);
}
@media (min-width: 640px)  { .persp-section { padding: 7rem 40px; } }
@media (min-width: 1024px) { .persp-section { padding: 7rem 40px; } }

.persp-inner { width: 100%; }

/* ── Header ──────────────────────────────────── */
.persp-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(59, 130, 246, 0.12);
}
@media (min-width: 768px) {
  .persp-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
}

.persp-header-left { max-width: 36rem; }

.persp-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: hsl(var(--primary));
  margin-bottom: 1rem;
}

.persp-heading {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 4vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: hsl(var(--foreground));
}
.persp-heading-em { font-style: italic; color: hsl(var(--primary)); }

/* Toggle button */
.persp-explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: hsl(var(--primary));
  background: transparent;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0;
  transition: opacity 0.2s;
}
.persp-explore-btn:hover { opacity: 0.7; }

.persp-chevron {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.persp-chevron--open { transform: rotate(180deg); }

/* ── Editorial image grid ─────────────────────── */
.persp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 768px) {
  .persp-grid { grid-template-columns: repeat(3, 1fr); gap: 3rem; }
}

.persp-card { display: flex; flex-direction: column; text-decoration: none; cursor: pointer; }

.persp-img-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: rgba(30, 41, 59, 0.6);
  margin-bottom: 1.75rem;
}
.persp-img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: grayscale(100%); transform: scale(1);
  transition: filter 0.7s ease, transform 0.7s ease;
}
.persp-card:hover .persp-img { filter: grayscale(0%); transform: scale(1.05); }

.persp-card-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 0.28em;
  text-transform: uppercase; margin-bottom: 0.75rem; display: block;
}
.persp-tag-amber   { color: #fbbf24; }
.persp-tag-primary { color: hsl(var(--primary)); }
.persp-tag-muted   { color: hsl(var(--muted-foreground)); }

.persp-card-title {
  font-family: var(--font-sans); font-size: 1.25rem; font-weight: 500;
  color: hsl(var(--foreground)); margin-bottom: 1rem; line-height: 1.3;
  transition: color 0.2s;
}
@media (min-width: 640px) { .persp-card-title { font-size: 1.5rem; } }
.persp-card:hover .persp-card-title { color: hsl(var(--primary)); }

.persp-card-desc {
  font-size: 0.875rem; color: hsl(var(--muted-foreground));
  font-weight: 300; line-height: 1.65; margin-bottom: 1.5rem; flex: 1;
}

.persp-read-link {
  margin-top: auto; display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.24em;
  color: hsl(var(--foreground)); transition: color 0.2s;
}
@media (min-width: 640px) { .persp-read-link { font-size: 0.75rem; } }
.persp-card:hover .persp-read-link { color: hsl(var(--primary)); }
.persp-arrow { color: hsl(var(--primary)); font-size: 1rem; line-height: 1; }

/* ── Library expand section ──────────────────── */
.library-section {
  margin-top: 5rem;
  border-top: 1px solid rgba(59, 130, 246, 0.12);
  padding-top: 3rem;
}
@media (min-width: 640px) { .library-section { margin-top: 6rem; padding-top: 3.5rem; } }

.library-header { margin-bottom: 2.5rem; max-width: 42rem; }

.library-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 0.4em;
  text-transform: uppercase; color: hsl(var(--primary)); margin-bottom: 0.75rem;
}

.library-heading {
  font-family: var(--font-sans); font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700; letter-spacing: -0.02em; line-height: 1.15;
  color: hsl(var(--foreground)); margin-bottom: 1rem;
}
.library-heading-em { font-style: italic; color: hsl(var(--primary)); }

.library-desc {
  font-size: 0.875rem; color: hsl(var(--muted-foreground));
  font-weight: 300; line-height: 1.65;
}

/* Library card grid — separated by 1px borders */
.library-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
}
@media (min-width: 640px)  { .library-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .library-grid { grid-template-columns: repeat(3, 1fr); } }

.lib-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.75rem;
  background-color: hsl(var(--background));
  text-decoration: none;
  transition: background-color 0.2s;
}
@media (min-width: 640px) { .lib-card { padding: 1.75rem; } }
.lib-card:hover { background-color: rgba(30, 41, 59, 0.4); }

.lib-card-top {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1rem;
}

.lib-category {
  font-size: 9px; font-weight: 700; letter-spacing: 0.28em;
  text-transform: uppercase; color: hsl(var(--primary));
}

.lib-source {
  font-size: 9px; letter-spacing: 0.2em;
  text-transform: uppercase; color: hsl(var(--muted-foreground));
}

.lib-title {
  font-family: var(--font-sans); font-size: 0.9375rem; font-weight: 600;
  letter-spacing: -0.01em; line-height: 1.35; color: hsl(var(--foreground));
  margin-bottom: 0.75rem; transition: color 0.2s;
}
@media (min-width: 640px) { .lib-title { font-size: 1.0625rem; } }
.lib-card:hover .lib-title { color: hsl(var(--primary)); }

.lib-desc {
  font-size: 0.8125rem; color: hsl(var(--muted-foreground));
  font-weight: 300; line-height: 1.65; flex: 1; margin-bottom: 1.25rem;
}

.lib-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.24em;
  color: hsl(var(--foreground)); transition: color 0.2s; margin-top: auto;
}
.lib-card:hover .lib-link { color: hsl(var(--primary)); }
.lib-arrow { color: hsl(var(--primary)); font-size: 1rem; line-height: 1; }

/* ── Transition ───────────────────────────────── */
.library-fade-enter-active {
  animation: librarySlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.library-fade-leave-active {
  animation: librarySlideOut 0.25s ease forwards;
}

@keyframes librarySlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes librarySlideOut {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(12px); }
}
/* GSAP Initial state hiding to prevent FOUC */
.persp-tag,
.persp-heading,
.persp-explore-btn,
.persp-card {
  opacity: 0;
}
</style>
