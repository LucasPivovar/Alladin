<template>
  <section class="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border-t border-border/40 bg-card/20 feature-panel-section" ref="sectionRef">
    <div class="w-full">
      <!-- SECTION 1: COMO A IA FUNCIONA -->
      <div class="mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="order-2 lg:order-1 how-content-col">
          <div class="flex items-center gap-3 mb-5 how-eyebrow">
            <span class="h-px w-10 bg-primary line-indicator"></span>
            <span class="text-[10px] font-bold tracking-[0.32em] uppercase text-primary">Como a IA funciona</span>
          </div>
          <h4 class="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-8 thinner-heading how-headline">
            Uma <em class="italic text-primary">leitura institucional</em><br />em segundos.
          </h4>
          <p class="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mt-3 mb-10 how-desc">
            Envie o print do gráfico — a ALADDIN cruza <strong class="text-foreground/90 font-medium">SMC, Wyckoff, Price Action, RSI e Elliott</strong> em uma única leitura, identifica liquidez varrida, order blocks e momentum, e devolve um veredicto objetivo com entrada, stop e alvo.
          </p>
          <ul class="space-y-7 text-xs steps-list">
            <li class="flex items-start gap-3">
              <span class="font-mono text-[10px] text-primary font-bold tracking-widest mt-1">01</span>
              <div>
                <div class="text-foreground font-medium text-[13px]">Envia o print</div>
                <div class="text-muted-foreground text-[12px] font-light">Cole ou faça upload do gráfico (Ctrl+V)</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-mono text-[10px] text-primary font-bold tracking-widest mt-1">02</span>
              <div>
                <div class="text-foreground font-medium text-[13px]">IA analisa</div>
                <div class="text-muted-foreground text-[12px] font-light">5 estratégias confluentes em paralelo</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-mono text-[10px] text-primary font-bold tracking-widest mt-1">03</span>
              <div>
                <div class="text-foreground font-medium text-[13px]">Recebe o sinal</div>
                <div class="text-muted-foreground text-[12px] font-light">Direção · confiança · entrada · stop · alvo</div>
              </div>
            </li>
          </ul>
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

      <!-- SECTION 2: GLOBAL MARKETS -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left items-start markets-header">
        <div class="max-w-xl text-left markets-title">
          <h3 class="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-4 text-left">Global Markets</h3>
          <h4 class="font-serif-display text-3xl sm:text-5xl text-foreground leading-[1.05] thinner-heading text-left" style="text-align:left;">Um motor. <em class="italic text-primary">Todos os mercados.</em></h4>
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
            
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <!-- Left side content description -->
              <div class="lg:col-span-7 panel-content-col">
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
                <h5 class="font-serif-display text-3xl sm:text-4xl text-foreground leading-[1.1] mb-6 thinner-heading panel-headline-el">
                  <em class="italic">{{ panel.title }}</em>
                </h5>
                <p class="text-base text-muted-foreground font-light leading-relaxed mb-8 panel-desc-el">
                  {{ panel.description }}
                </p>
                <ul class="space-y-3 mb-8 checklist">
                  <li v-for="(item, idx) in panel.checklist" :key="idx" class="flex items-start gap-3 text-sm text-foreground/90 font-light">
                    <span class="mt-[3px] w-5 h-5 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 check-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3 text-primary check-icon">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Right side Asset Summary Card -->
              <div class="lg:col-span-5">
                <div class="bg-card/40 border border-border/60 p-7 sm:p-8 backdrop-blur summary-card">
                  <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-5">Ativos cobertos</p>
                  <div class="grid grid-cols-2 gap-2 mb-8">
                    <div v-for="(asset, idx) in panel.assets" :key="idx" class="font-mono text-xs sm:text-sm text-foreground bg-background/60 border border-border/50 px-3 py-2.5 asset-item">
                      {{ asset }}
                    </div>
                  </div>
                  <div class="border-t border-border/60 pt-6">
                    <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-2">Sessões operacionais</p>
                    <p class="text-sm text-foreground font-light">{{ panel.sessions }}</p>
                  </div>
                  <div class="border-t border-border/60 pt-6 mt-6">
                    <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-3">Estratégias aplicadas</p>
                    <div class="flex flex-wrap gap-1.5 badges-wrapper">
                      <span v-for="(strat, idx) in panel.strategies" :key="idx" class="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 badge">
                        {{ strat }}
                      </span>
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
      // Section 1 — Como Funciona (Left content column and right video column rise smoothly together)
      gsap.fromTo(['.how-content-col', '.how-video'],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2.8, // Ultra-slow cinematic reveal
          ease: 'power3.out',
          stagger: 0.3, // Long calm lag between column entries
          scrollTrigger: { trigger: '.feature-panel-section', start: 'top 94%', once: true }
        }
      )

      // Section 2 — Global Markets header
      st('.markets-header', { from: { y: 40 }, to: { y: 0, duration: 2.6, ease: 'power3.out' } })

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
  border-top: 1px solid rgba(59, 130, 246, 0.08);
  padding-left: 40px !important;
  padding-right: 40px !important;
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

.summary-card {
  background-color: rgba(3, 7, 18, 0.45) !important;
  border-color: rgba(59, 130, 246, 0.15) !important;
  box-shadow: 0 15px 35px rgba(3, 7, 18, 0.5);
  border-radius: 8px;
}

.asset-item {
  background-color: rgba(3, 7, 18, 0.3) !important;
  border-color: rgba(59, 130, 246, 0.08) !important;
  border-radius: 4px;
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
