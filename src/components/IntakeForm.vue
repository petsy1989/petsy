<script setup lang="ts">
import { reactive, ref } from 'vue'
import { asset } from '@/lib/asset'

const ownerEmail = 'acomecome@gmail.com'
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref(false)

const form = reactive({
  ownerName: '',
  ownerPhone: '',
  dogName: '',
  breed: '',
  age: '',
  sex: '',
  altered: '',
  vetClinic: '',
  vetContact: '',
  peopleBehaviour: '',
  dogBehaviour: '',
  otherBehaviour: '',
  offLeash: '',
  concerns: [] as string[],
  biteHistory: '',
  biteDetails: '',
  triggers: '',
  homeAlone: '',
  medicalNeeds: '',
  medications: '',
  favoriteActivities: '',
  treats: '',
  avoidFoods: '',
  personality: '',
  additionalNotes: '',
})

const concernOptions = [
  'Resource guarding',
  'Separation anxiety',
  'Prey drive',
  'Escape attempts',
  'None of these',
]

function joinValue(value: string | string[]) {
  return Array.isArray(value) ? value.join(', ') || 'Not provided' : value || 'Not provided'
}

function resetForm() {
  Object.assign(form, {
    ownerName: '',
    ownerPhone: '',
    dogName: '',
    breed: '',
    age: '',
    sex: '',
    altered: '',
    vetClinic: '',
    vetContact: '',
    peopleBehaviour: '',
    dogBehaviour: '',
    otherBehaviour: '',
    offLeash: '',
    concerns: [],
    biteHistory: '',
    biteDetails: '',
    triggers: '',
    homeAlone: '',
    medicalNeeds: '',
    medications: '',
    favoriteActivities: '',
    treats: '',
    avoidFoods: '',
    personality: '',
    additionalNotes: '',
  })
  submitted.value = false
  submitError.value = false
}

async function submitForm() {
  const fields = [
    ['Owner name', form.ownerName],
    ['Owner phone', form.ownerPhone],
    ['Dog name', form.dogName],
    ['Breed', form.breed],
    ['Age', form.age],
    ['Sex', form.sex],
    ['Spay/neuter status', form.altered],
    ['Vet clinic', form.vetClinic],
    ['Vet contact', form.vetContact],
    ['Behaviour with unfamiliar people', form.peopleBehaviour],
    ['Behaviour with unfamiliar dogs', form.dogBehaviour],
    ['Other behaviour notes', form.otherBehaviour],
    ['Off-leash experience', form.offLeash],
    ['Behaviour concerns', form.concerns],
    ['History of growling, snapping or biting', form.biteHistory],
    ['Bite history details', form.biteDetails],
    ['Fears and triggers', form.triggers],
    ['Time home alone', form.homeAlone],
    ['Medical conditions, allergies or special needs', form.medicalNeeds],
    ['Medications', form.medications],
    ['Favourite activities', form.favoriteActivities],
    ['Treat permissions', form.treats],
    ['Foods or treats to avoid', form.avoidFoods],
    ['Three words to describe your dog', form.personality],
    ['Additional comfort information', form.additionalNotes],
  ]

  const body = fields.map(([label, value]) => `${label}: ${joinValue(value)}`).join('\n\n')

  submitting.value = true
  submitError.value = false

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${ownerEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New intake form for ${form.dogName}`,
        _template: 'box',
        _captcha: 'false',
        message: body,
      }),
    })

    if (!response.ok) throw new Error('Submission failed')
    submitted.value = true
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="pt-28 sm:pt-36">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="overflow-hidden rounded-card bg-shell">
        <div class="relative h-[22rem] w-full sm:h-[28rem]">
          <img
            :src="asset('/images/contact-dog-shelter.jpg')"
            alt="Paige spending time with dogs"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        </div>

        <div class="px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <p class="text-xs font-medium tracking-[0.18em] text-moss uppercase">Intake form</p>
          <h2 class="mt-3 text-4xl leading-tight sm:text-5xl">Tell me about your dog.</h2>
          <p class="mt-5 max-w-xl leading-relaxed text-ink/65">
            Share a little about your dog so I can understand their routines, personality, and what helps them feel comfortable.
          </p>

          <div v-if="submitted" class="mt-10 flex flex-col items-center py-10 text-center sm:py-16">
            <span class="flex h-20 w-20 items-center justify-center rounded-full bg-butter-soft" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-forest">
                <path
                  d="M12 13.2c-2.6 0-5.5 2-5.5 4.4 0 1.5 1.1 2.6 2.7 2.6 1 0 1.8-.5 2.8-.5s1.8.5 2.8.5c1.6 0 2.7-1.1 2.7-2.6 0-2.4-2.9-4.4-5.5-4.4Z"
                  fill="currentColor"
                />
                <ellipse cx="6.2" cy="9.6" rx="1.9" ry="2.4" fill="currentColor" />
                <ellipse cx="17.8" cy="9.6" rx="1.9" ry="2.4" fill="currentColor" />
                <ellipse cx="9.4" cy="5.6" rx="1.9" ry="2.4" fill="currentColor" />
                <ellipse cx="14.6" cy="5.6" rx="1.9" ry="2.4" fill="currentColor" />
              </svg>
            </span>
            <h3 class="mt-6 font-display text-3xl sm:text-4xl">Thank you!</h3>
            <p class="mt-4 max-w-md leading-relaxed text-ink/65">
              Your intake form has been sent. Paige will be in touch soon.
            </p>
            <button
              type="button"
              class="mt-8 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
              @click="resetForm"
            >
              Send another intake form
            </button>
          </div>

          <form v-else class="mt-10 space-y-10" @submit.prevent="submitForm">
            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">Your details</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">Your name <input v-model="form.ownerName" required type="text" autocomplete="name" /></label>
                <label class="field">Phone number <input v-model="form.ownerPhone" required type="tel" autocomplete="tel" /></label>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">About your dog</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">Dog’s name <input v-model="form.dogName" required type="text" /></label>
                <label class="field">Breed <input v-model="form.breed" required type="text" /></label>
                <label class="field">Age <input v-model="form.age" required type="text" placeholder="For example, 3 years" /></label>
                <label class="field">Sex <select v-model="form.sex" required><option value="" disabled>Select one</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
                <label class="field sm:col-span-2">Spay/neuter status <select v-model="form.altered" required><option value="" disabled>Select one</option><option>Spayed/neutered</option><option>Not spayed/neutered</option><option>Not applicable</option></select></label>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">Veterinary care</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">Vet clinic <input v-model="form.vetClinic" type="text" /></label>
                <label class="field">Vet contact information <input v-model="form.vetContact" type="text" /></label>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">Behaviour and socialization</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">How are they with unfamiliar people? <textarea v-model="form.peopleBehaviour" rows="3" /></label>
                <label class="field">How are they with unfamiliar dogs? <textarea v-model="form.dogBehaviour" rows="3" /></label>
                <label class="field sm:col-span-2">Anything else about their behaviour? <textarea v-model="form.otherBehaviour" rows="3" /></label>
              </div>
              <label class="field">Have they spent time off leash? <textarea v-model="form.offLeash" rows="2" /></label>
              <div>
                <p class="mb-3 text-sm font-medium">Do any of these apply?</p>
                <div class="grid gap-3 sm:grid-cols-2">
                  <label v-for="option in concernOptions" :key="option" class="check-field">
                    <input v-model="form.concerns" type="checkbox" :value="option" />
                    <span>{{ option }}</span>
                  </label>
                </div>
              </div>
              <label class="field">Any history of growling, snapping, or biting? <textarea v-model="form.biteHistory" rows="2" /></label>
              <label class="field">Please explain any incidents or concerns <textarea v-model="form.biteDetails" rows="3" /></label>
              <label class="field">What fears or triggers should I know about? <textarea v-model="form.triggers" rows="3" placeholder="Please include examples and helpful ways to support them." /></label>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">Care and comfort</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">How long can they be home alone? <input v-model="form.homeAlone" type="text" /></label>
                <label class="field">Favourite activities <input v-model="form.favoriteActivities" type="text" /></label>
                <label class="field sm:col-span-2">Medical conditions, allergies, or special needs <textarea v-model="form.medicalNeeds" rows="3" /></label>
                <label class="field sm:col-span-2">Medications and instructions <textarea v-model="form.medications" rows="3" /></label>
                <label class="field sm:col-span-2">May I offer treats? What kind and how often? <textarea v-model="form.treats" rows="3" /></label>
                <label class="field sm:col-span-2">Foods or treats to avoid <textarea v-model="form.avoidFoods" rows="2" /></label>
                <label class="field sm:col-span-2">Three words to describe your dog <input v-model="form.personality" type="text" /></label>
                <label class="field sm:col-span-2">Anything else that would help them feel at home? <textarea v-model="form.additionalNotes" rows="4" /></label>
              </div>
            </fieldset>

            <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                :disabled="submitting"
                class="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {{ submitting ? 'Sending…' : 'Send my intake form' }}
              </button>
              <p class="text-sm leading-relaxed text-ink/55">
                Your answers are sent straight to Paige’s inbox.
              </p>
            </div>
            <p v-if="submitError" class="rounded-2xl bg-blush/40 px-5 py-4 text-sm text-ink/75" role="alert">
              Something went wrong while sending. Please try again, or email {{ ownerEmail }} directly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgb(38 48 31 / 0.72);
  font-size: 0.875rem;
  line-height: 1.4;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border: 1px solid rgb(38 48 31 / 0.14);
  border-radius: 0.9rem;
  background: rgb(253 248 237 / 0.75);
  padding: 0.75rem 0.9rem;
  color: #26301f;
  font: inherit;
}

.field textarea {
  resize: vertical;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #3d4b35;
  outline: 2px solid rgb(61 75 53 / 0.18);
  outline-offset: 1px;
}

.check-field {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: rgb(38 48 31 / 0.72);
  font-size: 0.875rem;
}

.check-field input {
  accent-color: #3d4b35;
  height: 1rem;
  width: 1rem;
}
</style>
