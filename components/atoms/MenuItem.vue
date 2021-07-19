<template>
  <nuxt-link :to="localePath(to)" class="flex items-center">
    <slot></slot>
    <span class="ml-2">{{ $t(label) }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>
