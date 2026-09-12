<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BrandLogo from './BrandLogo.vue'
import LanguageSwitch from './LanguageSwitch.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import { content } from '@/i18n'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

// Stop the page scrolling underneath the open mobile menu.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="scrolled || menuOpen ? 'bg-cream/90 backdrop-blur-md' : 'bg-transparent'"
  >
    <div
      class="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
      :class="scrolled && !menuOpen ? 'border-b border-ink/8' : ''"
    >
      <a href="#top" class="shrink-0" aria-label="Petsy — back to top">
        <BrandLogo :height="52" />
      </a>

      <nav class="hidden items-center gap-9 md:flex" aria-label="Main">
        <a
          v-for="link in content.nav"
          :key="link.href"
          :href="link.href"
          class="text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-ink"
        >
          {{ link.label }}
        </a>
        <LanguageSwitch />
        <WhatsAppButton size="sm" :label="content.header.textMe" />
      </nav>

      <button
        type="button"
        class="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            v-if="!menuOpen"
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            v-else
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="menuOpen"
        id="mobile-nav"
        class="border-t border-ink/8 bg-cream px-5 pb-8 pt-6 md:hidden"
        aria-label="Main"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in content.nav" :key="link.href">
            <a
              :href="link.href"
              class="block py-3 font-display text-3xl text-ink"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <LanguageSwitch class="mt-5" />
        <WhatsAppButton class="mt-6 w-full justify-center" @click="menuOpen = false" />
      </nav>
    </Transition>
  </header>
</template>
