/**
 * Shared, non-translatable business data.
 * All page copy lives in src/i18n/locales/ instead.
 */

import { computed } from 'vue'
import { content } from '@/i18n'

export const business = {
  name: 'Petsy',
  owner: 'Paige',
  serviceArea: 'Calgary, AB',
  email: 'acomecome@gmail.com',
  phoneDisplay: '403 763 3364',
  /** E.164, no symbols — used for tel: and wa.me links. */
  phoneE164: '14037633364',
} as const

/** Pre-filled WhatsApp message, localized per active locale. */
export const whatsappUrl = computed(
  () =>
    `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(content.value.whatsappMessage)}`,
)

export const telUrl = `tel:+${business.phoneE164}`
export const mailtoUrl = `mailto:${business.email}?subject=${encodeURIComponent(
  'Enquiry from the Petsy website',
)}`
