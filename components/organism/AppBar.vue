<template>
  <div
    class="bg-white dark:bg-gray-800 shadow-none dark:shadow-xl duration-200"
  >
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
        <nuxt-link :to="localePath('/')">
          <logo class="w-48" />
        </nuxt-link>
      </div>
      <button class="sm:hidden" @click="show = !show">
        <transition name="fade">
          <template v-if="!show">
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
          </template>
          <template v-else>
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </template>
        </transition>
      </button>
      <div
        :class="show ? 'block' : 'hidden'"
        class="w-full md:w-auto mt-5 md:mt-0 sm:block"
      >
        <ul class="flex flex-col md:flex-row justify-around md:items-center">
          <li class="px-3 py-1 mb-5 sm:mb-0">
            <menu-item to="/join" label="appbar.join">
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
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                ></path>
              </svg>
            </menu-item>
          </li>
          <li class="px-3 py-1 mb-5 sm:mb-0">
            <menu-item to="/blog" label="appbar.blog">
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
                  d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </menu-item>
          </li>
          <li class="px-3 py-1 mb-5 sm:mb-0">
            <menu-item to="/contribute" label="appbar.contribute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 mr-2 sm:ml-2"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </menu-item>
          </li>
          <li class="px-3 py-1 mb-5 sm:mb-0"><color-switcher /></li>
          <li class="px-3 py-1 mb-5 sm:mb-0"><language-switcher /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSwitcher from '../atoms/ColorSwitcher.vue'
import LanguageSwitcher from '../atoms/LanguageSwitcher.vue'
import Logo from '../atoms/Logo.vue'
import MenuItem from '../atoms/MenuItem.vue'

export default {
  components: { ColorSwitcher, Logo, LanguageSwitcher, MenuItem },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    $route() {
      this.show = false
    },
  },
}
</script>

<style></style>
