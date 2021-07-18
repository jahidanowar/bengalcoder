<template>
  <div class="bg-white dark:bg-gray-800 shadow-none dark:shadow-xl">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        md:flex-nowrap
        justify-between
        items-center
        py-3
      "
    >
      <div>
        <nuxt-link to="/">
          <logo class="w-48" />
        </nuxt-link>
      </div>
      <button class="md:hidden" @click="show = !show">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        :class="show ? 'block' : 'hidden'"
        class="w-full md:w-auto mt-5 md:mt-0"
      >
        <ul class="flex flex-col md:flex-row justify-around md:items-center">
          <li class="px-3 py-1"><nuxt-link to="/">home</nuxt-link></li>
          <li class="px-3 py-1"><nuxt-link to="/blog">blog</nuxt-link></li>
          <li class="px-3 py-1">
            <nuxt-link to="/contribute">contribute</nuxt-link>
          </li>
          <li class="px-3 py-1">
            <nuxt-link to="/join">join community</nuxt-link>
          </li>
          <li class="px-3 py-1"><color-switcher /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSwitcher from '../atoms/ColorSwitcher.vue'
import Logo from '../atoms/Logo.vue'

export default {
  components: { ColorSwitcher, Logo },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style></style>
