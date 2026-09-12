<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { content } from '@/i18n'
</script>

<template>
  <section id="gallery" class="py-20 sm:py-28 lg:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading :eyebrow="content.gallery.eyebrow" :heading="content.gallery.heading" :show-eyebrow="false" />

      <!--
        Even ratios with a single alternating drop — reads like a contact
        sheet pinned up slightly off-square, not a ragged stock-photo strip.
      -->
      <div class="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        <figure
          v-for="(image, i) in content.gallery.images"
          :key="image.src"
          class="photo-card"
          :class="[image.ratio, i % 2 === 1 ? 'mt-6 lg:mt-10' : '']"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
