<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
import { business, navLinks } from '@/data/site'
import { asset } from '@/lib/asset'

withDefaults(defineProps<{ minimal?: boolean; logoHref?: string }>(), {
  logoHref: '#top',
})

const year = new Date().getFullYear()
const intakeFormUrl = asset('/intake-form/')
</script>

<template>
  <footer class="border-t border-ink/10 py-10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-start gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between"
    >
      <a :href="logoHref" aria-label="Petsy — back to top">
        <BrandLogo :height="38" />
      </a>

      <nav v-if="!minimal" aria-label="Footer">
        <ul class="flex flex-wrap items-center gap-x-7 gap-y-2">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="text-[0.92rem] text-ink/60 transition-colors hover:text-ink"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              :href="intakeFormUrl"
              target="_blank"
              rel="noopener"
              class="text-[0.92rem] text-ink/60 transition-colors hover:text-ink"
            >
              Intake form
            </a>
          </li>
        </ul>
      </nav>

      <p class="text-[0.85rem] text-ink/50">
        © {{ year }} {{ business.name }} · {{ business.serviceArea }}
      </p>
    </div>
  </footer>
</template>
