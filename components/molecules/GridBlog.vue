<template>
  <article class="shadow-lg rounded-lg p-8 bg-white dark:bg-gray-700">
    <p class="text-sm mb-3">{{ formatDate }}</p>
    <h3 class="text-2xl font-bold">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">{{
        blog.title
      }}</nuxt-link>
    </h3>
  </article>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatDate() {
      const date = new Date(this.blog.date)
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
      return `${mo} ${da}, ${ye}`
    },
  },
}
</script>

<style></style>
