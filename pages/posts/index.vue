<template>
  <main>
    <PageHeader
      class="mb-16"
      title="Sharing is Caring"
      :description="description"
    />

    <div class="flex flex-col gap-12">
      <CardPost v-for="(post, id) in posts" :key="id" :post="post" />
    </div>
  </main>
</template>

<script setup>
const description =
  'Explore all my posts on web development, software engineering, and more!'

useSeoMeta({
  title: 'Thoughts & Notes',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('posts').order('id', 'DESC').all(),
)
</script>
