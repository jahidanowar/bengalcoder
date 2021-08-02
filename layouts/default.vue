<template>
  <div>
    <app-bar />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppBar from '~/components/organism/AppBar.vue'
import AppFooter from '~/components/organism/AppFooter.vue'
export default {
  components: { AppBar, AppFooter },
}
</script>

<style></style>
