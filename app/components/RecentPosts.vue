<template>
  <UPageSection
    :ui="{
      container: '!px-0 py-8 sm:py-12 lg:py-16',
    }"
    :links="[
      {
        label: 'All Posts',
        trailingIcon: 'hugeicons:arrow-right-02',
        to: '/posts',
        variant: 'ghost',
      },
    ]"
  >
    <template #headline>
      <CategoryHeader title="Recent Posts" />
    </template>

    <template #features>
      <CardPost v-for="(post, id) in posts" :key="id" :post="post" />
    </template>
  </UPageSection>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('featured-posts', () =>
  queryCollection('posts')
    .order('id', 'DESC')
    .limit(4)
    .select('title', 'description', 'meta', 'path')
    .all(),
)
</script>
