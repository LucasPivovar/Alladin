<template>
  <section class="relative overflow-hidden border-b border-border/40 min-h-[88vh] flex items-center hero-section">
    <!-- SVG Candlestick Background Graph -->
    <div class="absolute inset-0 z-0 overflow-hidden svg-background">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" class="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="candleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="hsl(214 95% 70%)"></stop>
            <stop offset="100%" stop-color="hsl(214 95% 50%)"></stop>
          </linearGradient>
        </defs>
        
        <!-- Grid Backdrop Lines -->
        <g opacity="0.08" stroke="hsl(214 60% 70%)" stroke-width="1">
          <line x1="0" y1="50" x2="1600" y2="50"></line>
          <line x1="0" y1="100" x2="1600" y2="100"></line>
          <line x1="0" y1="150" x2="1600" y2="150"></line>
          <line x1="0" y1="200" x2="1600" y2="200"></line>
          <line x1="0" y1="250" x2="1600" y2="250"></line>
          <line x1="0" y1="300" x2="1600" y2="300"></line>
          <line x1="0" y1="350" x2="1600" y2="350"></line>
          <line x1="0" y1="400" x2="1600" y2="400"></line>
          <line x1="0" y1="450" x2="1600" y2="450"></line>
          <line x1="0" y1="500" x2="1600" y2="500"></line>
          <line x1="0" y1="550" x2="1600" y2="550"></line>
          <line x1="0" y1="600" x2="1600" y2="600"></line>
          <line x1="0" y1="650" x2="1600" y2="650"></line>
          <line x1="0" y1="700" x2="1600" y2="700"></line>
          <line x1="0" y1="750" x2="1600" y2="750"></line>
          <line x1="0" y1="800" x2="1600" y2="800"></line>
          <line x1="0" y1="850" x2="1600" y2="850"></line>
          <line x1="0" y1="900" x2="1600" y2="900"></line>
          
          <line x1="50" y1="0" x2="50" y2="900"></line>
          <line x1="100" y1="0" x2="100" y2="900"></line>
          <line x1="150" y1="0" x2="150" y2="900"></line>
          <line x1="200" y1="0" x2="200" y2="900"></line>
          <line x1="250" y1="0" x2="250" y2="900"></line>
          <line x1="300" y1="0" x2="300" y2="900"></line>
          <line x1="350" y1="0" x2="350" y2="900"></line>
          <line x1="400" y1="0" x2="400" y2="900"></line>
          <line x1="450" y1="0" x2="450" y2="900"></line>
          <line x1="500" y1="0" x2="500" y2="900"></line>
          <line x1="550" y1="0" x2="550" y2="900"></line>
          <line x1="600" y1="0" x2="600" y2="900"></line>
          <line x1="650" y1="0" x2="650" y2="900"></line>
          <line x1="700" y1="0" x2="700" y2="900"></line>
          <line x1="750" y1="0" x2="750" y2="900"></line>
          <line x1="800" y1="0" x2="800" y2="900"></line>
          <line x1="850" y1="0" x2="850" y2="900"></line>
          <line x1="900" y1="0" x2="900" y2="900"></line>
          <line x1="950" y1="0" x2="950" y2="900"></line>
          <line x1="1000" y1="0" x2="1000" y2="900"></line>
          <line x1="1050" y1="0" x2="1050" y2="900"></line>
          <line x1="1100" y1="0" x2="1100" y2="900"></line>
          <line x1="1150" y1="0" x2="1150" y2="900"></line>
          <line x1="1200" y1="0" x2="1200" y2="900"></line>
          <line x1="1250" y1="0" x2="1250" y2="900"></line>
          <line x1="1300" y1="0" x2="1300" y2="900"></line>
          <line x1="1350" y1="0" x2="1350" y2="900"></line>
          <line x1="1400" y1="0" x2="1400" y2="900"></line>
          <line x1="1450" y1="0" x2="1450" y2="900"></line>
          <line x1="1500" y1="0" x2="1500" y2="900"></line>
          <line x1="1550" y1="0" x2="1550" y2="900"></line>
          <line x1="1600" y1="0" x2="1600" y2="900"></line>
        </g>

        <!-- Blurred Background Candles -->
        <g style="filter: blur(1.5px);">
          <!-- Dynamic Candles loops -->
          <g v-for="(c, idx) in bgCandles" :key="'bgc-' + idx" :style="c.style">
            <line :x1="c.x" :y1="c.wickY1" :x2="c.x" :y2="c.wickY2" stroke="hsl(214 95% 65%)" stroke-width="1"></line>
            <rect :x="c.rectX" :y="c.rectY" width="12" :height="c.rectH" fill="url(#candleGrad)" rx="1"></rect>
          </g>
        </g>

        <!-- Sharp Foreground Candles -->
        <g>
          <g v-for="(c, idx) in fgCandles" :key="'fgc-' + idx" :style="c.style">
            <line :x1="c.x" :y1="c.wickY1" :x2="c.x" :y2="c.wickY2" stroke="hsl(214 95% 70%)" stroke-width="1.5"></line>
            <rect :x="c.rectX" :y="c.rectY" width="18" :height="c.rectH" fill="url(#candleGrad)" rx="1.5"></rect>
          </g>
        </g>
      </svg>
    </div>

    <!-- Gradient overlays matching tailwind markup styling -->
    <div class="pointer-events-none absolute inset-0" style="background: linear-gradient(180deg, hsl(var(--background) / 0.5) 0%, hsl(var(--background) / 0.85) 75%, hsl(var(--background)) 100%);"></div>
    
    <div class="pointer-events-none absolute inset-0 overflow-hidden" style="contain: layout style paint;">
      <!-- Pan Grid Overlay -->
      <div class="absolute inset-0 opacity-[0.16] animate-grid-pan grid-layer"></div>
      
      <!-- Glowing Radial Ambient Blobs -->
      <div class="absolute top-[5%] left-[3%] w-[34rem] h-[34rem] rounded-full opacity-45 animate-drift glow-blob-1"></div>
      <div class="absolute bottom-[2%] right-[2%] w-[36rem] h-[36rem] rounded-full opacity-40 animate-drift glow-blob-2"></div>
      <div class="absolute top-[40%] left-[42%] w-[28rem] h-[28rem] rounded-full opacity-30 animate-drift glow-blob-3"></div>
      <div class="absolute top-[60%] left-[8%] w-[22rem] h-[22rem] rounded-full opacity-30 animate-drift glow-blob-4"></div>

      <!-- Left-to-Right Top Line Glow Accent -->
      <div class="absolute inset-x-0 top-0 h-px" style="background: linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent);"></div>
    </div>

    <!-- Gradient Radial Overlay centered under copy text -->
    <div class="pointer-events-none absolute inset-0" style="background: radial-gradient(ellipse 55% 50% at 25% 35%, hsl(var(--background) / 0.65), transparent 65%);"></div>

    <!-- DESKTOP ORBITAL LIGHT CONCENTRIC RINGS AND LAMP (Interactive Parallax) -->
    <div class="absolute hidden md:block orbit-container" :style="orbitStyle">
      <div class="relative w-[29rem] h-[29rem] lg:w-[36rem] lg:h-[36rem]">
        <!-- Inner Blur Glow -->
        <div class="absolute inset-0 rounded-full bg-primary/25" style="filter: blur(80px); transform: translateZ(0px);"></div>
        
        <!-- Concentric Orbit Ring 1 -->
        <div class="absolute inset-0 rounded-full border border-primary/15 orbit-ring-1"></div>
        
        <!-- Concentric Orbit Ring 2 -->
        <div class="absolute -inset-10 rounded-full border border-primary/10 orbit-ring-2"></div>
        
        <!-- Concentric Orbit Ring 3 -->
        <div class="absolute -inset-24 rounded-full border border-primary/5 orbit-ring-3"></div>
        
        <!-- Concentric Orbit Ring 4 -->
        <div class="absolute -inset-40 rounded-full border border-primary/[0.04] orbit-ring-4"></div>
        
        <!-- Orbit Satellite Nodes / Dots -->
        <div class="absolute inset-0 rounded-full">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))] shadow-primary-glow"></div>
        </div>
        <div class="absolute -inset-10 orbit-ring-fast">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_hsl(45,90%,60%)] shadow-amber-glow"></div>
        </div>
        
        <!-- Magic Lamp Centerpiece (extra parallax translation for 3D depth) -->
        <div class="absolute inset-16 animate-float-slow lamp-wrapper" :style="lampDepthStyle">
          <img :src="magicLamp" alt="Aladdin Magic Lamp" aria-hidden="true" decoding="async" loading="eager" class="w-full h-full object-contain opacity-95 filter-glow" />
        </div>
        
        <!-- Outer Pulsing Rings -->
        <div class="absolute inset-16 rounded-full border border-primary/40 animate-pulse-ring"></div>
        <div class="absolute inset-16 rounded-full border border-primary/30 animate-pulse-ring" style="animation-delay: 1.2s;"></div>
      </div>
    </div>

    <!-- MOBILE MAGIC LAMP & GLOW BACKDROP (Simplified for mobile performance) -->
    <div class="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] opacity-30 mobile-lamp">
      <div class="absolute inset-0 rounded-full bg-primary/30" style="filter: blur(60px);"></div>
      <img :src="magicLamp" alt="Aladdin Magic Lamp" aria-hidden="true" decoding="async" class="absolute inset-10 w-[calc(100%-5rem)] h-[calc(100%-5rem)] object-contain animate-float-slow">
    </div>

    <!-- HERO CONTENT CONTAINER -->
    <div class="relative w-full px-4 sm:px-8 lg:px-14 pt-16 sm:pt-24 pb-20 sm:pb-28 content-layer">
      <div class="max-w-3xl mr-auto content-left">
        <!-- Subheading badge line -->
        <div class="flex items-center gap-3 mb-7 sm:mb-10 hero-eyebrow-el">
          <span class="h-px w-10 sm:w-14 bg-primary line-indicator"></span>
          <span class="text-[10px] font-bold tracking-[0.3em] uppercase text-primary subheading-text">Institutional Grade Intelligence</span>
        </div>
        
        <h2 class="font-serif-display text-[3rem] leading-[0.95] sm:text-7xl md:text-8xl text-foreground mb-7 sm:mb-9 hero-title-el main-title">
          Sua lâmpada<br />mágica<br />
          <em class="italic bg-clip-text text-transparent title-gradient">do mercado.</em>
        </h2>
        
        <!-- Core Description Copy -->
        <p class="text-base sm:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10 sm:mb-12 hero-desc-el desc-text">
          <strong class="text-foreground font-medium">ALADDIN</strong> traduz o caos do mercado em sinais objetivos. Uma<br class="hidden md:block" />
          infraestrutura de IA proprietária que funde <em class="not-italic text-foreground/90">SMC, Wyckoff, Price Action,</em><br class="hidden md:block" />
          <em class="not-italic text-foreground/90">RSI e Elliott</em> em uma única leitura institucional — em tempo real, para<br class="hidden md:block" />
          qualquer mercado.
        </p>
        
        <!-- Button actions (Row 1) -->
        <div class="flex flex-wrap gap-4 sm:gap-4 items-center mb-8 hero-buttons-el button-row">
          <!-- CTA Action 1: Access Panel -->
          <a class="btn-primary-action" href="/auth?mode=signup">
            Acessar painel
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          
          <!-- CTA Action 2: Get Key -->
          <a href="https://t.me/IAaladdin?text=Solicito%20minha%20chave%20de%20acesso" target="_blank" rel="noopener noreferrer" class="btn-secondary-action">
            Solicitar chave de acesso
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <!-- Stats Indicators (Row 2) -->
        <div class="flex gap-6 sm:gap-10 items-center stats-row hero-stats-el">
          <div class="stats-item">
            <p class="stats-num">5+</p>
            <p class="stats-label">Estratégias confluentes</p>
          </div>
          <div class="stats-item">
            <p class="stats-num text-primary">24/7</p>
            <p class="stats-label">Mercado coberto</p>
          </div>
          <div class="stats-item hidden sm:block">
            <p class="stats-num">IA</p>
            <p class="stats-label">Visão computacional</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'MarketHero',
  setup() {
    // Generate background candles with randomized anim delays to make background look alive
    const bgCandles = ref([
      { x: 14.5, wickY1: 297.3, wickY2: 341.2, rectX: 8.5, rectY: 298.4, rectH: 40.4, style: { animation: '4.78s ease-in-out 4.56s infinite alternate none running candleFloat', opacity: 0.24 } },
      { x: 71.7, wickY1: 300.7, wickY2: 351.2, rectX: 65.7, rectY: 315.5, rectH: 18.9, style: { animation: '5.19s ease-in-out 3.11s infinite alternate none running candleFloat', opacity: 0.27 } },
      { x: 128.9, wickY1: 302.9, wickY2: 340.1, rectX: 122.9, rectY: 310.7, rectH: 28.2, style: { animation: '4.16s ease-in-out 4.68s infinite alternate none running candleFloat', opacity: 0.23 } },
      { x: 186.0, wickY1: 300.2, wickY2: 350.5, rectX: 180.0, rectY: 311.4, rectH: 26.6, style: { animation: '7.35s ease-in-out 2.23s infinite alternate none running candleFloat', opacity: 0.15 } },
      { x: 243.1, wickY1: 305.0, wickY2: 346.4, rectX: 237.1, rectY: 307.0, rectH: 21.5, style: { animation: '7.42s ease-in-out 3.82s infinite alternate none running candleFloat', opacity: 0.25 } },
      { x: 300.3, wickY1: 293.8, wickY2: 346.6, rectX: 294.3, rectY: 305.4, rectH: 36.0, style: { animation: '7.07s ease-in-out 5.32s infinite alternate none running candleFloat', opacity: 0.38 } },
      { x: 357.4, wickY1: 309.1, wickY2: 343.0, rectX: 351.4, rectY: 314.8, rectH: 24.0, style: { animation: '4.88s ease-in-out 3.01s infinite alternate none running candleFloat', opacity: 0.25 } },
      { x: 414.6, wickY1: 305.7, wickY2: 356.5, rectX: 408.6, rectY: 308.0, rectH: 39.6, style: { animation: '7.72s ease-in-out 4.31s infinite alternate none running candleFloat', opacity: 0.15 } },
      { x: 471.7, wickY1: 316.5, wickY2: 343.1, rectX: 465.7, rectY: 326.3, rectH: 12.8, style: { animation: '5.84s ease-in-out 0.40s infinite alternate none running candleFloat', opacity: 0.39 } },
      { x: 528.9, wickY1: 329.5, wickY2: 344.2, rectX: 522.9, rectY: 331.3, rectH: 7.4, style: { animation: '6.71s ease-in-out 2.90s infinite alternate none running candleFloat', opacity: 0.34 } },
      { x: 586.0, wickY1: 322.7, wickY2: 357.0, rectX: 580.0, rectY: 330.4, rectH: 9.8, style: { animation: '7.42s ease-in-out 0.57s infinite alternate none running candleFloat', opacity: 0.37 } },
      { x: 643.1, wickY1: 320.1, wickY2: 356.1, rectX: 637.1, rectY: 334.0, rectH: 9.3, style: { animation: '5.79s ease-in-out 3.92s infinite alternate none running candleFloat', opacity: 0.35 } },
      { x: 700.3, wickY1: 325.5, wickY2: 363.8, rectX: 694.3, rectY: 327.5, rectH: 27.3, style: { animation: '6.17s ease-in-out 3.91s infinite alternate none running candleFloat', opacity: 0.22 } },
      { x: 757.4, wickY1: 322.8, wickY2: 349.5, rectX: 751.4, rectY: 327.8, rectH: 20.9, style: { animation: '7.87s ease-in-out 0.61s infinite alternate none running candleFloat', opacity: 0.41 } },
      { x: 814.6, wickY1: 321.5, wickY2: 368.4, rectX: 808.6, rectY: 326.2, rectH: 38.2, style: { animation: '4.27s ease-in-out 5.89s infinite alternate none running candleFloat', opacity: 0.37 } },
      { x: 871.7, wickY1: 310.4, wickY2: 360.7, rectX: 865.7, rectY: 327.1, rectH: 20.6, style: { animation: '4.60s ease-in-out 2.02s infinite alternate none running candleFloat', opacity: 0.29 } },
      { x: 928.9, wickY1: 323.1, wickY2: 340.4, rectX: 922.9, rectY: 329.8, rectH: 9.4, style: { animation: '6.39s ease-in-out 0.43s infinite alternate none running candleFloat', opacity: 0.38 } },
      { x: 986.0, wickY1: 315.5, wickY2: 368.1, rectX: 980.0, rectY: 320.6, rectH: 36.1, style: { animation: '6.59s ease-in-out 2.30s infinite alternate none running candleFloat', opacity: 0.24 } },
      { x: 1043.1, wickY1: 312.0, wickY2: 358.4, rectX: 1037.1, rectY: 314.8, rectH: 37.7, style: { animation: '7.32s ease-in-out 5.25s infinite alternate none running candleFloat', opacity: 0.35 } },
      { x: 1100.3, wickY1: 320.6, wickY2: 359.2, rectX: 1094.3, rectY: 327.0, rectH: 26.1, style: { animation: '4.32s ease-in-out 2.03s infinite alternate none running candleFloat', opacity: 0.37 } },
      { x: 1157.4, wickY1: 332.4, wickY2: 353.0, rectX: 1151.4, rectY: 332.9, rectH: 15.7, style: { animation: '6.10s ease-in-out 1.15s infinite alternate none running candleFloat', opacity: 0.37 } },
      { x: 1214.6, wickY1: 327.9, wickY2: 364.0, rectX: 1208.6, rectY: 332.2, rectH: 15.5, style: { animation: '7.66s ease-in-out 3.59s infinite alternate none running candleFloat', opacity: 0.20 } },
      { x: 1271.7, wickY1: 330.5, wickY2: 347.9, rectX: 1265.7, rectY: 331.3, rectH: 7.6, style: { animation: '6.99s ease-in-out 1.40s infinite alternate none running candleFloat', opacity: 0.17 } },
      { x: 1328.9, wickY1: 306.7, wickY2: 374.6, rectX: 1322.9, rectY: 323.7, rectH: 27.7, style: { animation: '4.13s ease-in-out 4.45s infinite alternate none running candleFloat', opacity: 0.25 } },
      { x: 1386.0, wickY1: 307.1, wickY2: 359.1, rectX: 1380.0, rectY: 309.1, rectH: 42.5, style: { animation: '6.98s ease-in-out 5.04s infinite alternate none running candleFloat', opacity: 0.23 } },
      { x: 1443.1, wickY1: 309.4, wickY2: 361.9, rectX: 1437.1, rectY: 314.2, rectH: 42.6, style: { animation: '7.73s ease-in-out 0.56s infinite alternate none running candleFloat', opacity: 0.21 } },
      { x: 1500.3, wickY1: 324.6, wickY2: 338.1, rectX: 1494.3, rectY: 328.6, rectH: 8.7, style: { animation: '6.01s ease-in-out 2.20s infinite alternate none running candleFloat', opacity: 0.29 } },
      { x: 1557.4, wickY1: 311.0, wickY2: 349.6, rectX: 1551.4, rectY: 324.0, rectH: 17.4, style: { animation: '6.58s ease-in-out 5.60s infinite alternate none running candleFloat', opacity: 0.26 } }
    ])

    const fgCandles = ref([
      { x: 24, wickY1: 352.0, wickY2: 409.3, rectX: 15, rectY: 359.7, rectH: 33.8, style: { animation: '7.99s ease-in-out 4.10s infinite alternate none running candleFloat', opacity: 0.68 } },
      { x: 124, wickY1: 354.8, wickY2: 398.1, rectX: 115, rectY: 372.1, rectH: 14.5, style: { animation: '6.75s ease-in-out 2.26s infinite alternate none running candleFloat', opacity: 0.43 } },
      { x: 224, wickY1: 367.4, wickY2: 404.9, rectX: 215, rectY: 371.8, rectH: 32.1, style: { animation: '6.34s ease-in-out 0.62s infinite alternate none running candleFloat', opacity: 0.62 } },
      { x: 324, wickY1: 369.8, wickY2: 411.2, rectX: 315, rectY: 382.7, rectH: 26.5, style: { animation: '5.62s ease-in-out 0.58s infinite alternate none running candleFloat', opacity: 0.68 } },
      { x: 424, wickY1: 376.1, wickY2: 446.0, rectX: 415, rectY: 382.9, rectH: 41.9, style: { animation: '6.86s ease-in-out 5.34s infinite alternate none running candleFloat', opacity: 0.63 } },
      { x: 524, wickY1: 380.8, wickY2: 419.4, rectX: 515, rectY: 385.1, rectH: 28.1, style: { animation: '5.51s ease-in-out 2.51s infinite alternate none running candleFloat', opacity: 0.42 } },
      { x: 624, wickY1: 388.0, wickY2: 402.5, rectX: 615, rectY: 389.9, rectH: 9.4, style: { animation: '6.66s ease-in-out 4.84s infinite alternate none running candleFloat', opacity: 0.71 } },
      { x: 724, wickY1: 374.4, wickY2: 404.6, rectX: 715, rectY: 382.4, rectH: 13.1, style: { animation: '4.14s ease-in-out 4.86s infinite alternate none running candleFloat', opacity: 0.74 } },
      { x: 824, wickY1: 371.5, wickY2: 402.9, rectX: 815, rectY: 379.2, rectH: 22.7, style: { animation: '6.30s ease-in-out 5.51s infinite alternate none running candleFloat', opacity: 0.38 } },
      { x: 924, wickY1: 363.4, wickY2: 407.6, rectX: 915, rectY: 372.2, rectH: 33.1, style: { animation: '4.44s ease-in-out 0.89s infinite alternate none running candleFloat', opacity: 0.43 } },
      { x: 1024, wickY1: 376.0, wickY2: 410.6, rectX: 1015, rectY: 384.5, rectH: 16.7, style: { animation: '7.95s ease-in-out 2.83s infinite alternate none running candleFloat', opacity: 0.40 } },
      { x: 1124, wickY1: 363.3, wickY2: 422.4, rectX: 1115, rectY: 375.7, rectH: 28.6, style: { animation: '6.06s ease-in-out 5.63s infinite alternate none running candleFloat', opacity: 0.69 } },
      { x: 1224, wickY1: 371.6, wickY2: 417.1, rectX: 1215, rectY: 377.0, rectH: 34.3, style: { animation: '4.30s ease-in-out 2.71s infinite alternate none running candleFloat', opacity: 0.54 } },
      { x: 1324, wickY1: 366.7, wickY2: 426.3, rectX: 1315, rectY: 387.8, rectH: 27.2, style: { animation: '7.61s ease-in-out 1.24s infinite alternate none running candleFloat', opacity: 0.35 } },
      { x: 1424, wickY1: 396.6, wickY2: 423.3, rectX: 1415, rectY: 397.3, rectH: 20.5, style: { animation: '6.11s ease-in-out 4.86s infinite alternate none running candleFloat', opacity: 0.43 } },
      { x: 1524, wickY1: 382.6, wickY2: 430.5, rectX: 1515, rectY: 396.2, rectH: 25.7, style: { animation: '7.56s ease-in-out 0.30s infinite alternate none running candleFloat', opacity: 0.70 } }
    ])

    // Interactivity: Parallax mouse movement tracking
    const mouseX = ref(0)
    const mouseY = ref(0)
    const targetX = ref(0)
    const targetY = ref(0)
    let animFrame = null

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      // Normalize values to range between -1 and 1
      targetX.value = (clientX - innerWidth / 2) / (innerWidth / 2)
      targetY.value = (clientY - innerHeight / 2) / (innerHeight / 2)
    }

    const updateInterpolation = () => {
      // Linear interpolation (lerp) for buttery smooth follow action
      mouseX.value += (targetX.value - mouseX.value) * 0.06
      mouseY.value += (targetY.value - mouseY.value) * 0.06
      animFrame = requestAnimationFrame(updateInterpolation)
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)
      updateInterpolation()

      // GSAP hero entrance animations
      nextTick(() => {
        const tl = gsap.timeline({ delay: 0.1 })
        tl.fromTo(['.hero-eyebrow-el', '.hero-title-el', '.hero-desc-el', '.hero-buttons-el', '.hero-stats-el'],
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 3.2, // Ultra-slow cinematic reveal
            ease: 'power2.out',
            stagger: 0.18 // Long flowing wave between text blocks
          }
        )
        .fromTo('.orbit-container',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 4.0, ease: 'power2.out' }, // Very slow majestic expansion
          0.3
        )
      })
    })

    onUnmounted(() => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame)
      ScrollTrigger.getAll().forEach(t => t.kill())
    })

    // Compute styles based on mouse movements
    const orbitStyle = computed(() => {
      const tx = mouseX.value * 25
      const ty = mouseY.value * 18
      return {
        top: '50%',
        right: '4%',
        transform: `translateY(-50%) translate3d(${tx}px, ${ty}px, 0)`,
        willChange: 'transform',
        transition: 'transform 0.1s ease-out'
      }
    })

    const lampDepthStyle = computed(() => {
      // Offset translation slightly more to give a 3D float depth effect
      const tx = mouseX.value * 12
      const ty = mouseY.value * 8
      return {
        transform: `translate3d(${tx}px, ${ty}px, 0)`,
        willChange: 'transform'
      }
    })

    return {
      bgCandles,
      fgCandles,
      mouseX,
      mouseY,
      orbitStyle,
      lampDepthStyle,
      magicLamp: '/assets/magic-lamp.svg'
    }
  }
}
</script>

<style scoped>
.hero-section {
  background-color: hsl(var(--background));
  min-height: 98vh; /* Stretch to fill full viewport height */
  display: flex;
  align-items: center;
  position: relative;
  overflow: clip; /* clip prevents scrollbar but unlike hidden doesn't create new positioning context */
  border-bottom: 1px solid rgba(59, 130, 246, 0.08);
}

.svg-background {
  opacity: 0.95;
}

/* Custom Grid Pan Background */
.grid-layer {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px), 
    linear-gradient(90deg, rgba(59, 130, 246, 0.12) 1px, transparent 1px);
  background-size: 110px 110px;
  mask-image: radial-gradient(95% 80% at 25% 45%, black 40%, transparent 95%);
  -webkit-mask-image: radial-gradient(95% 80% at 25% 45%, black 40%, transparent 95%);
  transform: translateZ(0px);
  will-change: transform;
}

/* Blur ambient glows styling */
.glow-blob-1 {
  background: radial-gradient(circle, rgba(56, 140, 250, 0.28), transparent 70%);
  filter: blur(70px);
  will-change: transform;
}

.glow-blob-2 {
  background: radial-gradient(circle, rgba(106, 169, 251, 0.22), transparent 70%);
  animation-delay: -7s;
  filter: blur(80px);
  will-change: transform;
}

.glow-blob-3 {
  background: radial-gradient(circle, rgba(245, 199, 61, 0.12), transparent 70%);
  animation-delay: -3s;
  filter: blur(60px);
  will-change: transform;
}

.glow-blob-4 {
  background: radial-gradient(circle, rgba(81, 154, 251, 0.18), transparent 70%);
  animation-delay: -11s;
  filter: blur(50px);
  will-change: transform;
}

/* Concentric Orbiting rings */
.orbit-container {
  z-index: 5;
  display: none; /* hidden by default on mobile */
  opacity: 0; /* hidden until GSAP fades it in */
}

@media (min-width: 768px) {
  .orbit-container {
    display: block; /* visible on desktop */
  }
}

/* Inner relative container sizing */
.orbit-container > div {
  position: relative;
  width: 29rem;
  height: 29rem;
}

@media (min-width: 1024px) {
  .orbit-container > div {
    width: 36rem;
    height: 36rem;
  }
}

/* Orbit ring base: expand outward from the container */
.orbit-ring-2-el {
  top: -2.5rem;
  right: -2.5rem;
  bottom: -2.5rem;
  left: -2.5rem;
}

/* Lamp wrapper: inset 4rem from the container edges */
.lamp-wrapper {
  top: 4rem !important;
  right: 4rem !important;
  bottom: 4rem !important;
  left: 4rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease-out;
}

.orbit-ring-1 {
  animation: spin 50s linear infinite;
  will-change: transform;
}

.orbit-ring-2 {
  animation: spin 80s linear infinite reverse;
  will-change: transform;
}

.orbit-ring-3 {
  animation: spin 130s linear infinite;
  will-change: transform;
}

.orbit-ring-4 {
  animation: spin 180s linear infinite reverse;
  will-change: transform;
}

.orbit-ring-fast {
  animation: spin 22s linear infinite;
  will-change: transform;
}

.shadow-primary-glow {
  box-shadow: 0 0 20px hsl(var(--primary));
}

.shadow-amber-glow {
  box-shadow: 0 0 16px #fbbf24;
}

.lamp-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease-out;
}

.filter-glow {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.8)) 
          drop-shadow(0 0 12px rgba(59, 130, 246, 0.4)) 
          drop-shadow(0 0 50px rgba(59, 130, 246, 0.65));
}

.arrow-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary-action:hover .arrow-icon,
.btn-secondary-action:hover .arrow-icon {
  transform: translateX(4px);
}

/* Button & Action Specific styling */
.btn-primary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem !important;
  background: #3b82f6 !important; /* Vibrant primary blue */
  color: #ffffff !important;
  font-family: var(--font-sans) !important;
  font-weight: 700 !important;
  font-size: 11px !important;
  text-transform: uppercase;
  letter-spacing: 0.24em !important;
  border-radius: 0px !important; /* Sharp corners */
  border: none !important;
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.35);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  text-decoration: none;
}

.btn-primary-action:hover {
  transform: scale(1.02);
  background: #2563eb !important;
  box-shadow: 0 0 35px rgba(59, 130, 246, 0.55);
}

.btn-secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem !important;
  background: rgba(59, 130, 246, 0.05) !important;
  color: #3b82f6 !important;
  font-family: var(--font-sans) !important;
  font-weight: 700 !important;
  font-size: 11px !important;
  text-transform: uppercase;
  letter-spacing: 0.24em !important;
  border-radius: 0px !important; /* Sharp corners */
  border: 1px solid rgba(59, 130, 246, 0.5) !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  text-decoration: none;
}

.btn-secondary-action:hover {
  background: rgba(59, 130, 246, 0.12) !important;
  border-color: #3b82f6 !important;
}

/* Titles and description gradient style */
.title-gradient {
  background-image: linear-gradient(135deg, rgb(131, 183, 252) 0%, rgb(31, 126, 249) 100%);
}

.subheading-text {
  color: #60a5fa;
  text-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
}

.line-indicator {
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

/* Stats Row Styling */
.stats-row {
  display: flex;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.stats-item {
  display: flex;
  flex-direction: column;
}

.stats-num {
  font-size: 1.5rem;
  font-weight: 700 !important;
  color: #ffffff;
  font-family: var(--font-sans) !important;
  line-height: 1.2;
}

.stats-num.text-primary {
  color: #3b82f6 !important;
}

.stats-label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: hsl(var(--muted-foreground));
  margin-top: 0.25rem;
}

/* Main title overrides */
.main-title {
  max-width: 620px;
  font-family: var(--font-sans) !important;
  font-weight: 700 !important;
  line-height: 0.95;
  letter-spacing: -0.02em;
  font-size: 3.5rem;
}

.content-layer {
  padding-left: 40px !important;
  padding-right: 40px !important;
}

/* Hide hero elements by default to prevent FOUC (flash of unstyled content) */
.hero-eyebrow-el,
.hero-title-el,
.hero-desc-el,
.hero-buttons-el,
.hero-stats-el {
  opacity: 0;
}

/* Responsiveness adjustments */
@media (max-width: 1200px) {
  .orbit-container {
    right: 0%;
    transform: translateY(-50%) scale(0.8) !important;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 90vh;
  }
  
  .content-layer {
    padding-top: 6rem;
    padding-bottom: 4rem;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }
  
  .button-row {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
  }
  
  .btn-primary-action, .btn-secondary-action {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem !important;
  }
  
  .stats-row {
    width: 100%;
    justify-content: space-around;
    padding: 1.25rem 0;
    border-top: 1px solid rgba(59, 130, 246, 0.1);
    margin-top: 1.5rem;
  }
}

@media (min-width: 640px) {
  .main-title {
    font-size: 5.5rem;
  }
  .stats-num {
    font-size: 1.75rem;
  }
  .stats-label {
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .main-title {
    font-size: 6rem;
  }
}
</style>
