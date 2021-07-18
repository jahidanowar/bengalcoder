<template>
  <div>
    <!-- Hero Section -->
    <section class="hero py-10 md:py-28">
      <div
        class="container mx-auto flex flex-wrap justify-between items-center"
      >
        <div class="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            we help you to build
            <span class="text-indigo-500 dark:text-indigo-600"
              >your career</span
            >
            on the internet
          </h1>
          <p class="mt-5 text-xl md:pr-24">
            bengalcoder provide all the essential skill sets that all you need
            to succeed in the field of IT.
          </p>
          <nuxt-link to="/blog" class="btn btn-primary mt-5 inline-block"
            >learn now</nuxt-link
          >
        </div>
        <div class="w-full md:w-1/2">
          <!-- <img src="~/assets/img/bengalcoder-hero-image.svg" width="400px" /> -->
          <lottie :width="400" :height="400" :options="lottieOptions" />
        </div>
      </div>
    </section>
    <!-- ./ Hero Section  -->
    <!-- Blurb Section  -->
    <section class="blurb py-10 md:py-14">
      <div class="container mx-auto">
        <h1 class="text-center text-4xl font-bold">we teach you to</h1>
        <div class="flex mt-16 gap-10">
          <div class="w-full md:w-1/3">
            <div
              class="
                px-10
                py-12
                rounded-lg
                bg-gray-100
                dark:bg-gray-700
                text-center
              "
            >
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold my-3">program</h3>
              <p>
                our project base programming tutorial is as easy as learning to
                a ride bicycle.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div
              class="
                px-10
                py-12
                rounded-lg
                bg-gray-100
                dark:bg-gray-700
                text-center
              "
            >
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold my-3">program</h3>
              <p>
                our project base programming tutorial is as easy as learning to
                a ride bicycle.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div
              class="
                px-10
                py-12
                rounded-lg
                bg-gray-100
                dark:bg-gray-700
                text-center
              "
            >
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold my-3">program</h3>
              <p>
                our project base programming tutorial is as easy as learning to
                a ride bicycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./ Blurb Section -->
    <div class="container mx-auto py-10">
      <cta />
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/lottie/sitting-on-desk-using-pc.json'
import Cta from '~/components/organism/Cta.vue'

export default {
  components: {
    lottie,
    Cta,
  },
  data() {
    return {
      lottieOptions: { animationData: animationData.default },
    }
  },
  head() {
    return {
      title: 'Bengal Coder - Learn Programming in Bengali',
      meta: [
        {
          name: 'description',
          content:
            'Bengal Coder is Platform where you can learn programming and web development in Bengali. We help you to build your career online',
        },
      ],
    }
  },
}
</script>
