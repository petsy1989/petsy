<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { whatsappUrl } from '@/data/site'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const props = withDefaults(
  defineProps<{
    label?: string
    /** Label for the desktop variant, which links to the contact section. */
    desktopLabel?: string
    /** Override the desktop link target (defaults to the contact section). */
    desktopHref?: string
    size?: 'sm' | 'md' | 'lg'
    /** Inverted styling for use on the dark green panels. */
    variant?: 'solid' | 'cream'
  }>(),
  { label: 'Text me on WhatsApp', desktopLabel: 'Contact me', desktopHref: '#contact', size: 'md', variant: 'solid' },
)

const sizeClasses = computed(
  () =>
    ({
      sm: 'h-10 px-4 text-[0.9rem] gap-1.5',
      md: 'h-13 px-6 text-[1rem] gap-2',
      lg: 'h-14 px-7 text-[1.05rem] gap-2.5',
    })[props.size],
)

const variantClasses = computed(() =>
  props.variant === 'cream'
    ? 'bg-butter text-ink hover:bg-butter-soft'
    : 'bg-forest text-cream hover:bg-ink',
)

const iconSize = computed(() => (props.size === 'sm' ? 17 : 20))
</script>

<template>
  <!-- Mobile: WhatsApp deep link (most phone users have the app). -->
  <a
    v-bind="attrs"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:hidden"
    :class="[sizeClasses, variantClasses]"
  >
    <svg
      :width="iconSize"
      :height="iconSize"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      class="shrink-0"
    >
      <path
        d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.17 8.17 0 0 1-1.25-4.37c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z"
      />
    </svg>
    <span>{{ label }}</span>
  </a>

  <!-- Desktop: scroll to the contact section instead. -->
  <a
    v-bind="attrs"
    :href="desktopHref"
    class="hidden items-center rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
    :class="[sizeClasses, variantClasses]"
  >
    <span>{{ desktopLabel }}</span>
  </a>
</template>
