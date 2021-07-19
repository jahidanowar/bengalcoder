<template>
  <div class="error h-screen grid place-content-center text-center -mt-28">
    <lottie :width="400" :height="400" :options="lottieOptions" />
    <nuxt-link :to="localePath('/')" class="flex justify-center">
      <span class="mr-3">Go back to home</span>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
        ></path></svg
    ></nuxt-link>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/lottie/error.json'
export default {
  components: {
    lottie,
  },
  data() {
    return {
      lottieOptions: { animationData: animationData.default },
    }
  },
  head() {
    return {
      title: '404: Page not found',
    }
  },
}
</script>
