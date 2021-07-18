<template>
  <div class="flex items-center">
    <avatar :image="property.avatar" :alt="property.author" />
    <div>
      <h6 class="text-xl font-semibold">{{ property.author }}</h6>
      <time
        :datetime="property.date"
        itemprop="datePublished"
        class="entry-date published text-gray-400"
        >Published on {{ property.date | formatDate }}</time
      >
    </div>
  </div>
</template>

<script>
import Avatar from '../atoms/Avatar.vue'
export default {
  components: { Avatar },
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
}
</script>
