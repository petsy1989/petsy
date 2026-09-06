<script setup lang="ts">
import BrandLogo from './components/BrandLogo.vue'
import IntakeForm from './components/IntakeForm.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
      <a href="./" aria-label="Petsy — back to homepage">
        <BrandLogo :height="52" />
      </a>
    </div>
  </header>

  <main>
    <IntakeForm />
  </main>

  <SiteFooter minimal />
</template>
