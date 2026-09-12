<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import { content } from '@/i18n'
</script>

<template>
  <section id="services" class="bg-shell py-20 sm:py-28 lg:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading :eyebrow="content.services.eyebrow" :heading="content.services.heading">
        <p class="mt-5 max-w-xl text-[1.04rem] leading-relaxed text-ink/70">
          {{ content.services.body }}
        </p>
      </SectionHeading>

      <!-- Plans -->
      <div
        class="mt-12 grid gap-5 lg:mt-16 lg:gap-7"
        :class="content.services.plans.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'"
      >
        <article
          v-for="plan in content.services.plans"
          :key="plan.name"
          class="relative flex flex-col rounded-[1.75rem] p-7 transition-transform duration-200 sm:p-8"
          :class="
            plan.featured
              ? 'bg-forest text-cream lg:-mt-4 lg:mb-4 shadow-[0_28px_60px_-30px_rgba(38,48,31,0.7)]'
              : 'bg-cream text-ink ring-1 ring-ink/8'
          "
        >
          <span
            v-if="plan.featured"
            class="absolute -top-3 right-7 rounded-full bg-butter px-3 py-1 text-[0.72rem] font-semibold tracking-[0.1em] text-ink uppercase"
          >
            {{ content.services.mostBooked }}
          </span>

          <h3 class="font-display text-2xl font-semibold">{{ plan.name }}</h3>

          <p class="mt-6 flex items-baseline gap-1.5">
            <span class="font-display text-5xl font-semibold tracking-tight">{{ plan.price }}</span>
            <span class="text-[0.95rem]" :class="plan.featured ? 'text-cream/65' : 'text-ink/55'">
              {{ plan.cadence }}
            </span>
          </p>

          <hr class="mt-7 border-0 border-t" :class="plan.featured ? 'border-cream/20' : 'border-ink/10'" />

          <ul class="mt-6 flex-1 space-y-3">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2.5 text-[0.95rem] leading-relaxed"
              :class="plan.featured ? 'text-cream/85' : 'text-ink/72'"
            >
              <svg
                class="mt-[5px] shrink-0"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m3.5 8.4 3 3 6-6.8"
                  :stroke="plan.featured ? 'var(--color-butter)' : 'var(--color-moss)'"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <WhatsAppButton
            class="mt-8 w-full justify-center"
            :variant="plan.featured ? 'cream' : 'solid'"
            :label="content.services.askAbout"
          />
        </article>
      </div>

      <!-- One-offs -->
      <div class="mt-14 rounded-[1.75rem] bg-butter p-7 sm:p-9 lg:mt-16">
        <h3 class="font-display text-2xl font-semibold text-ink">
          {{ content.services.alaCarteHeading }}
        </h3>

        <ul class="mt-6 grid gap-x-10 sm:grid-cols-2">
          <li
            v-for="item in content.services.alaCarte"
            :key="item.name"
            class="flex items-baseline justify-between gap-4 border-b border-ink/12 py-3.5"
          >
            <span>
              <span class="font-medium text-ink">{{ item.name }}</span>
              <span class="block text-[0.88rem] text-ink/60">{{ item.note }}</span>
            </span>
            <span class="font-display text-xl font-semibold whitespace-nowrap text-ink">
              {{ item.price }}
            </span>
          </li>
        </ul>

        <p class="mt-6 max-w-2xl text-[0.88rem] leading-relaxed text-ink/60">
          {{ content.services.footnote }}
        </p>
      </div>
    </div>
  </section>
</template>
