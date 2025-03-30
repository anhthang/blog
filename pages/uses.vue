<template>
  <main>
    <PageHeader
      class="mb-16"
      title="Peek Inside My Bag!"
      :description="description"
    />

    <div class="space-y-16">
      <div
        v-for="({ meta: { title, body: items } }, id) in data"
        :key="id"
        class="space-y-4"
      >
        <CategoryHeader :title="title" />

        <div class="flex flex-col gap-4">
          <CardUse v-for="(item, idx) in items" :key="idx" :item="item" />
        </div>
      </div>
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
  queryCollection('uses').all(),
)
</script>
