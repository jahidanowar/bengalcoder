<template>
  <div class="bg-white dark:bg-gray-800 shadow-none dark:shadow-xl">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        md:flex-nowrap
        justify-center
        md:justify-between
        items-center
        py-3
      "
    >
      <div>
        <logo class="w-48" />
      </div>
      <div>
        <ul class="flex justify-around items-center">
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
}
</script>

<style></style>
