<template>
  <div class="content">
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
            <share-widget :url="$route.params.slug" />
          </div>
        </div>
        <!-- ./ Blog Meta  -->
        <h1 class="text-3xl md:text-5xl font-bold">
          {{ blog.title }}
        </h1>
        <lite-youtube v-if="blog.video" :videoid="blog.video" />
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
            <share-widget :url="$route.params.slug" />
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

<style>
/*
The great reset
*/
.content h1,
.content h2,
.content h3,
.content h4 {
  @apply font-bold;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content p,
.content pre,
.content code,
.content blockquote,
.content ul,
.content ol,
.content li,
.content dl,
.content dt,
.content dd,
.content table,
.content tr,
.content th,
.content td {
  @apply mb-5;
}
.content h2 {
  @apply text-3xl;
}
.content pre {
  @apply rounded-xl dark:bg-gray-700;
}
</style>
