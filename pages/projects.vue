<template>
  <main>
    <page-header
      class="mb-16"
      title="Building & Sharing"
      :description="description"
    />

    <featured-projects class="mb-16" />

    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-6">
      OTHER PROJECTS
    </h2>
    <div class="space-y-4">
      <card-project
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

const { data: projects } = await useAsyncData('projects-all', () =>
  queryCollection('projects').all(),
)

// temporary fix until we can do where query to filter data with collection type
const otherProjects = computed(() =>
  projects.value.filter((p) => !p.meta.featured),
)
</script>
