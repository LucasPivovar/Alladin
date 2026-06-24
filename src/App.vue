<template>
  <div id="app">
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

export default {
  name: 'App',
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
</style>
