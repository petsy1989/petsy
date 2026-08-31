<script setup lang="ts">
defineProps<{
  eyebrow: string
  heading: string
  /** Renders light-on-dark for the green panels. */
  invert?: boolean
}>()
</script>

<template>
  <div>
    <p
      class="flex items-center gap-2.5 text-[0.8rem] font-medium tracking-[0.14em] uppercase"
      :class="invert ? 'text-butter/80' : 'text-moss'"
    >
      <span
        class="h-px w-7"
        :class="invert ? 'bg-butter/45' : 'bg-moss/40'"
        aria-hidden="true"
      />
      {{ eyebrow }}
    </p>
    <h2
      class="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.05] font-semibold sm:text-5xl"
      :class="invert ? 'text-cream' : 'text-ink'"
    >
      {{ heading }}
    </h2>
    <slot />
  </div>
</template>
