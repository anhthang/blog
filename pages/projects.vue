<template>
  <main class="min-h-screen">
    <page-header
      class="mb-12"
      title="Building & Sharing"
      :description="description"
    />

    <featured-projects class="mb-12" />

    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-6">
      ALL PROEJCTS
    </h2>
    <div class="space-y-4">
      <card-project
        v-for="(project, id) in projects"
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

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent('/projects')
    .where({ featured: { $not: true } })
    .find(),
)
</script>
