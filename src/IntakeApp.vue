<script setup lang="ts">
import BrandLogo from './components/BrandLogo.vue'
import IntakeForm from './components/IntakeForm.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
import SiteFooter from './components/SiteFooter.vue'
import { localizePath } from '@/i18n'

const homeUrl = localizePath('/')
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8 sm:py-8">
      <a :href="homeUrl" aria-label="Petsy — back to homepage">
        <BrandLogo :height="52" />
      </a>
      <LanguageSwitch />
    </div>
  </header>

  <main>
    <IntakeForm />
  </main>

  <SiteFooter minimal :logo-href="homeUrl" />
</template>
