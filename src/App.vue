<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import AboutSection from './components/AboutSection.vue'
import QuoteBand from './components/QuoteBand.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <main>
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <QuoteBand />
    <ServicesSection />
    <GallerySection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
