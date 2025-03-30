<template>
  <main>
    <PageHeader
      class="mb-16"
      title="Building & Sharing"
      :description="description"
    />

    <FeaturedProjects class="mb-16" />

    <h2 class="uppercase text-sm font-semibold text-(--ui-text-dimmed) mb-6">
      OTHER PROJECTS
    </h2>

    <div class="flex flex-col gap-4">
      <CardProject
        v-for="({ meta: project }, id) in otherProjects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "Though my portfolio is small, I'm passionate about the projects I chose. Some are even open-source - feel free to contribute!"

useSeoMeta({
  title: 'Projects',
  description,
  ogDescription: description,
  twitterDescription: description,
})

// might need to increase the limit if i have more projects :))
const { data: otherProjects } = await useAsyncData('projects-all', () =>
  queryCollection('projects').limit(10).skip(2).all(),
)
</script>
