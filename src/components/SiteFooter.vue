<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
import { business } from '@/data/site'
import { content, localizePath } from '@/i18n'

withDefaults(defineProps<{ minimal?: boolean; logoHref?: string }>(), {
  logoHref: '#top',
})

const year = new Date().getFullYear()
const intakeFormUrl = localizePath('/intake-form/')
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
          <li v-for="link in content.nav" :key="link.href">
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
              {{ content.footer.intakeForm }}
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
