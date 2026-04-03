<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Pricing from './components/Pricing.vue'
import SetupGuides from './components/SetupGuides.vue'
import Footer from './components/Footer.vue'

// Set default theme to dark for a premium hacker aesthetic
onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>

<template>
  <div class="app-layout">
    <Header />
    <main>
      <Hero />
      <Features />
      <Pricing />
      <SetupGuides />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
