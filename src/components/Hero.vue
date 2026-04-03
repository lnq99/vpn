<script setup>
const scrollToFooter = () => {
  const el = document.getElementById('footer')
  const target = el?.querySelector('.contact-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    if (target) {
      setTimeout(() => {
        target.classList.remove('flash-highlight');
        void target.offsetWidth; // Force Reflow
        target.classList.add('flash-highlight');
      }, 500)
    }
  }
}
</script>

<template>
  <section class="hero-section">
    <div class="container hero-container text-center">
      <!-- Decorator Blob -->
      <div class="blob shape-1"></div>
      <div class="blob shape-2"></div>

      <div class="hero-content">
        <h1 class="hero-title" v-html="$t('hero.title')"></h1>
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
        <div class="hero-actions">
          <a href="#pricing" class="btn btn-primary btn-lg">{{ $t('hero.cta') }}</a>
          <button @click.prevent="scrollToFooter" class="btn btn-secondary btn-lg">{{ $t('hero.cta_secondary') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10; /* Ensures content is placed forcefully above the blobs */
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  background: -webkit-linear-gradient(45deg, var(--text-main), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 40px;
  line-height: 1.8;
  white-space: pre-wrap;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.1rem;
  border-radius: 12px;
}

/* Background Animated Blobs */
.blob {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.3;
}

.shape-1 {
  top: -20%;
  left: -25%;
  width: 400px;
  height: 400px;
  background: var(--accent-color);
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  bottom: -30%;
  right: -25%;
  width: 500px;
  height: 500px;
  background: #8b5cf6; /* neon purple complement */
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.1); }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; }
  .hero-actions { flex-direction: column; }
  .hero-subtitle { white-space: normal; }
}
</style>
