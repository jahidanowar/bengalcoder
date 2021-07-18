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
h2,
h3,
h4 {
  @apply font-bold;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
pre,
code,
img,
blockquote,
ul,
ol,
li,
dl,
dt,
dd,
table,
tr,
th,
td {
  @apply mb-5;
}
pre {
  @apply rounded-xl dark:bg-gray-700;
}
</style>
