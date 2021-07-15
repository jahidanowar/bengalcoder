<template>
  <div class="blog">
    {{ blogs }}
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
