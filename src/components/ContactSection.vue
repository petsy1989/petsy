<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from './SectionHeading.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import { business, contact, mailtoUrl, telUrl } from '@/data/site'
import { asset } from '@/lib/asset'

const intakeFormUrl = asset('/intake-form/')

const copiedField = ref<'email' | 'phone' | null>(null)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

async function copyValue(field: 'email' | 'phone', value: string, event: MouseEvent) {
  // Desktop only: copy instead of following the mailto/tel link.
  if (window.innerWidth < 640) return
  event.preventDefault()
  try {
    await navigator.clipboard.writeText(value)
    copiedField.value = field
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => (copiedField.value = null), 1600)
  } catch {
    window.location.href = field === 'email' ? mailtoUrl : telUrl
  }
}
</script>

<template>
  <section id="contact" class="bg-forest py-20 text-cream sm:py-28 lg:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading :eyebrow="contact.eyebrow" :heading="contact.heading" invert>
            <p class="mt-5 max-w-md text-[1.04rem] leading-relaxed text-cream/75">
              {{ contact.body }}
            </p>
          </SectionHeading>

          <WhatsAppButton size="lg" variant="cream" class="mt-9" desktop-label="Ask me anything" :desktop-href="mailtoUrl" />

          <p class="mt-4 text-[0.9rem] text-cream/60">{{ contact.responseNote }}</p>
        </div>

        <!-- Details -->
        <ul class="space-y-1 lg:pt-4">
          <li>
            <a
              :href="mailtoUrl"
              class="group flex items-center gap-4 border-b border-cream/15 py-5 transition-colors hover:border-butter"
              @click="copyValue('email', business.email, $event)"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-butter"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-cream transition-colors group-hover:text-ink">
                  <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.7" />
                  <path d="m4 8 8 5.5L20 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                </svg>
              </span>
              <span class="min-w-0">
                <span class="block text-[0.78rem] tracking-[0.12em] text-cream/55 uppercase">Email</span>
                <span class="block truncate text-[1.05rem] font-medium">{{ business.email }}</span>
              </span>
              <span
                class="ml-auto hidden shrink-0 items-center gap-1.5 text-[0.8rem] text-cream/0 transition-colors group-hover:text-cream/60 sm:flex"
                aria-hidden="true"
              >
                <template v-if="copiedField === 'email'">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-butter">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="text-butter">Copied</span>
                </template>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7" />
                  <path d="M5 15V6a2 2 0 0 1 2-2h9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                </svg>
              </span>
            </a>
          </li>

          <li>
            <a
              :href="telUrl"
              class="group flex items-center gap-4 border-b border-cream/15 py-5 transition-colors hover:border-butter"
              @click="copyValue('phone', business.phoneDisplay, $event)"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-butter"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-cream transition-colors group-hover:text-ink">
                  <path
                    d="M6.2 3.8h3l1.4 3.6-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 6a2 2 0 0 1 2-2.2Z"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span class="block text-[0.78rem] tracking-[0.12em] text-cream/55 uppercase">Phone</span>
                <span class="block text-[1.05rem] font-medium">{{ business.phoneDisplay }}</span>
              </span>
              <span
                class="ml-auto hidden shrink-0 items-center gap-1.5 text-[0.8rem] text-cream/0 transition-colors group-hover:text-cream/60 sm:flex"
                aria-hidden="true"
              >
                <template v-if="copiedField === 'phone'">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-butter">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="text-butter">Copied</span>
                </template>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7" />
                  <path d="M5 15V6a2 2 0 0 1 2-2h9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                </svg>
              </span>
            </a>
          </li>

          <li>
            <a
              :href="intakeFormUrl"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-4 border-b border-cream/15 py-5 transition-colors hover:border-butter"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-butter"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-cream transition-colors group-hover:text-ink">
                  <path d="M7 3.8h8.8L19 7v13.2H7V3.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                  <path d="M15 3.8V7h4M10 11h6M10 14.5h6M10 18h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                </svg>
              </span>
              <span>
                <span class="block text-[0.78rem] tracking-[0.12em] text-cream/55 uppercase">For new clients</span>
                <span class="block text-[1.05rem] font-medium">Intake form</span>
              </span>
              <span
                class="ml-auto shrink-0 text-cream/40 transition-colors group-hover:text-butter"
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 4h6v6M20 4l-9 9M19 13.5V19a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4 19V6.5A1.5 1.5 0 0 1 5.5 5H11"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </li>

          <li>
            <div class="flex items-center gap-4 border-b border-cream/15 py-5">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-cream">
                  <path
                    d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.7" />
                </svg>
              </span>
              <span>
                <span class="block text-[0.78rem] tracking-[0.12em] text-cream/55 uppercase">Service area</span>
                <span class="block text-[1.05rem] font-medium">{{ business.serviceArea }}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
