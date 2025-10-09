<template>
  <UPage>
    <UPageHeader title="Peek Inside My Bag!" :description="description" />

    <p class="mb-6 text-sm text-dimmed">
      This page was inspired by the amazing
      <NuxtLink to="https://uses.tech" target="_blank" class="underline">
        uses.tech</NuxtLink
      >, a collection of developer setup pages from around the world.
    </p>

    <div class="space-y-16">
      <UAccordion
        v-model="active"
        :items="data"
        :ui="{
          label: 'flex-1',
        }"
      >
        <template #default="{ item: { meta } }">
          <CategoryHeader :title="meta.title" :description="meta.description" />
        </template>

        <template #body="{ item: { meta } }">
          <UPageList class="gap-6">
            <CardUse v-for="(item, idx) in meta.body" :key="idx" :item="item" />
          </UPageList>
        </template>
      </UAccordion>
    </div>
  </UPage>
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

const active = ref('0')

const { data } = await useAsyncData('uses-all', () =>
  queryCollection('uses').all(),
)
</script>
