/**
 * English (default) content. The shape of this object is the contract
 * every other locale must satisfy.
 */

import { asset } from '@/lib/asset'

export interface ServicePlan {
  name: string
  tagline: string
  price: string
  cadence: string
  featured?: boolean
  features: string[]
}

const content = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services & rates', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],

  header: {
    textMe: 'Text me',
  },

  hero: {
    eyebrow: 'Dog walking & pet care in Calgary, AB',
    headline: 'Come as a client.',
    headlineAccent: 'Leave as family.',
    body: 'A warm, personal place for daycare and boarding, where your dog gets the attention, patience, and love they deserve. With 5 years of hands-on experience, I’ve learned that every dog is different and that’s what makes them special.',
    ctaPrimary: 'Text me on WhatsApp',
    ctaSecondary: 'See rates',
    imageAlt: 'A golden retriever in a forest-green bandana sitting against a warm cream backdrop',
    photoCardTop: 'Photo update',
    photoCardBottom: 'after every visit',
  },

  marquee: [
    'Daily walks',
    'Drop in visits',
    'Overnight care',
    'Puppy visits',
    'Photo updates',
    'Solo & small group',
    'Medication support',
    'Senior dogs welcome',
  ],

  about: {
    eyebrow: 'About me',
    heading: "Hi, I'm Paige.",
    paragraphs: [
      'Hi, welcome to Petsy! Fun fact: my name is pronounced like ‘pets’! You can call me Paige. 🐾',
      'I’m a lifelong animal lover, and caring for animals is my passion. With experience caring for dogs in both Taiwan and Calgary, I’ve looked after dogs of all sizes, ages, and personalities in daycare, boarding facilities, and animal shelters.',
      'At Petsy, every dog is treated with patience, care, and plenty of love. My goal is to make your dog feel safe, comfortable, and right at home while they’re with me.',
    ],
    portraitAlt: 'Paige, owner of Petsy, out walking with a group of dogs',
  },

  testimonials: [
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
  ],

  services: {
    eyebrow: 'Services & rates',
    heading: 'Daycare, boarding & a few thoughtful extras.',
    body: 'Everything your dog needs for a happy, comfortable stay, with plenty of love and attention along the way.',
    mostBooked: 'Most booked',
    askAbout: 'Ask about this plan',
    plans: ([
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
    ] as ServicePlan[]),
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
  },

  gallery: {
    eyebrow: 'The regulars',
    heading: 'A little peek at life at Petsy. 🐾',
    images: [
      { src: asset('/images/dog-pug.jpg'), alt: 'A fawn pug wearing a sage green bandana', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-corgi.jpg'), alt: 'A corgi trotting across the grass in a park', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-rest.jpg'), alt: 'A scruffy terrier curled up asleep on a linen sofa', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-collie.jpg'), alt: 'A border collie leaping to catch a ball mid air', ratio: 'aspect-[4/5]' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Let’s meet your dog.',
    body: 'Bring your dog to explore their new home. The first hour at Petsy is on me for them to get comfortable and have fun. 🐾',
    responseNote: 'I usually reply within a couple of hours, Monday to Sunday.',
    askAnything: 'Ask me anything',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    newClientsLabel: 'For new clients',
    intakeFormLabel: 'Intake form',
    serviceAreaLabel: 'Service area',
    copied: 'Copied',
  },

  footer: {
    intakeForm: 'Intake form',
  },

  whatsappMessage:
    "Hi Paige! I found Petsy online and I'd love to ask about care for my dog.",

  intake: {
    eyebrow: 'Intake form',
    heading: 'Tell me about your dog.',
    intro: 'Share a little about your dog so I can understand their routines, personality, and what helps them feel comfortable.',
    imageAlt: 'Paige spending time with dogs',
    thankYou: 'Thank you!',
    submittedBody: 'Your intake form has been sent. Paige will be in touch soon.',
    sendAnother: 'Send another intake form',
    sections: {
      yourDetails: 'Your details',
      aboutDog: 'About your dog',
      vetCare: 'Veterinary care',
      behaviour: 'Behaviour and socialization',
      careComfort: 'Care and comfort',
    },
    fields: {
      ownerName: 'Your name',
      ownerPhone: 'Phone number',
      dogName: 'Dog’s name',
      breed: 'Breed',
      age: 'Age',
      agePlaceholder: 'For example, 3 years',
      sex: 'Sex',
      altered: 'Spay/neuter status',
      vetClinic: 'Vet clinic',
      vetContact: 'Vet contact information',
      peopleBehaviour: 'How are they with unfamiliar people?',
      dogBehaviour: 'How are they with unfamiliar dogs?',
      otherBehaviour: 'Anything else about their behaviour?',
      offLeash: 'Have they spent time off leash?',
      concernsPrompt: 'Do any of these apply?',
      biteHistory: 'Any history of growling, snapping, or biting?',
      biteDetails: 'Please explain any incidents or concerns',
      triggers: 'What fears or triggers should I know about?',
      triggersPlaceholder: 'Please include examples and helpful ways to support them.',
      homeAlone: 'How long can they be home alone?',
      favoriteActivities: 'Favourite activities',
      medicalNeeds: 'Medical conditions, allergies, or special needs',
      medications: 'Medications and instructions',
      treats: 'May I offer treats? What kind and how often?',
      avoidFoods: 'Foods or treats to avoid',
      personality: 'Three words to describe your dog',
      additionalNotes: 'Anything else that would help them feel at home?',
    },
    selectOne: 'Select one',
    sexOptions: ['Female', 'Male', 'Prefer not to say'],
    alteredOptions: ['Spayed/neutered', 'Not spayed/neutered', 'Not applicable'],
    concernOptions: [
      'Resource guarding',
      'Separation anxiety',
      'Prey drive',
      'Escape attempts',
      'None of these',
    ],
    submit: 'Send my intake form',
    submitting: 'Sending…',
    submitNote: 'Your answers are sent straight to Paige’s inbox.',
    submitError: 'Something went wrong while sending. Please try again, or email {email} directly.',
    notProvided: 'Not provided',
    emailSubject: 'New intake form for {dogName}',
    emailLabels: {
      ownerName: 'Owner name',
      ownerPhone: 'Owner phone',
      dogName: 'Dog name',
      breed: 'Breed',
      age: 'Age',
      sex: 'Sex',
      altered: 'Spay/neuter status',
      vetClinic: 'Vet clinic',
      vetContact: 'Vet contact',
      peopleBehaviour: 'Behaviour with unfamiliar people',
      dogBehaviour: 'Behaviour with unfamiliar dogs',
      otherBehaviour: 'Other behaviour notes',
      offLeash: 'Off-leash experience',
      concerns: 'Behaviour concerns',
      biteHistory: 'History of growling, snapping or biting',
      biteDetails: 'Bite history details',
      triggers: 'Fears and triggers',
      homeAlone: 'Time home alone',
      medicalNeeds: 'Medical conditions, allergies or special needs',
      medications: 'Medications',
      favoriteActivities: 'Favourite activities',
      treats: 'Treat permissions',
      avoidFoods: 'Foods or treats to avoid',
      personality: 'Three words to describe your dog',
      additionalNotes: 'Additional comfort information',
    },
  },
} as const

export type Content = typeof content
export default content
