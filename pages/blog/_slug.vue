<template>
  <div v-if="blog">
    <div class="container mx-auto py-20">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ blog.title }}
        </h1>
        <nuxt-content :document="blog" class="mt-10" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: null,
    }
  },
  async fetch() {
    this.blog = await this.$content('blog', this.$route.params.slug)
      .where({ published: { $ne: false } })
      .fetch()
  },
}
</script>

<style></style>
