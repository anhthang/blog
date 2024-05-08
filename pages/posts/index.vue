<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Posts" :description="description" />
    <ul class="space-y-16">
      <li v-for="(post, id) in posts" :key="id">
        <AppPostCard :post="post" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description = 'Sharing is Caring'

useSeoMeta({
  title: 'Posts',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('/posts').sort({ published: -1 }).find(),
)
</script>
