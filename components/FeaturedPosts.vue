<template>
  <div class="space-y-6 relative">
    <h2 class="uppercase text-sm font-semibold text-gray-400">RECENT POSTS</h2>
    <ul class="space-y-12">
      <li v-for="(post, id) in posts" :key="id">
        <card-post :post="post" />
      </li>
    </ul>
    <div class="flex items-center justify-center text-sm">
      <UButton
        label="All Posts"
        to="/posts"
        color="gray"
        variant="ghost"
        class="hover:bg-gray-100"
        trailing-icon="i-solar-arrow-right-outline"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts-home', () =>
  queryContent('/posts')
    .sort({ published: -1 })
    .limit(3)
    .only(['title', 'description', 'published', 'readingTime', 'slug', '_path'])
    .find(),
)
</script>
