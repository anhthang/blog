<template>
  <div>
    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-6">
      FEATURED PROEJCTS
    </h2>
    <div class="flex flex-row flex-wrap justify-between">
      <card-featured-project
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div
      v-if="showFooter"
      class="flex items-center justify-center mt-6 text-sm"
    >
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  showFooter: Boolean,
})

const { data: projects } = await useAsyncData('projects-featured', () =>
  queryContent('/projects').where({ featured: true }).limit(4).find(),
)
</script>
