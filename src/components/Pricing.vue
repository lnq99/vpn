<script setup>
</script>

<template>
  <section id="pricing" class="section bg-alt">
    <div class="container">
      <div class="section-header text-center">
        <h2>{{ $t('pricing.title') }}</h2>
        <div class="trial-notice glass-panel">
          <span class="icon">⏱️</span> {{ $t('pricing.trial') }} &bull; {{ $t('pricing.refund') }}
        </div>
      </div>

      <div class="grid grid-cols-4 pricing-grid">
        <div class="glass-panel pricing-card">
          <h3 class="device-count">{{ $t('pricing.device_1') }}</h3>
          <div class="price">
            <span class="amount">90</span>
            <span class="currency">RUB</span>
          </div>
          <p class="period">{{ $t('pricing.period') }}</p>
        </div>

        <div class="glass-panel pricing-card popular">
          <div class="popular-badge">Most Popular</div>
          <h3 class="device-count">{{ $t('pricing.device_2') }}</h3>
          <div class="price">
            <span class="amount">170</span>
            <span class="currency">RUB</span>
          </div>
          <p class="period">{{ $t('pricing.period') }}</p>
        </div>

        <div class="glass-panel pricing-card">
          <h3 class="device-count">{{ $t('pricing.device_3') }}</h3>
          <div class="price">
            <span class="amount">240</span>
            <span class="currency">RUB</span>
          </div>
          <p class="period">{{ $t('pricing.period') }}</p>
        </div>

        <div class="glass-panel pricing-card">
          <h3 class="device-count">{{ $t('pricing.device_4') }}</h3>
          <div class="price">
            <span class="amount">75</span>
            <span class="currency">RUB</span>
          </div>
          <p class="period">{{ $t('pricing.period_device') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-alt {
  background-color: var(--bg-color-alt);
  border-top: 1px solid var(--card-border);
  border-bottom: 1px solid var(--card-border);
}

.section-header {
  margin-bottom: 3rem;
}

.trial-notice {
  display: inline-block;
  margin-top: 1rem;
  padding: 16px 24px;
  font-size: 1.2rem;
  font-weight: 500;
  background: var(--card-bg);
  border: 1px solid var(--accent-color);
  color: var(--text-main);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
}

.pricing-grid {
  align-items: stretch;
}

.pricing-card {
  text-align: center;
  padding: 30px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.device-count {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
}

.amount {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
}

.currency {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
}

.period {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* Highlighted popular plan */
.popular {
  transform: scale(1.05);
  border-color: var(--accent-color);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.15);
  z-index: 10;
}

.popular:hover {
  transform: scale(1.08);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-color);
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .popular {
    transform: none;
  }
  .popular:hover {
    transform: translateY(-4px);
  }
}
</style>
