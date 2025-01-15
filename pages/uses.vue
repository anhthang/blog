<template>
  <main>
    <page-header
      class="mb-16"
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
  "Here's the software and gear that keeps my developer life running smoothly."

useSeoMeta({
  title: 'Inside My Bag',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('uses-all', () =>
  queryContent('/uses').find(),
)
</script>
