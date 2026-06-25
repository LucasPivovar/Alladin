<template>
  <div>
    <!-- SECTION 1: COMO A IA FUNCIONA -->
    <section class="feature-panel-section bg-lighter how-section">
      <div class="w-full">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="order-2 lg:order-1 how-content-col">
          <div class="flex items-center gap-3 mb-5 how-eyebrow">
            <span class="h-px w-10 bg-primary line-indicator"></span>
            <span class="text-[10px] font-bold tracking-[0.32em] uppercase text-primary">Como a IA funciona</span>
          </div>
          <h4 class="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground/90 font-light leading-[1.1] mb-6">
            Uma engenharia invisível.<br class="hidden sm:block" />
            <em class="font-medium not-italic text-primary">Resultados palpáveis.</em>
          </h4>
          <p class="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mt-3 mb-10 how-desc">
            Envie o print do gráfico — a ALADDIN cruza <strong class="text-foreground/90 font-medium">SMC, Wyckoff, Price Action, RSI e Elliott</strong> em uma única leitura, identifica liquidez varrida, order blocks e momentum, e devolve um veredicto objetivo com entrada, stop e alvo.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 steps-grid">
            <div class="step-card flex flex-col p-5 rounded-xl transition-all glass-card">
              <span class="font-mono text-[12px] text-primary font-bold tracking-widest mb-2">01</span>
              <div class="text-foreground font-medium text-[13px] mb-1">Envia o print</div>
              <div class="text-muted-foreground text-[12px] font-light">Cole ou faça upload do gráfico (Ctrl+V)</div>
            </div>
            <div class="step-card flex flex-col p-5 rounded-xl transition-all glass-card">
              <span class="font-mono text-[12px] text-primary font-bold tracking-widest mb-2">02</span>
              <div class="text-foreground font-medium text-[13px] mb-1">IA analisa</div>
              <div class="text-muted-foreground text-[12px] font-light">5 estratégias confluentes em paralelo</div>
            </div>
            <div class="step-card flex flex-col p-5 rounded-xl transition-all glass-card">
              <span class="font-mono text-[12px] text-primary font-bold tracking-widest mb-2">03</span>
              <div class="text-foreground font-medium text-[13px] mb-1">Recebe o sinal</div>
              <div class="text-muted-foreground text-[12px] font-light">Direção · confiança · entrada · stop · alvo</div>
            </div>
          </div>
        </div>
        
        <!-- Video Showcase Container -->
        <div class="order-1 lg:order-2 how-video">
          <div class="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-black shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)] video-container-box">
            <div class="absolute inset-0 pointer-events-none ring-1 ring-primary/20 rounded-2xl z-10"></div>
            <!-- Video Player (using muted and autoplay so browser allows loop) -->
            <video src="https://alladintradingia.com/videos/aladdin-panel-op.mp4" autoplay loop muted playsinline preload="metadata" class="w-full h-auto block aspect-video object-cover"></video>
            <div class="absolute top-4 left-4 flex items-center gap-2 z-20">
              <span class="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse blue-dot"></span>
              <span class="text-[10px] uppercase tracking-[0.3em] text-foreground/80 font-medium">Aladdin · painel ao vivo</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- SECTION 2: GLOBAL MARKETS -->
    <section class="feature-panel-section bg-darker markets-section">
      <div class="w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left items-start markets-header">
        <div class="max-w-xl text-left markets-title">
          <h3 class="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-4 text-left">Global Markets</h3>
          <h4 class="font-sans text-3xl sm:text-5xl text-foreground/90 font-light leading-[1.1] text-left" style="text-align:left;">Um motor. <em class="font-medium not-italic text-primary">Todos os mercados.</em></h4>
        </div>
        <p class="text-sm sm:text-base text-muted-foreground font-light max-w-sm leading-relaxed text-left markets-subtitle" style="text-align:left;">
          Selecione uma classe de ativo abaixo para entender, em profundidade, como a ALADDIN atua em cada mercado.
        </p>
      </div>

      <!-- Tab Switcher -->
      <div>
        <div dir="ltr" data-orientation="horizontal" class="w-full">
          <!-- Tabs List -->
          <div role="tablist" aria-orientation="horizontal" class="items-center text-muted-foreground w-full h-auto flex flex-wrap justify-start gap-1 bg-transparent border-b border-border/60 rounded-none p-0 mb-10 tab-list-container">
            <button v-for="tab in tabsList" :key="tab.id" type="button" role="tab" 
                    :aria-selected="activeTab === tab.id" 
                    :data-state="activeTab === tab.id ? 'active' : 'inactive'" 
                    class="tab-btn inline-flex items-center justify-center whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 gap-3 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase transition-colors"
                    @click="onTabChange(tab.id)">
              <!-- Inline Icon SVG dynamically rendered -->
              <span class="w-3.5 h-3.5 tab-icon flex items-center justify-center">
                <svg v-if="tab.icon === 'BitcoinIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path>
                </svg>
                <svg v-else-if="tab.icon === 'DollarIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <svg v-else-if="tab.icon === 'ChartColumnIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
                <svg v-else-if="tab.icon === 'GemIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                  <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                  <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                  <path d="M2 9h20"></path>
                </svg>
                <svg v-else-if="tab.icon === 'ChartLineIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </span>
              {{ tab.name }}
            </button>
          </div>

          <!-- Tab Panels Container -->
          <div v-for="panel in panelsData" :key="panel.id" 
               v-show="activeTab === panel.id" 
               :data-state="activeTab === panel.id ? 'active' : 'inactive'" 
               role="tabpanel" 
               class="ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 focus-visible:outline-none tab-panel-wrapper">
            
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-[60px]">
              <!-- Left side content description -->
              <div class="lg:col-span-6 panel-content-col">
                <div class="flex items-center gap-3 mb-5 panel-header-el">
                  <div class="icon-bg-wrapper" style="width:2.75rem;height:2.75rem;border-radius:0.25rem;border:1px solid rgba(59,130,246,0.2);background:rgba(59,130,246,0.05);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg v-if="panel.icon === 'BitcoinIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
                      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path>
                    </svg>
                    <svg v-else-if="panel.icon === 'DollarIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <svg v-else-if="panel.icon === 'ChartColumnIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                    <svg v-else-if="panel.icon === 'GemIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
                      <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                      <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                      <path d="M2 9h20"></path>
                    </svg>
                    <svg v-else-if="panel.icon === 'ChartLineIcon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-1.5">{{ panel.subtitle }}</p>
                    <p class="font-display text-lg font-medium text-foreground">{{ panel.name }}</p>
                  </div>
                </div>
                <h5 class="font-sans text-2xl sm:text-[26px] text-foreground/90 font-light leading-[1.3] mb-6 panel-headline-el">
                  {{ panel.title }}
                </h5>
                <p class="text-base text-muted-foreground font-light leading-relaxed mb-8 panel-desc-el">
                  {{ panel.description }}
                </p>
                <ul class="space-y-3 mb-8 checklist">
                  <li v-for="(item, idx) in panel.checklist" :key="idx" class="flex items-start gap-3 text-sm text-foreground/90 font-light">
                    <span class="mt-1 w-4 h-4 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Right side Asset Summary Card -->
              <div class="lg:col-span-6">
                <div class="p-7 sm:p-8 backdrop-blur rounded-2xl summary-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05);">
                  <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-5">Ativos cobertos</p>
                  <div class="grid grid-cols-2 gap-3 mb-8">
                    <div v-for="(asset, idx) in panel.assets" :key="idx" class="font-mono text-xs text-foreground/80 bg-white/5 rounded-lg px-4 py-3 flex items-center justify-center tracking-wide">
                      {{ asset }}
                    </div>
                  </div>
                  <div class="border-t border-white/5 pt-6">
                    <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-2">Sessões operacionais</p>
                    <p class="text-sm text-foreground/90 font-light">{{ panel.sessions }}</p>
                  </div>
                  <div class="border-t border-white/5 pt-6 mt-6">
                    <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-3">Estratégias aplicadas</p>
                    <div class="text-[11px] font-medium tracking-[0.1em] uppercase flex flex-wrap gap-2 items-center">
                      <template v-for="(strat, idx) in panel.strategies" :key="idx">
                        <span class="text-foreground/80">{{ strat }}</span>
                        <span v-if="idx < panel.strategies.length - 1" class="text-primary/40">•</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'FeaturePanel',
  setup() {
    const sectionRef = ref(null)
    const activeTab = ref('crypto')
    
    const handleMouseMove = (e) => {
      for (const card of document.querySelectorAll('.step-card, .summary-card')) {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    const tabsList = ref([
      { id: 'crypto', name: 'Criptomoedas', icon: 'BitcoinIcon' },
      { id: 'forex', name: 'Forex', icon: 'DollarIcon' },
      { id: 'indices', name: 'Índices', icon: 'ChartColumnIcon' },
      { id: 'commodities', name: 'Commodities', icon: 'GemIcon' },
      { id: 'stocks', name: 'Ações & ETFs', icon: 'ChartLineIcon' }
    ])

    const panelsData = ref([
      {
        id: 'crypto',
        name: 'Criptomoedas',
        subtitle: 'BTC · ETH · SOL',
        icon: 'BitcoinIcon',
        title: 'Volatilidade alta, liquidez 24/7. A IA filtra ruído e identifica zonas institucionais reais.',
        description: 'O mercado cripto é o mais volátil e o mais manipulado por grandes players (whales). A ALADDIN aplica leitura de Smart Money Concepts (SMC) para detectar order blocks, fair value gaps, varreduras de liquidez e divergências de RSI em qualquer timeframe — desde scalp em 1m até swing em 1D.',
        checklist: [
          'Detecção de manipulação institucional (sweeps de liquidez)',
          'Mapeamento de order blocks e zonas de oferta/demanda',
          'Confluência SMC + Wyckoff para topos e fundos',
          'Operação 24/7 com sinais em todas as sessões'
        ],
        assets: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT', 'XRP/USDT', 'ADA/USDT'],
        sessions: '24/7 — sem fechamento',
        strategies: ['SMC', 'WYCKOFF', 'PRICE ACTION', 'RSI', 'ELLIOTT']
      },
      {
        id: 'forex',
        name: 'Forex',
        subtitle: 'EUR · USD · JPY · GBP',
        icon: 'DollarIcon',
        title: 'O maior mercado do mundo. A IA lê o fluxo institucional onde bancos centrais operam.',
        description: 'Forex movimenta mais de US$ 7 trilhões por dia e é dominado por grandes bancos e fundos. A ALADDIN identifica killzones de Londres e Nova York, padrões de Wyckoff em acumulação e distribuição, e cruza com Price Action puro para entregar setups de alta probabilidade nas majors e minors.',
        checklist: [
          'Killzones de Londres e Nova York mapeadas automaticamente',
          'Leitura de força e fraqueza relativa entre moedas',
          'Identificação de notícias de impacto e contexto macro',
          'Setups validados por Wyckoff + Price Action Institucional'
        ],
        assets: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD', 'EUR/JPY'],
        sessions: 'Sydney · Tokyo · London · New York',
        strategies: ['SMC', 'WYCKOFF', 'PRICE ACTION', 'RSI', 'ELLIOTT']
      },
      {
        id: 'indices',
        name: 'Índices',
        subtitle: 'SPX · NDX · DJI',
        icon: 'ChartColumnIcon',
        title: 'O termômetro da economia global. A IA cruza contexto macro com leitura técnica de elite.',
        description: 'Índices refletem o sentimento institucional sobre as maiores economias do planeta. A ALADDIN analisa estrutura de mercado dos principais futuros e mini-índices, correlaciona com volatilidade (VIX), juros e fluxo de fundos para entregar leitura objetiva de tendência primária e secundária.',
        checklist: [
          'Leitura de tendência primária via Elliott + Wyckoff',
          'Correlação com VIX e treasury yields',
          'Detecção de exaustão em topos e fundos institucionais',
          'Setups intraday em mini-índices e futuros'
        ],
        assets: ['S&P 500', 'Nasdaq 100', 'Dow Jones', 'Ibovespa', 'DAX 40', 'Nikkei 225'],
        sessions: 'Pregão regular + after-market',
        strategies: ['SMC', 'WYCKOFF', 'PRICE ACTION', 'RSI', 'ELLIOTT']
      },
      {
        id: 'commodities',
        name: 'Commodities',
        subtitle: 'XAU · WTI · NG',
        icon: 'GemIcon',
        title: 'Ativos defensivos e cíclicos. A IA reconhece padrões sazonais e fluxo de safe haven.',
        description: 'Ouro, petróleo, prata e commodities agrícolas respondem a fundamentos macroeconômicos e geopolíticos. A ALADDIN combina análise técnica institucional com reconhecimento de padrões sazonais para identificar entradas em mercados de tendência forte ou de range bem definido.',
        checklist: [
          'Leitura de safe haven flow (ouro e prata)',
          'Padrões sazonais em energia e agrícolas',
          'Correlação com USD e geopolítica',
          'Detecção de rompimentos verdadeiros vs falsos'
        ],
        assets: ['XAU/USD (Ouro)', 'XAG/USD (Prata)', 'WTI Crude', 'Brent', 'Natural Gas', 'Copper'],
        sessions: 'Quase 24h (com janela de manutenção)',
        strategies: ['SMC', 'WYCKOFF', 'PRICE ACTION', 'RSI', 'ELLIOTT']
      },
      {
        id: 'stocks',
        name: 'Ações & ETFs',
        subtitle: 'AAPL · MSFT · NVDA · TSLA',
        icon: 'ChartLineIcon',
        title: 'Estrutura corporativa, liquidez sob demanda. A IA monitora Blue Chips globais.',
        description: 'Encontre as melhores oportunidades nas principais ações americanas e globais. A ALADDIN analisa ativos como AAPL, MSFT, TSLA, NVDA e ETFs de grande volume, indicando impulsos e correções de Elliott na abertura americana.',
        checklist: [
          'Varredura diária das maiores Blue Chips de tecnologia',
          'Alinhamento de volume institucional (acumulação Wyckoff)',
          'Detecção de impulsos de Elliott e correções em timeframes maiores',
          'Confluência com dados de fechamento e gaps diários'
        ],
        assets: ['AAPL (Apple)', 'MSFT (Microsoft)', 'NVDA (NVIDIA)', 'TSLA (Tesla)', 'AMZN', 'SPY (S&P500)'],
        sessions: 'Pregão regular americano (09:30 - 16:00 EST)',
        strategies: ['SMC', 'WYCKOFF', 'PRICE ACTION', 'RSI', 'ELLIOTT']
      }
    ])

    // ── GSAP ScrollTrigger animations ─────────────────
    const triggers = []

    function st(el, vars, triggerEl) {
      const tween = gsap.fromTo(el, { opacity: 0, ...vars.from }, {
        opacity: 1, ...vars.to,
        scrollTrigger: { trigger: triggerEl || el, start: 'top 95%', once: true }
      })
      triggers.push(tween.scrollTrigger)
      return tween
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)

      // Section 1 — Como Funciona (Left content column and right video column rise smoothly together)
      gsap.fromTo(['.how-content-col', '.how-video'],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2.8, // Ultra-slow cinematic reveal
          ease: 'power3.out',
          stagger: 0.3, // Long calm lag between column entries
          scrollTrigger: { trigger: '.how-section', start: 'top 94%', once: true }
        }
      )

      // Section 2 — Global Markets header
      st('.markets-header', { from: { y: 40 }, to: { y: 0, duration: 2.6, ease: 'power3.out' } })

       // Steps cards sequential drop animation
      const cardsTween = gsap.fromTo(
        '.steps-grid .step-card',
        { opacity: 0, y: -40, scale: 0.85, boxShadow: '0 0 0 rgba(0,0,0,0)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
          duration: 1.2,
          ease: 'back.out(1.2)',
          stagger: 0.25,
          scrollTrigger: {
            trigger: '.how-section',
            start: 'top 85%',
            once: true
          }
        }
      )
      if (cardsTween.scrollTrigger) triggers.push(cardsTween.scrollTrigger)

      // Tabs bar
      gsap.fromTo('.tab-list-container',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.tab-list-container', start: 'top 96%', once: true }
        }
      )

      // Active panel on first scroll enter
      ScrollTrigger.create({
        trigger: '.tab-panel-wrapper',
        start: 'top 92%',
        once: true,
        onEnter: () => animateActivePanel()
      })
    })

    function animateActivePanel() {
      const panel = document.querySelector('.tab-panel-wrapper[data-state="active"]')
      if (!panel) return
      
      gsap.fromTo([panel.querySelector('.panel-content-col'), panel.querySelector('.summary-card')],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 3.0, // Very slow, luxurious reveal
          ease: 'power3.out',
          stagger: 0.35 // Deliberate delay between left and right column
        }
      )
    }

    function onTabChange(id) {
      activeTab.value = id
      setTimeout(() => animateActivePanel(), 40)
    }

    onUnmounted(() => {
      window.removeEventListener('mousemove', handleMouseMove)
      triggers.forEach(t => t && t.kill())
      ScrollTrigger.getAll().forEach(t => t.kill())
    })

    return {
      sectionRef,
      activeTab,
      tabsList,
      panelsData,
      onTabChange
    }
  }
}
</script>


<style scoped>
.feature-panel-section {
  position: relative;
  z-index: 10;
  border-top: none;
  padding: 6rem 40px !important;
}

.bg-lighter {
  background: linear-gradient(180deg, #030712 0%, #0A1329 15%, #0A1329 85%, #030712 100%) !important;
}

.bg-darker {
  background: linear-gradient(180deg, #030712 0%, #030712 85%, #0A1329 100%) !important;
}

@media (min-width: 768px) {
  .feature-panel-section {
    padding: 8rem 40px !important;
  }
}

.line-indicator {
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

.thinner-heading {
  font-family: var(--font-sans) !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em;
}

.video-container-box {
  border: 1px solid rgba(59, 130, 246, 0.15) !important;
  box-shadow: 0 20px 60px rgba(3, 7, 18, 0.8), 0 0 50px rgba(59, 130, 246, 0.15) !important;
}

.blue-dot {
  box-shadow: 0 0 8px hsl(var(--primary));
}

.steps-list li span {
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
}

.tab-list-container {
  border-color: rgba(59, 130, 246, 0.15) !important;
}

.tab-icon {
  color: inherit;
}

.icon-bg-wrapper {
  background-color: rgba(59, 130, 246, 0.05) !important;
  border-color: rgba(59, 130, 246, 0.2) !important;
}

/* Markets Grid Area */
.summary-card {
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(255,255,255,0.015) !important;
  border: 1px solid rgba(255,255,255,0.03) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.summary-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(37, 99, 235, 0.12), transparent 40%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  z-index: -1;
}

.summary-card:hover::before {
  opacity: 1;
}

.summary-card:hover {
  border-color: rgba(37, 99, 235, 0.3) !important;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.05);
}

.asset-item {
  background-color: #071126 !important;
  border: 1px solid rgba(37, 99, 235, 0.15) !important;
  border-radius: 8px;
  transition: border-color 0.2s ease, transform 0.2s ease;
  cursor: default;
}

.asset-item:hover {
  border-color: #2563EB !important;
  transform: translateY(-1px);
}

.badge {
  border-radius: 4px;
}

.check-wrapper {
  border-radius: 4px;
  background-color: rgba(59, 130, 246, 0.08) !important;
  border-color: rgba(59, 130, 246, 0.2) !important;
}

.check-icon {
  width: 0.75rem;
  height: 0.75rem;
  color: #38bdf8;
}

/* Animations for tab panels transitions */
.tab-panel-wrapper {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Como Funciona Steps Grid */
.glass-card {
  background: rgba(255,255,255,0.015);
  border: 1px solid rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(37, 99, 235, 0.15), transparent 40%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  z-index: -1;
}

.glass-card:hover::before {
  opacity: 1;
}

.glass-card:hover {
  background: rgba(255,255,255,0.025);
  border-color: rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.05);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .summary-card {
    padding: 1.5rem !important;
  }
}

/* GSAP Initial state hiding to prevent FOUC */
.how-content-col,
.how-video,
.markets-header,
.tab-list-container,
.tab-panel-wrapper .panel-content-col,
.tab-panel-wrapper .summary-card {
  opacity: 0;
}
</style>
