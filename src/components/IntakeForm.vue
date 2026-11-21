<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from 'vue'
import { asset } from '@/lib/asset'
import { business } from '@/data/site'
import { content } from '@/i18n'

const ownerEmail = business.email
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

const PHOTO_MAX_WIDTH = 1000
const PHOTO_QUALITY = 0.85

const photo = ref<Blob | null>(null)
const photoPreview = ref('')
const photoName = ref('')
const photoError = ref(false)
const photoInput = ref<HTMLInputElement | null>(null)

function clearPhoto() {
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value)
  photo.value = null
  photoPreview.value = ''
  photoName.value = ''
  photoError.value = false
}

/** Scale down to PHOTO_MAX_WIDTH (never up) and re-encode as JPEG. */
async function resizeToJpeg(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
  const scale = Math.min(1, PHOTO_MAX_WIDTH / bitmap.width)
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas unavailable')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close()
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Encode failed'))), 'image/jpeg', PHOTO_QUALITY),
  )
}

function removePhoto() {
  clearPhoto()
  if (photoInput.value) photoInput.value.value = ''
}

async function onPhotoChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  clearPhoto()
  if (!file) return
  try {
    photo.value = await resizeToJpeg(file)
    photoPreview.value = URL.createObjectURL(photo.value)
    photoName.value = file.name
  } catch {
    photoError.value = true
    input.value = ''
  }
}

onBeforeUnmount(clearPhoto)

function joinValue(value: string | string[]) {
  const empty = content.value.intake.notProvided
  return Array.isArray(value) ? value.join(', ') || empty : value || empty
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
  clearPhoto()
  submitted.value = false
  submitError.value = false
}

async function submitForm() {
  const labels = content.value.intake.emailLabels
  const fields: [string, string | string[]][] = [
    [labels.ownerName, form.ownerName],
    [labels.ownerPhone, form.ownerPhone],
    [labels.dogName, form.dogName],
    [labels.breed, form.breed],
    [labels.age, form.age],
    [labels.sex, form.sex],
    [labels.altered, form.altered],
    [labels.vetClinic, form.vetClinic],
    [labels.vetContact, form.vetContact],
    [labels.peopleBehaviour, form.peopleBehaviour],
    [labels.dogBehaviour, form.dogBehaviour],
    [labels.otherBehaviour, form.otherBehaviour],
    [labels.offLeash, form.offLeash],
    [labels.concerns, form.concerns],
    [labels.biteHistory, form.biteHistory],
    [labels.biteDetails, form.biteDetails],
    [labels.triggers, form.triggers],
    [labels.homeAlone, form.homeAlone],
    [labels.medicalNeeds, form.medicalNeeds],
    [labels.medications, form.medications],
    [labels.favoriteActivities, form.favoriteActivities],
    [labels.treats, form.treats],
    [labels.avoidFoods, form.avoidFoods],
    [labels.personality, form.personality],
    [labels.additionalNotes, form.additionalNotes],
  ]

  const body = fields.map(([label, value]) => `${label}: ${joinValue(value)}`).join('\n\n')

  submitting.value = true
  submitError.value = false

  try {
    const payload = new FormData()
    payload.append('_subject', content.value.intake.emailSubject.replace('{dogName}', form.dogName))
    payload.append('_template', 'box')
    payload.append('_captcha', 'false')
    payload.append('message', body)
    if (photo.value) payload.append('photo', photo.value, `${form.dogName.trim() || 'dog'}.jpg`)

    const response = await fetch(`https://formsubmit.co/ajax/${ownerEmail}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: payload,
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
  <section class="pt-28 pb-16 sm:pt-36 sm:pb-24">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="overflow-hidden rounded-card bg-shell">
        <div class="relative h-[22rem] w-full sm:h-[28rem]">
          <img
            :src="asset('/images/contact-dog-shelter.jpg')"
            :alt="content.intake.imageAlt"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        </div>

        <div class="px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <p class="text-xs font-medium tracking-[0.18em] text-moss uppercase">{{ content.intake.eyebrow }}</p>
          <h2 class="mt-3 text-4xl leading-tight sm:text-5xl">{{ content.intake.heading }}</h2>
          <p class="mt-5 max-w-xl leading-relaxed text-ink/65">
            {{ content.intake.intro }}
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
            <h3 class="mt-6 font-display text-3xl sm:text-4xl">{{ content.intake.thankYou }}</h3>
            <p class="mt-4 max-w-md leading-relaxed text-ink/65">
              {{ content.intake.submittedBody }}
            </p>
            <button
              type="button"
              class="mt-8 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
              @click="resetForm"
            >
              {{ content.intake.sendAnother }}
            </button>
          </div>

          <form v-else class="mt-10 space-y-10" @submit.prevent="submitForm">
            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">{{ content.intake.sections.yourDetails }}</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">{{ content.intake.fields.ownerName }} <input v-model="form.ownerName" required type="text" autocomplete="name" /></label>
                <label class="field">{{ content.intake.fields.ownerPhone }} <input v-model="form.ownerPhone" required type="tel" autocomplete="tel" /></label>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">{{ content.intake.sections.aboutDog }}</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">{{ content.intake.fields.dogName }} <input v-model="form.dogName" required type="text" /></label>
                <label class="field">{{ content.intake.fields.breed }} <input v-model="form.breed" required type="text" /></label>
                <label class="field">{{ content.intake.fields.age }} <input v-model="form.age" required type="text" :placeholder="content.intake.fields.agePlaceholder" /></label>
                <label class="field">{{ content.intake.fields.sex }} <select v-model="form.sex" required><option value="" disabled>{{ content.intake.selectOne }}</option><option v-for="opt in content.intake.sexOptions" :key="opt">{{ opt }}</option></select></label>
                <label class="field">{{ content.intake.fields.altered }} <select v-model="form.altered" required><option value="" disabled>{{ content.intake.selectOne }}</option><option v-for="opt in content.intake.alteredOptions" :key="opt">{{ opt }}</option></select></label>
                <div class="field">
                  <span>{{ content.intake.fields.photo }}</span>
                  <input ref="photoInput" type="file" accept="image/*" class="hidden" @change="onPhotoChange" />
                  <div class="relative">
                    <button type="button" class="photo-btn" :class="{ 'has-file': photoPreview }" :title="photoName || undefined" @click="photoInput?.click()">
                      <img v-if="photoPreview" :src="photoPreview" alt="" class="h-6 w-6 shrink-0 rounded-md object-cover" />
                      <span v-else class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/10 text-ink/35" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="9" cy="9" r="1.6" />
                          <path d="m21 15-4.5-4.5L6 21" />
                        </svg>
                      </span>
                      <span class="min-w-0 flex-1 truncate" :class="{ 'text-ink/45': !photoPreview }">{{ photoName || content.intake.fields.photoPlaceholder }}</span>
                      <span v-if="!photoPreview" class="shrink-0 text-xs font-medium text-forest underline underline-offset-2">{{ content.intake.fields.photoUpload }}</span>
                    </button>
                    <button v-if="photoPreview" type="button" class="absolute top-1/2 right-4 -translate-y-1/2 text-xs underline underline-offset-2" @click="removePhoto">
                      {{ content.intake.fields.photoRemove }}
                    </button>
                  </div>
                  <span v-if="photoError" class="text-xs text-ink/75" role="alert">{{ content.intake.fields.photoError }}</span>
                </div>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">{{ content.intake.sections.vetCare }}</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">{{ content.intake.fields.vetClinic }} <input v-model="form.vetClinic" type="text" /></label>
                <label class="field">{{ content.intake.fields.vetContact }} <input v-model="form.vetContact" type="text" /></label>
              </div>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">{{ content.intake.sections.behaviour }}</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">{{ content.intake.fields.peopleBehaviour }} <textarea v-model="form.peopleBehaviour" rows="3" /></label>
                <label class="field">{{ content.intake.fields.dogBehaviour }} <textarea v-model="form.dogBehaviour" rows="3" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.otherBehaviour }} <textarea v-model="form.otherBehaviour" rows="3" /></label>
              </div>
              <label class="field">{{ content.intake.fields.offLeash }} <textarea v-model="form.offLeash" rows="2" /></label>
              <div>
                <p class="mb-3 text-sm font-medium">{{ content.intake.fields.concernsPrompt }}</p>
                <div class="grid gap-3 sm:grid-cols-2">
                  <label v-for="option in content.intake.concernOptions" :key="option" class="check-field">
                    <input v-model="form.concerns" type="checkbox" :value="option" />
                    <span>{{ option }}</span>
                  </label>
                </div>
              </div>
              <label class="field">{{ content.intake.fields.biteHistory }} <textarea v-model="form.biteHistory" rows="2" /></label>
              <label class="field">{{ content.intake.fields.biteDetails }} <textarea v-model="form.biteDetails" rows="3" /></label>
              <label class="field">{{ content.intake.fields.triggers }} <textarea v-model="form.triggers" rows="3" :placeholder="content.intake.fields.triggersPlaceholder" /></label>
            </fieldset>

            <fieldset class="space-y-5">
              <legend class="font-display text-2xl">{{ content.intake.sections.careComfort }}</legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="field">{{ content.intake.fields.homeAlone }} <input v-model="form.homeAlone" type="text" /></label>
                <label class="field">{{ content.intake.fields.favoriteActivities }} <input v-model="form.favoriteActivities" type="text" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.medicalNeeds }} <textarea v-model="form.medicalNeeds" rows="3" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.medications }} <textarea v-model="form.medications" rows="3" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.treats }} <textarea v-model="form.treats" rows="3" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.avoidFoods }} <textarea v-model="form.avoidFoods" rows="2" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.personality }} <input v-model="form.personality" type="text" /></label>
                <label class="field sm:col-span-2">{{ content.intake.fields.additionalNotes }} <textarea v-model="form.additionalNotes" rows="4" /></label>
              </div>
            </fieldset>

            <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                :disabled="submitting"
                class="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {{ submitting ? content.intake.submitting : content.intake.submit }}
              </button>
              <p class="text-sm leading-relaxed text-ink/55">
                {{ content.intake.submitNote }}
              </p>
            </div>
            <p v-if="submitError" class="rounded-2xl bg-blush/40 px-5 py-4 text-sm text-ink/75" role="alert">
              {{ content.intake.submitError.replace('{email}', ownerEmail) }}
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

.photo-btn {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid rgb(38 48 31 / 0.14);
  border-radius: 0.9rem;
  background: rgb(253 248 237 / 0.75);
  padding: 0.75rem 0.9rem;
  color: #26301f;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s;
}

.photo-btn.has-file {
  padding-right: 4.75rem;
}

.photo-btn:hover,
.photo-btn:focus-visible {
  border-color: #3d4b35;
  outline: none;
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
