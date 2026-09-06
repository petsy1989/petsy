<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BrandLogo from './components/BrandLogo.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import AboutSection from './components/AboutSection.vue'
import QuoteBand from './components/QuoteBand.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import IntakeForm from './components/IntakeForm.vue'

const isIntakePage = ref(window.location.hash === '#/intake-form')

function updatePage() {
  isIntakePage.value = window.location.hash === '#/intake-form'
  window.scrollTo({ top: 0, behavior: 'auto' })
}

onMounted(() => window.addEventListener('hashchange', updatePage))
onBeforeUnmount(() => window.removeEventListener('hashchange', updatePage))
</script>

<template>
  <SiteHeader v-if="!isIntakePage" />
  <header v-else class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
      <a href="#top" aria-label="Petsy — back to top">
        <BrandLogo :height="52" />
      </a>
    </div>
  </header>

  <main v-if="!isIntakePage">
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <QuoteBand />
    <ServicesSection />
    <GallerySection />
    <ContactSection />
  </main>
  <main v-else>
    <IntakeForm />
  </main>

  <SiteFooter :minimal="isIntakePage" />
</template>
