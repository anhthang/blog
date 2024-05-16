<template>
  <main class="min-h-screen">
    <page-header
      class="mb-12"
      title="Peek Inside My Bag!"
      :description="description"
    />
    <div class="space-y-16">
      <ul
        v-for="({ title, body: items }, id) in data"
        :key="id"
        class="space-y-4"
      >
        <uses-header :title="title" />
        <uses-item v-for="(item, idx) in items" :key="idx" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "What keeps me going? This page gives you a glimpse into the essentials I carry with me, both physical and digital. Dive in to see my favorite apps and software, must-have items, and the things I can't recommend enough!"

useSeoMeta({
  title: 'Uses',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('uses-all', () =>
  queryContent('/uses').find(),
)
</script>
