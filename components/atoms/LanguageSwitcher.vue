<template>
  <div class="md:flex">
    <button
      class="
        bg-gray-100
        dark:bg-gray-700
        py-2
        px-4
        rounded-lg
        focus:outline-none
        border border-transparent
      "
      @click="showLangs = !showLangs"
    >
      {{ $i18n.localeProperties.name }}
    </button>
    <transition name="fade">
      <div v-if="showLangs" class="mt-2 sm:text-right px-2 md:flex">
        <nuxt-link
          v-for="lang in langs"
          :key="lang.code"
          class="block py-2 md:mr-2"
          :to="switchLocalePath(lang.code)"
          >{{ lang.name }}</nuxt-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      showLangs: false,
    }
  },
  computed: {
    langs() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  watch: {
    $route() {
      this.showLangs = false
    },
  },
}
</script>
