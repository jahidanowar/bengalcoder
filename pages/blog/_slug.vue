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
          <post-meta :property="blog" />
          <div>
            <!-- Share Buttons  -->
            <div class="flex">
              <a href=""> </a>
            </div>
          </div>
        </div>
        <!-- ./ Blog Meta  -->
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ blog.title }}
        </h1>
        <nuxt-content :document="blog" class="mt-10" />
      </div>
    </article>
  </div>
</template>

<script>
import PostMeta from '~/components/molecules/PostMeta.vue'
export default {
  components: { PostMeta },
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
