<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      RECENT POSTS
    </h2>
    <ul class="space-y-16">
      <li v-for="(post, id) in posts" :key="id">
        <AppPostCard :post="post" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Posts &rarr;"
        to="/posts"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts-home', () =>
  queryContent('/posts')
    .sort({ published: -1 })
    .limit(3)
    .only(['title', 'description', 'published', 'slug', '_path'])
    .find(),
)
</script>
