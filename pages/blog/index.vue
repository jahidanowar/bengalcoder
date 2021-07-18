<template>
  <div class="blog">
    <div class="py-14 md:py-20">
      <div class="container mx-auto">
        <h1 class="text-center title">Blog</h1>
      </div>
    </div>
    <div class="container mx-auto py-10">
      <div class="grid md:grid-cols-3 gap-10">
        <grid-blog v-for="blog in blogs" :key="blog.slug" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import GridBlog from '~/components/molecules/GridBlog.vue'
export default {
  components: { GridBlog },
  async asyncData({ $content }) {
    const blogs = await $content('blog')
      .where({ published: { $ne: false } })
      .sortBy('date', 'desc')
      .fetch()
    return { blogs }
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>

<style></style>
