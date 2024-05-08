<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Posts" />
    <ul class="space-y-16">
      <li v-for="(post, id) in posts" :key="id">
        <AppPostCard :post="post" />
      </li>
    </ul>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Posts',
})

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('/posts').sort({ published: -1 }).find(),
)
</script>
