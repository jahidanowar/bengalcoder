<template>
  <div v-if="blog">
    <article class="container mx-auto py-20">
      <div class="md:w-9/12 mx-auto mb-10">
        <img
          :src="blog.thumbnail"
          alt="blog.title"
          class="rounded-xl w-full shadow-xl"
        />
      </div>
      <div class="max-w-3xl mx-auto">
        <!-- Blog Meta -->
        <div
          class="
            flex
            justify-between
            items-center
            border-t border-b
            py-5
            mb-8
            dark:border-gray-600
          "
        >
          <!-- Meta Goes here -->
          <post-meta :property="blog" class="w-1/2" />
          <div class="w-1/2">
            <!-- Share Buttons  -->
            <share-widget />
          </div>
        </div>
        <!-- ./ Blog Meta  -->
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ blog.title }}
        </h1>
        <nuxt-content :document="blog" class="my-10" />
        <!-- Blog Meta -->
        <div
          class="
            flex
            justify-between
            items-center
            border-t border-b
            py-5
            mb-8
            dark:border-gray-600
          "
        >
          <!-- Meta Goes here -->
          <post-meta :property="blog" class="w-1/2" />
          <div class="w-1/2">
            <!-- Share Buttons  -->
            <share-widget />
          </div>
        </div>
        <!-- ./ Blog Meta  -->
      </div>
    </article>
  </div>
</template>

<script>
import PostMeta from '~/components/molecules/PostMeta.vue'
import ShareWidget from '~/components/molecules/ShareWidget.vue'
export default {
  components: { PostMeta, ShareWidget },
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug)
      .where({ published: { $ne: false } })
      .fetch()
    return { blog }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          name: 'description',
          content: this.blog.description,
        },
      ],
    }
  },
}
</script>

<style></style>
