<template>
  <main class="min-h-screen">
    <page-header class="mb-12" title="Projects" :description="description" />
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
  "While I may not have a vast portfolio, I'm particularly proud of the projects I've chosen to focus on. Some of these are even open-source, and I'd welcome your contributions to help them grow further!"

useSeoMeta({
  title: 'Projects',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent('/projects').find(),
)
</script>
