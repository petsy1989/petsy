<script setup lang="ts">
import WhatsAppButton from './WhatsAppButton.vue'
import { hero } from '@/data/site'
import { asset } from '@/lib/asset'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-24">
    <!--
      Butter wash sitting behind the photo — echoes the arched cream shapes
      the brand system uses behind its subjects. Clipped by the section.
    -->
    <div
      class="pointer-events-none absolute -top-28 -right-24 h-[22rem] w-[22rem] rounded-full bg-butter/70 sm:-top-20 sm:-right-16 sm:h-[30rem] sm:w-[30rem] lg:-top-16 lg:right-[-8%] lg:h-[46rem] lg:w-[46rem]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-6xl px-5 sm:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <!-- Copy -->
        <div>
          <h1
            class="font-display text-[2.6rem] leading-[0.98] font-semibold sm:text-6xl sm:leading-[0.96] lg:text-[4.4rem]"
          >
            {{ hero.headline }}<br />
            <span class="text-moss italic">{{ hero.headlineAccent }}</span>
          </h1>

          <p class="mt-6 max-w-lg text-[1.06rem] leading-relaxed text-ink/70">
            {{ hero.body }}
          </p>

          <div class="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppButton size="lg" :label="hero.ctaPrimary" class="w-full sm:w-auto justify-center" />
            <a
              href="#services"
              class="inline-flex h-14 items-center gap-2 px-1 text-[1rem] font-medium text-ink underline decoration-ink/25 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              {{ hero.ctaSecondary }}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

        </div>

        <!-- Photo -->
        <div class="relative">
          <div class="photo-card aspect-[3/4] w-full">
            <img
              :src="asset('/images/hero-dog.jpg')"
              alt="A golden retriever in a forest-green bandana sitting against a warm cream backdrop"
              width="1200"
              height="1600"
              fetchpriority="high"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Small floating card, the kind of detail the brand system uses on its collateral. -->
          <div
            class="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3.5 shadow-[0_14px_36px_-18px_rgba(38,48,31,0.5)] sm:-left-6"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-full bg-butter"
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7.5h4l1.6-2h4.8l1.6 2H20v11H4v-11Z"
                  stroke="var(--color-forest)"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="12.8" r="3.1" stroke="var(--color-forest)" stroke-width="1.6" />
              </svg>
            </span>
            <span class="text-[0.86rem] leading-tight text-ink/75">
              Photo update<br />
              <span class="font-medium text-ink">after every visit</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
