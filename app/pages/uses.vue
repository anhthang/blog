<template>
  <main>
    <PageHeader title="Peek Inside My Bag!" :description="description" />

    <p class="mt-3 mb-16 text-sm text-(--ui-text-dimmed)">
      This page was inspired by the amazing
      <NuxtLink to="https://uses.tech" target="_blank" class="underline">
        uses.tech</NuxtLink
      >, a collection of developer setup pages from around the world.
    </p>

    <div class="space-y-16">
      <div v-for="({ meta }, id) in data" :key="id" class="space-y-6">
        <CategoryHeader :title="meta.title" :description="meta.description" />

        <div class="flex flex-col gap-6">
          <CardUse v-for="(item, idx) in meta.body" :key="idx" :item="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const description =
  "Here's the software and gear that keeps my developer life running smoothly."

useSeoMeta({
  title: 'Tools I Use',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('uses-all', () =>
  queryCollection('uses').all(),
)
</script>
