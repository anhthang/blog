<template>
  <div class="space-y-6 relative">
    <CategoryHeader title="Recent Posts" />

    <div class="flex flex-col gap-6">
      <CardPost v-for="(post, id) in posts" :key="id" :post="post" />
    </div>

    <div class="flex items-center justify-center text-sm">
      <UButton
        label="All Posts"
        to="/posts"
        color="neutral"
        variant="ghost"
        trailing-icon="hugeicons:arrow-right-02"
      />
    </div>
  </div>
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
