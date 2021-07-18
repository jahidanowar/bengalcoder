<template>
  <article
    class="
      shadow-lg
      rounded-lg
      bg-white
      dark:bg-gray-700
      overflow-hidden
      transform
      hover:-translate-y-2
      duration-300
    "
  >
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
      <img :src="blog.thumbnail" :alt="blog.title" />
      <div class="p-4">
        <p class="text-sm mb-3">{{ blog.date | formatDate }}</p>
        <h3 class="text-2xl font-bold">
          {{ blog.title }}
        </h3>
      </div>
    </nuxt-link>
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
