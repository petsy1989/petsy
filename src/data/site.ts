/**
 * ─────────────────────────────────────────────────────────────
 *  ALL PAGE CONTENT LIVES HERE.
 *
 *  Everything marked PLACEHOLDER is invented filler — swap it for
 *  Paige's real copy, qualifications and rates and the whole page
 *  updates. No component edits needed.
 * ─────────────────────────────────────────────────────────────
 */

import { asset } from '@/lib/asset'

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  /** Short name of the plan. */
  name: string
  /** One-line description of who it suits. */
  tagline: string
  price: string
  /** e.g. "/month" — rendered smaller next to the price. */
  cadence: string
  features: string[]
  /** Highlights this plan as the recommended one. */
  featured?: boolean
}

export interface AlaCarteItem {
  name: string
  price: string
  note: string
}

export interface Qualification {
  label: string
  detail: string
}

export interface GalleryImage {
  src: string
  alt: string
  /** Tailwind aspect ratio utility, lets the grid stay uneven and editorial. */
  ratio: string
}

export interface AboutContent {
  eyebrow: string
  heading: string
  paragraphs: string[]
  qualifications: Qualification[]
  portrait: string
  portraitAlt: string
}

export interface ServicesContent {
  eyebrow: string
  heading: string
  body: string
  plans: Service[]
  alaCarteHeading: string
  alaCarte: AlaCarteItem[]
  footnote: string
}

export interface GalleryContent {
  eyebrow: string
  heading: string
  images: GalleryImage[]
}

/* ── Business ────────────────────────────────────────────────── */

export const business = {
  name: 'Petsy',
  owner: 'Paige',
  /** PLACEHOLDER — confirm service area. */
  serviceArea: 'Calgary, AB',
  email: 'acomecome@gmail.com',
  phoneDisplay: '403 763 3364',
  /** E.164, no symbols — used for tel: and wa.me links. */
  phoneE164: '14037633364',
} as const

/** Pre-filled WhatsApp message so the conversation starts warm. */
const whatsappMessage =
  "Hi Paige! I found Petsy online and I'd love to ask about care for my dog."

export const whatsappUrl = `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(
  whatsappMessage,
)}`

export const telUrl = `tel:+${business.phoneE164}`
export const mailtoUrl = `mailto:${business.email}?subject=${encodeURIComponent(
  'Enquiry from the Petsy website',
)}`

/* ── Navigation ──────────────────────────────────────────────── */

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* ── Hero — PLACEHOLDER copy ─────────────────────────────────── */

export const hero = {
  eyebrow: 'Dog walking & pet care in ' + business.serviceArea,
  headline: 'Your dog.',
  headlineAccent: 'My favourite job.',
  body: 'Neighbourhood walks, drop-in visits and overnight stays — run by one person who actually knows your dog. Photo updates after every single visit, so you always know how the day went.',
  ctaPrimary: 'Text me on WhatsApp',
  ctaSecondary: 'See rates',
  /** Small trust markers under the buttons. PLACEHOLDER. */
  proofPoints: ['Fully insured & bonded', 'Pet first-aid certified', 'Small groups only'],
}

/** Words that scroll across the green strip under the hero. PLACEHOLDER. */
export const marqueeWords: string[] = [
  'Daily walks',
  'Drop-in visits',
  'Overnight care',
  'Puppy visits',
  'Photo updates',
  'Solo & small-group',
  'Medication support',
  'Senior dogs welcome',
]

/* ── About — PLACEHOLDER copy ────────────────────────────────── */

export const about: AboutContent = {
  eyebrow: 'About me',
  heading: "Hi, I'm Paige.",
  /** Replace with Paige's real bio — two or three short paragraphs reads best. */
  paragraphs: [
    "I've been around dogs my whole life, and looking after them has been my full-time job for the better part of a decade. Petsy started because I kept hearing the same thing from friends: they trusted me with their dogs in a way they never quite trusted an app.",
    "I keep my client list deliberately small. That means your dog gets a familiar face at the door, the same routine every time, and someone who notices when something's a little off — a sore paw, a skipped breakfast, a quieter-than-usual afternoon.",
    'When I’m not out walking, you’ll find me at the off-leash park with my own scruffy rescue, Juno, who has strong opinions about tennis balls.',
  ],
  /** PLACEHOLDER — swap for Paige's real credentials. */
  qualifications: [
    {
      label: 'Pet First Aid & CPR',
      detail: 'Certified through Walks ’N’ Wags, renewed 2025',
    },
    {
      label: 'Fully insured & bonded',
      detail: 'Commercial liability coverage on every visit',
    },
    {
      label: 'Police information check',
      detail: 'Vulnerable sector check on file, available on request',
    },
    {
      label: '9 years professional experience',
      detail: 'Over 4,000 walks and 300+ overnight stays',
    },
  ],
  /**
   * PLACEHOLDER portrait — replace with Paige's real photo.
   * Drop the file into /public/images/ and update this path.
   */
  portrait: asset('/images/paige-portrait.jpg'),
  portraitAlt: 'Paige, owner of Petsy, out walking with a group of dogs',
}

/* ── Services & rates — PLACEHOLDER pricing ──────────────────── */

export const services: ServicesContent = {
  eyebrow: 'Services & rates',
  heading: 'Pick a rhythm that fits your week.',
  body: 'Monthly plans mean a guaranteed spot in my schedule and a routine your dog can count on. Cancel or pause any time with a week’s notice.',
  plans: [
    {
      name: 'The Stroll',
      tagline: 'For dogs who just need a mid-week stretch.',
      price: '$120',
      cadence: '/month',
      features: [
        '4 walks per month',
        '30 minutes per walk',
        'Small group of 3 dogs max',
        'Photo update after each walk',
        'Fresh water & towel-off on return',
      ],
    },
    {
      name: 'The Regular',
      tagline: 'The one most of my dogs are on.',
      price: '$320',
      cadence: '/month',
      featured: true,
      features: [
        '12 walks per month',
        '45 minutes per walk',
        'Solo or paired walks',
        'Photo & written update every visit',
        'Medication & feeding support',
        'Priority on holiday bookings',
      ],
    },
    {
      name: 'The Everyday',
      tagline: 'Full weekday cover for working households.',
      price: '$580',
      cadence: '/month',
      features: [
        '20 walks per month',
        '60 minutes per walk',
        'Solo walks as standard',
        'Photo & written update every visit',
        'Plant watering & mail while you travel',
        'Two free drop-in visits each month',
      ],
    },
  ],
  alaCarteHeading: 'One-offs & extras',
  alaCarte: [
    { name: 'Single walk', price: '$32', note: '45 minutes, no plan needed' },
    { name: 'Drop-in visit', price: '$24', note: '20 minutes — feed, water, garden break' },
    { name: 'Overnight stay', price: '$85', note: 'In your home, 12 hours' },
    { name: 'Puppy visit', price: '$30', note: 'Short, frequent visits for under-6-months' },
  ],
  footnote:
    'Rates shown include GST. Holiday bookings (Dec 24 – Jan 1) are charged at 1.5×. First meet-and-greet is always free.',
}

/* ── Gallery ─────────────────────────────────────────────────── */

export const gallery: GalleryContent = {
  eyebrow: 'The regulars',
  heading: 'A few of my favourite clients.',
  images: [
    { src: asset('/images/dog-pug.jpg'), alt: 'A fawn pug wearing a sage green bandana', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-corgi.jpg'), alt: 'A corgi trotting across the grass in a park', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-rest.jpg'), alt: 'A scruffy terrier curled up asleep on a linen sofa', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-collie.jpg'), alt: 'A border collie leaping to catch a ball mid-air', ratio: 'aspect-[4/5]' },
  ],
}

/* ── Contact ─────────────────────────────────────────────────── */

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let’s meet your dog.',
  body: 'The first step is always a free meet-and-greet — I come to you, we walk around the block, and your dog decides whether I make the cut.',
  responseNote: 'I usually reply within a couple of hours, Mon–Sat.',
}
