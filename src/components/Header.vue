<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

const toggleLocale = () => {
  const locales = ['vi', 'en', 'ru']
  const nextIndex = (locales.indexOf(locale.value) + 1) % locales.length
  locale.value = locales[nextIndex]
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <div class="brand">LNQ99 VPN</div>
      <nav class="nav-links">
        <a href="#about">{{ $t('nav.about') }}</a>
        <a href="#pricing">{{ $t('nav.pricing') }}</a>
        <a href="#setup">{{ $t('nav.setup') }}</a>
      </nav>
      <div class="controls">
        <button class="btn btn-secondary btn-icon" @click="toggleLocale" title="Change Language">
          🌐 {{ locale.toUpperCase() }}
        </button>
        <button class="btn btn-secondary btn-icon" @click="toggleTheme" title="Toggle Theme">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--card-border);
  transition: all var(--transition-speed);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.brand {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.5px;
  text-transform: uppercase;
}
.brand span {
  color: var(--accent-color);
}

.nav-links {
  display: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  transition: color var(--transition-speed);
}

.nav-links a:hover {
  color: var(--accent-color);
}

.controls {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  padding: 8px 12px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}
</style>
