<template>
  <UPage>
    <UPageHeader
      title="Sharing is Caring"
      :description="description"
      class="mb-6"
    />

    <UPageList class="gap-12">
      <CardPost v-for="(post, id) in posts" :key="id" :post="post" />
    </UPageList>

    <UPagination
      v-model:page="currentPage"
      :items-per-page="pageSize"
      :total="totalCount"
      color="neutral"
      variant="link"
      size="md"
      class="flex justify-center items-center gap-2 mt-8"
    />
  </UPage>
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

const currentPage = ref(1)
const pageSize = 6

const { data: totalCount } = await useAsyncData('posts-count', () =>
  queryCollection('posts').count(),
)

const { data: posts } = await useAsyncData(
  () => `posts-page-${currentPage.value}`,
  () =>
    queryCollection('posts')
      .order('id', 'DESC')
      .skip((currentPage.value - 1) * pageSize)
      .limit(pageSize)
      .all(),
  {
    watch: [currentPage],
  },
)
</script>
