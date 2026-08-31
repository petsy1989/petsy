<script setup lang="ts">
/**
 * Full-bleed photo band with a pull quote — the editorial breather
 * between the bio and the pricing. PLACEHOLDER quote.
 */
import { asset } from '@/lib/asset'
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <img
      :src="asset('/images/walker-band.jpg')"
      alt="A dog walker on a tree-lined park path with two dogs on leads in the afternoon sun"
      width="2048"
      height="1152"
      loading="lazy"
      class="h-[24rem] w-full object-cover object-center sm:h-[28rem] lg:h-[32rem]"
    />

    <!-- Green wash keeps the type readable and pulls the photo onto the palette. -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10"
      aria-hidden="true"
    />

    <div class="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
      <blockquote class="max-w-2xl">
        <p class="font-display text-[1.75rem] leading-snug text-cream sm:text-4xl">
          “She sends a photo from every walk. Three years in, our dog still loses his
          mind when he hears her at the door.”
        </p>
        <footer class="mt-4 text-[0.92rem] text-cream/75">
          Placeholder testimonial — swap for a real one
        </footer>
      </blockquote>
    </div>
  </section>
</template>
