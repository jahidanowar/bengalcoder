<template>
  <img :src="image" :alt="alt" class="w-14 h-14 rounded-full mr-2" />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
