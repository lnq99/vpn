<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Import all images
// iOS
import ios_01 from '../assets/guides/ios_01.jpg'
import ios_02 from '../assets/guides/ios_02.jpg'
import ios_04 from '../assets/guides/ios_04.jpg'
import ios_05 from '../assets/guides/ios_05.jpg'
import ios_07 from '../assets/guides/ios_07.jpg'
import ios_08 from '../assets/guides/ios_08.jpg'

// Android
import android_03 from '../assets/guides/android_03.png'
import android_04 from '../assets/guides/android_04.png'
import android_07 from '../assets/guides/android_07.png'
import android_09 from '../assets/guides/android_09.png'

// Windows
import windows_1 from '../assets/guides/windows_1.jpg'
import windows_2 from '../assets/guides/windows_2.jpg'
import windows_3 from '../assets/guides/windows_3.jpg'
import windows_4 from '../assets/guides/windows_4.jpg'

// macOS
import macos_1 from '../assets/guides/macos_1.jpg'
import macos_2 from '../assets/guides/macos_2.jpg'
import macos_3 from '../assets/guides/macos_3.jpg'

const { tm } = useI18n()

const activeTab = ref('ios')
const isModalOpen = ref(false)
const activeGuide = ref(null)

const tabs = [
  { id: 'ios', label: 'iOS', link: 'https://apps.apple.com/ru/app/amneziawg/id6478942365', guideMode: true },
  { id: 'android', label: 'Android', link: 'https://play.google.com/store/apps/details?id=org.amnezia.awg', guideMode: true },
  { id: 'macos', label: 'macOS', link: 'https://apps.apple.com/ru/app/amneziawg/id6478942365', guideMode: true },
  { id: 'windows', label: 'Windows', link: 'https://github.com/amnezia-vpn/amneziawg-windows-client/releases', guideMode: true },
  { id: 'routers', label: 'Routers', link: '', guideMode: true }
]

// Mapping: guideAssets[platform][stepIndex] = [image1, image2, ...]
const guideAssets = {
  ios: {
    1: [ios_01, ios_02],
    2: [ios_04, ios_05], // ios_03 removed
    3: [ios_07],
    4: [ios_08]
  },
  android: {
    2: [android_03, android_04],
    3: [android_07],
    4: [android_09]
  },
  windows: {
    1: [windows_1],
    2: [windows_2],
    3: [windows_3, windows_4]
  },
  macos: {
    1: [macos_1],
    2: [macos_2, macos_3]
  }
}

const openGallery = (tabId) => {
  activeGuide.value = tabId
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  activeGuide.value = null
}

const currentSteps = computed(() => {
  if (!activeGuide.value || activeGuide.value === 'routers') return []
  return tm(`setup.steps.${activeGuide.value}`) || []
})
</script>

<template>
  <section id="setup" class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2>{{ $t('setup.title') }}</h2>
      </div>

      <div class="setup-container glass-panel">
        <div class="tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="tab-content">
          <div v-for="tab in tabs" :key="tab.id">
            <div v-show="activeTab === tab.id" class="animate-fade-in content-box">
              <h3 class="tab-title">{{ tab.label }}</h3>
              
              <div v-if="tab.id === 'routers'" class="notice">
                <p>⚠️ {{ $t('setup.router_note') }}</p>
              </div>

              <div class="actions">
                <a v-if="tab.link" :href="tab.link" target="_blank" class="btn btn-primary">
                  {{ $t('setup.download') }}
                </a>
                <button v-if="tab.guideMode" @click="openGallery(tab.id)" class="btn btn-secondary">
                  {{ $t('setup.guide') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Guide Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content glass-panel no-padding">
        <div class="modal-header">
          <h3>{{ $t('setup.guide') }} - {{ tabs.find(t => t.id === activeGuide)?.label }}</h3>
          <button class="close-btn-fancy" @click="closeModal">&times;</button>
        </div>
        
        <div class="modal-body">
          <div v-if="activeGuide === 'routers'" class="coming-soon-router">
            <p>{{ $t('setup.router_note') }}</p>
            <div class="placeholder-media video large mt-4">
              ▶️ {{ $t('setup.gallery_video') }} 
              <br><small>(Coming Soon)</small>
            </div>
          </div>

          <div v-else>
            <!-- Video Placeholder -->
            <!-- <div class="video-section">
              <div class="placeholder-media video">
                <div class="play-icon">▶</div>
                <p>{{ $t('setup.gallery_video') }}</p>
                <span class="badge">Coming Soon</span>
              </div>
            </div> -->

            <div class="steps-list">
              <div v-for="(step, index) in currentSteps" :key="index" class="step-item">
                <div class="step-header">
                  <div class="step-number">{{ index + 1 }}</div>
                  <div class="step-content">
                    <p class="step-text" v-for="(line, lIdx) in step.split('\n')" :key="lIdx">
                      <template v-if="line.trim().startsWith('http')">
                        <a :href="line.trim()" target="_blank" class="step-link">{{ line.trim() }}</a>
                      </template>
                      <template v-else>
                        {{ line }}
                      </template>
                    </p>
                  </div>
                </div>
                
                <div v-if="guideAssets[activeGuide]?.[index]" class="step-images-wrapper">
                  <div 
                    class="images-container" 
                    :class="{ 
                      'horizontal-scroll': activeGuide === 'ios' || activeGuide === 'android',
                      'stack-vertical': activeGuide === 'windows' || activeGuide === 'macos' 
                    }"
                  >
                    <img 
                      v-for="(img, idx) in guideAssets[activeGuide][index]" 
                      :key="idx" 
                      :src="img" 
                      :alt="'Step ' + (index + 1) + ' Image ' + (idx + 1)" 
                      class="step-img"
                      :class="{ 
                        'mobile-img': activeGuide === 'ios' || activeGuide === 'android',
                        'desktop-img': activeGuide === 'windows' || activeGuide === 'macos' 
                      }"
                    />
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

<style scoped>
.setup-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}

.tabs {
  display: flex;
  background: rgba(0,0,0,0.1);
  border-bottom: 1px solid var(--card-border);
  overflow-x: auto;
}

.tab-btn {
  flex: 1;
  padding: 16px 20px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-speed);
  white-space: nowrap;
}

.tab-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
  color: var(--accent-color);
  background: var(--card-bg);
  box-shadow: inset 0 -2px 0 var(--accent-color);
}

.tab-content {
  padding: 40px;
  min-height: 200px;
}

.tab-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.notice {
  background: rgba(234, 179, 8, 0.1);
  border-left: 4px solid #eab308;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  color: var(--text-main);
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  border: 1px solid var(--card-border);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.no-padding {
  padding: 0 !important;
}

.modal-header {
  padding: 20px 30px;
  border-bottom: 1px solid var(--card-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.02);
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--accent-color);
}

.modal-body {
  padding: 30px;
  overflow-y: auto;
  background: radial-gradient(circle at top right, rgba(6, 182, 212, 0.05), transparent);
}

/* Scrollbar Style */
.modal-body::-webkit-scrollbar {
  width: 6px;
}
.modal-body::-webkit-scrollbar-track {
  background: transparent;
}
.modal-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

.close-btn-fancy {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--card-border);
  color: var(--text-muted);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s;
}

.close-btn-fancy:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border-color: #ef4444;
}

.video-section {
  margin-bottom: 40px;
}

.placeholder-media {
  background: #1e293b;
  border: 2px dashed var(--card-border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.video {
  aspect-ratio: 16/9;
  width: 100%;
}

.video.large {
  max-width: 600px;
  margin: 0 auto;
}

.play-icon {
  width: 64px;
  height: 64px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 15px;
  box-shadow: 0 0 20px var(--accent-light);
  filter: grayscale(0.2);
  opacity: 0.9;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--card-border);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.step-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding-bottom: 25px;
}

.step-item:last-child {
  border-bottom: none;
}

.step-header {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.step-number {
  width: 28px;
  height: 28px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 0.9rem;
  margin-top: 2px;
}

.step-text {
  margin: 0;
  font-weight: 500;
  color: var(--text-main);
  line-height: 1.5;
  font-size: 1.05rem;
}

.step-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.step-link {
  color: #3b82f6;
  text-decoration: underline;
  word-break: break-all;
  font-size: 0.95rem;
  font-weight: 400;
  display: block;
  margin-top: -2px;
}

.step-link:hover {
  color: #60a5fa;
}

.step-images-wrapper {
  padding-left: 43px;
}

.images-container {
  display: flex;
  gap: 12px;
}

.horizontal-scroll {
  overflow-x: auto;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
}

.horizontal-scroll::-webkit-scrollbar {
  height: 4px;
}
.horizontal-scroll::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
}
.horizontal-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.stack-vertical {
  flex-direction: column;
}

.step-img {
  border-radius: 12px;
  border: 1px solid var(--card-border);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  display: block;
}

.mobile-img {
  width: 280px;
  flex-shrink: 0;
}

.desktop-img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .modal-body { padding: 20px; }
  .step-text { font-size: 1rem; }
  .step-images-wrapper { padding-left: 0; }
  .mobile-img { width: 240px; }
  .tabs { flex-direction: row; }
}
</style>
