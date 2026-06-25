<template>
  <div id="app">
    <!-- Preloader -->
    <transition name="preloader-fade">
      <div v-if="isLoading" class="preloader">
        <div class="preloader-content">
          <h1 class="preloader-title">Aladdin</h1>
          <h2 class="preloader-subtitle">Inteligência de Mercado</h2>
        </div>
      </div>
    </transition>

    <Navbar />
    <MarketHero />
    <FeaturePanel />
    <PerspectivesSection />
    <FaqSection />
    <CtaBanner />
    <SiteFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MarketHero from './components/MarketHero.vue'
import FeaturePanel from './components/FeaturePanel.vue'
import PerspectivesSection from './components/PerspectivesSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaBanner from './components/CtaBanner.vue'
import SiteFooter from './components/SiteFooter.vue'

import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const isLoading = ref(true)

    onMounted(() => {
      // 2 seconds preloader
      setTimeout(() => {
        isLoading.value = false
      }, 2000)
    })

    return { isLoading }
  },
  components: {
    Navbar,
    MarketHero,
    FeaturePanel,
    PerspectivesSection,
    FaqSection,
    CtaBanner,
    SiteFooter
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: hsl(var(--background));
}

/* Preloader Styles */
.preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: #030712; /* Navy blue/dark */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.preloader-content {
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

.preloader-title {
  font-family: var(--font-sans);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1;
}

.preloader-subtitle {
  font-family: var(--font-sans);
  font-size: clamp(0.75rem, 2vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: hsl(var(--primary));
  margin-top: 1rem;
}

/* Preloader Transition */
.preloader-fade-enter-active,
.preloader-fade-leave-active {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.preloader-fade-enter-from,
.preloader-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
