<template>
  <UPage>
    <UPageHeader title="Building & Sharing" :description="description" />

    <FeaturedProjects />

    <CategoryHeader title="Others" class="mb-6" />

    <UPageList class="gap-4">
      <CardProject
        v-for="({ meta: project }, id) in otherProjects"
        :key="id"
        :project="project"
      />
    </UPageList>
  </UPage>
</template>

<script setup>
const description =
  "Though my portfolio is small, I'm passionate about the projects I chose. Some are even open-source - feel free to contribute!"

useSeoMeta({
  title: 'What I Build & Share',
  description,
  ogDescription: description,
  twitterDescription: description,
})

// might need to increase the limit if i have more projects :))
const { data: otherProjects } = await useAsyncData('projects-all', () =>
  queryCollection('projects').limit(10).skip(2).all(),
)
</script>
