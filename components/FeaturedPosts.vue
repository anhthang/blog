<template>
  <div class="space-y-6 relative">
    <h2 class="uppercase text-sm font-semibold text-(--ui-text-dimmed)">
      RECENT POSTS
    </h2>
    <ul class="space-y-12">
      <li v-for="(post, id) in posts" :key="id">
        <card-post :post="post" />
      </li>
    </ul>
    <div class="flex items-center justify-center text-sm">
      <UButton
        label="All Posts"
        to="/posts"
        color="neutral"
        variant="ghost"
        trailing-icon="solar:arrow-right-outline"
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
