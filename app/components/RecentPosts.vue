<template>
  <UPageSection
    :links="[
      {
        label: 'All Posts',
        trailingIcon: 'solar:map-arrow-right-bold-duotone',
        to: '/posts',
        variant: 'ghost',
      },
    ]"
  >
    <template #headline>
      <CategoryHeader title="Recent Posts" />
    </template>

    <template #body>
      <UPageList class="gap-6">
        <CardPost v-for="(post, id) in posts" :key="id" :post="post" />
      </UPageList>
    </template>
  </UPageSection>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('featured-posts', () =>
  queryCollection('posts')
    .order('id', 'DESC')
    .limit(3)
    .select('title', 'description', 'meta', 'path')
    .all(),
)
</script>
