/**
 * ─────────────────────────────────────────────────────────────
 *  ALL PAGE CONTENT LIVES HERE.
 *
 *  Everything marked PLACEHOLDER is invented filler — swap it for
 *  Paige's real copy and rates and the whole page
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
  portrait: string
  portraitAlt: string
}

export interface Testimonial {
  quote: string
  author: string
  source: string
  image: string
  imageAlt: string
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
  { label: 'Services & rates', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* ── Hero — PLACEHOLDER copy ─────────────────────────────────── */

export const hero = {
  eyebrow: 'Dog walking & pet care in ' + business.serviceArea,
  headline: 'Come as a client.',
  headlineAccent: 'Leave as family.',
  body: 'A warm, personal place for daycare and boarding, where your dog gets the attention, patience, and love they deserve. With 5 years of hands-on experience, I’ve learned that every dog is different and that’s what makes them special.',
  ctaPrimary: 'Text me on WhatsApp',
  ctaSecondary: 'See rates',
}

/** Words that scroll across the green strip under the hero. PLACEHOLDER. */
export const marqueeWords: string[] = [
  'Daily walks',
  'Drop in visits',
  'Overnight care',
  'Puppy visits',
  'Photo updates',
  'Solo & small group',
  'Medication support',
  'Senior dogs welcome',
]

/* ── About — PLACEHOLDER copy ────────────────────────────────── */

export const about: AboutContent = {
  eyebrow: 'About me',
  heading: "Hi, I'm Paige.",
  paragraphs: [
    "Hi, welcome to Petsy! Fun fact: my name is pronounced like ‘pets’! You can call me Paige. 🐾",
    "I’m a lifelong animal lover, and caring for animals is my passion. With experience caring for dogs in both Taiwan and Calgary, I’ve looked after dogs of all sizes, ages, and personalities in daycare, boarding facilities, and animal shelters.",
    'At Petsy, every dog is treated with patience, care, and plenty of love. My goal is to make your dog feel safe, comfortable, and right at home while they’re with me.',
  ],
  /**
   * PLACEHOLDER portrait — replace with Paige's real photo.
   * Drop the file into /public/images/ and update this path.
   */
  portrait: asset('/images/paige-portrait.jpg'),
  portraitAlt: 'Paige, owner of Petsy, out walking with a group of dogs',
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Paige was amazing with Oliver. She kept him calm and always sent updates. We’ll definitely book with her again.',
    author: 'Rodolfo F.',
    source: 'Rover',
    image: asset('/images/testimonial-play.png'),
    imageAlt: 'Two happy dogs playing in a sunny backyard',
  },
  {
    quote:
      'Paige is a great dog walker. She is always so excited to see my girls, and they’re so happy to see her too.',
    author: 'Bri K.',
    source: 'Rover',
    image: asset('/images/testimonial-rest.png'),
    imageAlt: 'A relaxed dog resting on a linen bed by a sunny window',
  },
  {
    quote:
      'Ollie really enjoyed his time with Pei-Tze!!! He came home happy, relaxed, and clearly had a wonderful day.',
    author: 'Rosana B.',
    source: 'Rover',
    image: asset('/images/testimonial-walk.png'),
    imageAlt: 'A happy dog walking on a tree lined park path',
  },
]

/* ── Services & rates — PLACEHOLDER pricing ──────────────────── */

export const services: ServicesContent = {
  eyebrow: 'Services & rates',
  heading: 'Daycare, boarding & a few thoughtful extras.',
  body: 'Everything your dog needs for a happy, comfortable stay, with plenty of love and attention along the way.',
  plans: [
    {
      name: 'Daycare',
      tagline: 'Flexible daytime care for dogs who need exercise, enrichment and a routine they can trust.',
      price: '$27',
      cadence: 'half day (up to 6 hrs)',
      features: [
        'Full day option: $48 (> 6 hrs)',
        'Medication & feeding support',
        'Photos & videos update',
        'Nature stroll',
        'Rooftop outdoor terrace fun',
      ],
    },
    {
      name: 'Boarding',
      tagline: 'Overnight stays with attentive care, flexibility and plenty of one to one time.',
      price: '$60',
      cadence: 'per 24 hrs',
      featured: true,
      features: [
        'Additional hours: $5/hr',
        'Flexible check in & check out by appointment',
        'Medication & feeding support',
        'Photos & videos update',
        'Nature stroll',
        'Rooftop outdoor terrace fun',
      ],
    },
  ],
  alaCarteHeading: 'Extras',
  alaCarte: [
    {
      name: 'Teeth brushing',
      price: '$10',
      note: 'Gentle brushing for dogs who need a little extra help keeping their teeth clean.',
    },
    {
      name: 'Brush out',
      price: '$10',
      note: 'Quick brush out for light shedding. Heavy shedding or matting starts at $15.',
    },
  ],
  footnote:
    'Daycare pricing is based on half day and full day options. Boarding is charged at $60 per 24 hours, with additional hours at $5/hr. First meet and greet is always complimentary.',
}

/* ── Gallery ─────────────────────────────────────────────────── */

export const gallery: GalleryContent = {
  eyebrow: 'The regulars',
  heading: 'A little peek at life at Petsy. 🐾',
  images: [
    { src: asset('/images/dog-pug.jpg'), alt: 'A fawn pug wearing a sage green bandana', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-corgi.jpg'), alt: 'A corgi trotting across the grass in a park', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-rest.jpg'), alt: 'A scruffy terrier curled up asleep on a linen sofa', ratio: 'aspect-[4/5]' },
    { src: asset('/images/dog-collie.jpg'), alt: 'A border collie leaping to catch a ball mid air', ratio: 'aspect-[4/5]' },
  ],
}

/* ── Contact ─────────────────────────────────────────────────── */

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let’s meet your dog.',
  body: 'Bring your dog to explore their new home. The first hour at Petsy is on me for them to get comfortable and have fun. 🐾',
  responseNote: 'I usually reply within a couple of hours, Monday to Sunday.',
}
