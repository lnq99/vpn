<script setup>
import { ref } from 'vue'
import whatsappQr from '../assets/contact_whatsapp_qr.jpg'
import telegramQr from '../assets/contact_telegram_qr.png'
import facebookQr from '../assets/contact_facebook_qr.png'

const activeQr = ref(null)

const toggleQr = (type) => {
  if (activeQr.value === type) {
    activeQr.value = null
  } else {
    activeQr.value = type
    if (qrMap[type].link) {
      window.open(qrMap[type].link, '_blank')
    }
  }
}

const closeQr = () => {
  activeQr.value = null
}

const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqCount = 6 // total number of hardcoded FAQ entries

const qrMap = {
  telegram: { 
    img: telegramQr, 
    text: 'Scan to connect on Telegram',
    nickname: '@lnq99',
    link: 'https://t.me/lnq99',
    btnLabel: 'Open Telegram'
  },
  whatsapp: { 
    img: whatsappQr, 
    text: 'Scan to connect on WhatsApp',
    link: null, // Just QR
    btnLabel: ''
  },
  facebook: { 
    img: facebookQr, 
    text: 'Scan to connect on Facebook',
    nickname: 'lenhuquang.dev',
    link: 'https://facebook.com/lenhuquang.dev',
    btnLabel: 'Open Facebook'
  }
}
</script>

<template>
  <footer id="footer" class="footer">
    <div class="container footer-content border-top">
      <div class="contact-section text-center">
        <h2>{{ $t('contacts.title') }}</h2>
        <p class="reach-out">{{ $t('contacts.reach_out') }}</p>
        
        <div class="contact-links-container">
          <div class="contact-links">
            <button @click="toggleQr('telegram')" class="btn btn-secondary contact-btn">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#24A1DE"><path d="M11.944 0C5.356 0 0 5.356 0 11.944c0 6.589 5.356 11.944 11.944 11.944c6.589 0 11.944-5.356 11.944-11.944C23.889 5.356 18.533 0 11.944 0zm5.82 8.358l-1.95 9.183c-.147.653-.53 0.814-1.077 0.506l-2.966-2.184l-1.431 1.378c-.158.158-.291.291-.597.291l.213-3.02l5.497-4.966c.239-.213-.052-.331-.371-.118l-6.796 4.279l-2.928-.915c-.636-.199-.649-.636.133-.941l11.442-4.409c.53-.199.992.118.804.892z"/></svg>
              </span> 
              Telegram
            </button>
            <button @click="toggleQr('facebook')" class="btn btn-secondary contact-btn">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2"><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87433H15.8294C14.3388 7.87433 13.8739 8.79935 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
              </span> 
              Facebook
            </button>
            <button @click="toggleQr('whatsapp')" class="btn btn-secondary contact-btn">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.436 2.503 1.163 3.467l-.763 2.788 2.857-.75c.937.587 2.051.932 3.245.932 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.767-5.767zm3.39 8.012c-.142.399-.817.769-1.208.824-.313.045-.726.061-1.182-.094-.287-.1-.639-.234-1.038-.396-1.701-.7-2.802-2.435-2.886-2.548-.085-.113-.689-.915-.689-1.746 0-.831.436-1.239.591-1.394.156-.154.338-.193.451-.193l.322.006c.113.003.264-.043.414.316.155.372.531 1.292.577 1.385.045.093.076.202.015.323-.061.121-.092.196-.184.301-.092.106-.192.235-.274.316-.092.091-.188.19-.081.374.107.183.475.784 1.02 1.269.702.624 1.294.819 1.478.911.183.091.291.076.4-.049.108-.125.465-.541.591-.726.125-.184.25-.154.422-.091.171.065 1.088.513 1.275.607.188.093.312.139.358.217.046.078.046.452-.097.852zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.017 21.337c-1.646 0-3.259-.459-4.641-1.327l-3.522.924.941-3.433c-.95-1.517-1.451-3.273-1.45-5.074.004-5.267 4.29-9.553 9.559-9.553 2.55 0 4.948.993 6.748 2.797 1.8 1.803 2.791 4.205 2.79 6.756-.004 5.268-4.29 9.554-9.56 9.554z"/></svg>
              </span> 
              WhatsApp
            </button>
          </div>

          <!-- Centered Dynamic QR Modal -->
          <div v-if="activeQr" class="qr-overlay" @click.self="closeQr">
            <div class="qr-modal animate-fade-in">
              <p class="qr-text">{{ qrMap[activeQr].text }}</p>
              <h3 v-if="qrMap[activeQr].nickname" class="qr-nickname">{{ qrMap[activeQr].nickname }}</h3>
              <div class="qr-wrapper">
                <img :src="qrMap[activeQr].img" :alt="activeQr + ' QR Code'" class="qr-img" />
              </div>
              <div class="qr-actions">
                <a v-if="activeQr && qrMap[activeQr].link" :href="qrMap[activeQr].link" target="_blank" class="btn btn-primary qr-btn">
                  {{ qrMap[activeQr].btnLabel }}
                </a>
                <button class="btn btn-secondary qr-btn" @click="closeQr">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section">
        <h3>{{ $t('faq.title') }}</h3>
        <div class="faq-list">
          <div v-for="i in faqCount" :key="i" class="faq-item" :class="{ 'is-open': activeFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ $t(`faq.q${i}`) }}</span>
              <span class="faq-icon" :class="{ 'rotate': activeFaq === i }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div class="faq-answer-wrapper" :class="{ 'is-open': activeFaq === i }">
              <div class="faq-answer-inner">
                <p class="faq-answer" v-html="$t(`faq.a${i}`)"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="brand">LNQ99 VPN &copy; {{ new Date().getFullYear() }}</div>
        <div class="disclaimer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1" style="vertical-align: text-bottom; opacity: 0.7;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          {{ $t('about.more') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-color-alt);
  padding-top: 60px;
}

.border-top {
  border-top: 1px solid var(--card-border);
  padding-top: 40px;
}

.contact-section {
  max-width: 800px;
  margin: 0 auto 60px auto;
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;
}

:deep(.flash-highlight) {
  animation: borderFlash 3s ease-in-out forwards;
}

@keyframes borderFlash {
  0% { 
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); 
    border: 1px solid var(--accent-color); 
  }
  30% { 
    box-shadow: 0 0 40px 10px rgba(6, 182, 212, 0.3); 
    border: 1px solid rgba(6, 182, 212, 0.8); 
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); 
    border: 1px solid transparent; 
  }
}

.reach-out {
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.contact-links-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 15;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--card-bg);
  cursor: pointer;
  z-index: 20;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0;
}

.qr-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-modal {
  background: var(--card-bg);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--accent-color);
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.2);
  width: 90%;
  max-width: 320px;
  text-align: center;
}

.qr-text {
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.qr-nickname {
  margin-bottom: 20px;
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.qr-wrapper {
  max-width: 200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: #fff;
  padding: 8px; /* Safe padding for QR scanning */
}

.qr-img {
  width: 100%;
  height: auto;
  display: block;
}

.qr-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

.qr-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-size: 1rem;
  border-radius: 10px;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FAQ Styles */
.faq-section {
  max-width: 700px;
  margin: 20px auto 60px auto;
  text-align: left;
}

.faq-section h3 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.6rem;
  color: var(--text-main);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--transition-speed);
}

.faq-item.is-open {
  border-color: var(--accent-color);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 18px 24px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-main);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease;
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.03);
}

.faq-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  color: var(--accent-color);
}

.faq-icon.rotate {
  transform: rotate(-180deg);
}

.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer-wrapper.is-open {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
}

.faq-answer {
  padding: 0 24px 20px 24px;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  white-space: pre-wrap;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--card-border);
  color: var(--text-muted);
  font-size: 0.9rem;
}

.brand {
  font-weight: 600;
  color: var(--text-main);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
