<script setup>
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2>{{ $t('about.title') }}</h2>
        <p class="desc">{{ $t('about.desc') }}</p>
      </div>

      <div class="grid grid-cols-3 mt-40">

        <!-- Disclaimer -->
        <div class="glass-panel feature-card">
          <div class="card-header">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            <h3>Disclaimer</h3>
          </div>
          <p>{{ $t('about.disclaimer') }}</p>
        </div>

        <!-- Limits (Center) -->
        <div class="glass-panel feature-card border-accent">
          <div class="card-header">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 5px var(--accent-color));"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 4 1.5"/><path d="M15 9V4s1 .5 4 1c0 1.5-.5 3-1.5 4"/></svg>
            </div>
            <h3>{{ $t('features.title') }}</h3>
          </div>
          <ul class="feature-list">
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.speed') }}</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.unlimited') }}</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.security') }}</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.unlock') }}</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.noads') }}</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </span> 
              <span class="list-text">{{ $t('features.notorrent') }}</span>
            </li>
          </ul>
        </div>

        <!-- Combined Tech & Trust -->
        <div class="glass-panel feature-card">
          <div class="card-header">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>{{ $t('features.amnezia_title') }}</h3>
          </div>
          <p v-html="$t('features.amnezia_desc')"></p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  margin-bottom: 3rem;
}

.desc {
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  white-space: pre-wrap;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: -10px;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.5rem; /* Shrunk as requested */
  line-height: 1;
}

.card-header h3 {
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 1.5rem; /* Made the card titles larger */
}

.feature-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.feature-list li {
  color: var(--text-muted);
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.list-icon {
  font-size: 0.85rem; /* Made checkmark and cross smaller */
  margin-top: 3px;
}

.list-text {
  flex: 1;
}

.border-accent {
  border: 1px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
}

@media (max-width: 768px) {
  .desc {
    white-space: normal;
  }
}
</style>
