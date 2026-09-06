<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { testimonials } from '@/data/site'

const activeIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | undefined

const goToSlide = (index: number) => {
  activeIndex.value = index
}

const advanceSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

onMounted(() => {
  intervalId = setInterval(advanceSlide, 5000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <TransitionGroup
      tag="div"
      :name="'testimonial-image'"
      class="relative h-[24rem] sm:h-[28rem] lg:h-[32rem]"
      aria-live="polite"
    >
      <img
        v-for="(testimonial, index) in testimonials"
        v-show="activeIndex === index"
        :key="testimonial.image"
        :src="testimonial.image"
        :alt="testimonial.imageAlt"
        width="2688"
        height="1536"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
    </TransitionGroup>

    <div
      class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10"
      aria-hidden="true"
    />

    <div class="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
      <div class="relative max-w-3xl">
        <TransitionGroup
          tag="div"
          :name="'testimonial-slide'"
          class="relative min-h-[12rem]"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            v-show="activeIndex === index"
            :key="testimonial.author"
            class="absolute inset-0"
          >
            <blockquote class="max-w-2xl">
              <p class="font-display text-[1.75rem] leading-snug text-cream sm:text-4xl">
                “{{ testimonial.quote }}”
              </p>
              <footer class="mt-4 text-[0.92rem] text-cream/75">
                {{ testimonial.author }} — {{ testimonial.source }}
              </footer>
            </blockquote>
          </div>
        </TransitionGroup>

        <div class="mt-6 flex items-center gap-2" aria-label="Testimonial navigation">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author + '-dot'"
            type="button"
            class="h-2.5 rounded-full transition-all duration-300"
            :class="activeIndex === index ? 'w-7 bg-butter' : 'w-2.5 bg-cream/45 hover:bg-cream/70'"
            :aria-label="`Go to testimonial ${index + 1}`"
            @click="goToSlide(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-slide-enter-active,
.testimonial-slide-leave-active {
  transition: all 0.5s ease;
}

.testimonial-image-enter-active,
.testimonial-image-leave-active {
  transition: opacity 0.7s ease;
}

.testimonial-image-enter-from,
.testimonial-image-leave-to {
  opacity: 0;
}

.testimonial-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.testimonial-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.testimonial-slide-enter-to,
.testimonial-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
