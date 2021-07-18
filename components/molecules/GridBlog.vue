<template>
  <article class="shadow-lg rounded-lg p-8 bg-white dark:bg-gray-700">
    <p class="text-sm mb-3">{{ blog.date | formatDate }}</p>
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
}
</script>

<style></style>
