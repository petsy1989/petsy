<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { content } from '@/i18n'
import { asset } from '@/lib/asset'
</script>

<template>
  <section id="about" class="py-20 sm:py-28 lg:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <!-- Portrait — PLACEHOLDER, swap for Paige's real photo -->
        <div class="relative lg:sticky lg:top-28 lg:self-start">
          <div class="photo-card aspect-[4/5] w-full max-w-sm lg:max-w-none">
            <img
              :src="asset('/images/paige-portrait.jpg')"
              :alt="content.about.portraitAlt"
              width="1200"
              height="1500"
              loading="lazy"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Hand-drawn-feeling accent, echoing the line illustrations in the brand system -->
          <svg
            class="absolute -top-6 -right-2 hidden h-16 w-16 text-sage sm:block lg:-right-6"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 46c6-14 16-24 30-30M36 16l2-9M40 18l7-5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <!-- Bio -->
        <div>
          <SectionHeading :eyebrow="content.about.eyebrow" :heading="content.about.heading" :show-eyebrow="false" />

          <div class="mt-7 space-y-5 text-[1.04rem] leading-relaxed text-ink/72">
            <p v-for="(para, i) in content.about.paragraphs" :key="i">{{ para }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
