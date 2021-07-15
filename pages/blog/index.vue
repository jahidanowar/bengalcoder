<template>
  <div class="blog">
    <div class="bg-gray-100 dark:bg-gray-700 py-20">
      <div class="container mx-auto">
        <h1 class="text-center title">Blog</h1>
      </div>
    </div>
    <div class="container mx-auto py-10">
      {{ blogs }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: null,
    }
  },
  async fetch() {
    const blogs = await this.$content('blog').sortBy('title').fetch()
    this.blogs = blogs
  },
}
</script>

<style></style>
