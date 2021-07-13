<template>
  <div
    class="
      container
      mx-auto
      flex flex-wrap
      md:flex-nowrap
      justify-center
      md:justify-between
      align-middle
      py-5
    "
  >
    <div>
      <img
        src="~/assets/img/benaglcoder_logo.svg"
        alt="Bengal Coder"
        width="200px"
      />
    </div>
    <div>
      <ul class="flex justify-around items-center">
        <li class="px-4 py-2">home</li>
        <li class="px-4 py-2">learn</li>
        <li class="px-4 py-2">community</li>
        <li class="px-4 py-2">contact</li>
        <li class="px-4 py-2"><color-switcher /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import ColorSwitcher from '../atoms/ColorSwitcher.vue'

export default {
  components: { ColorSwitcher },
}
</script>

<style></style>
