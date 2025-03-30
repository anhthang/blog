<template>
  <div class="space-y-6 relative">
    <h2 class="uppercase text-sm font-semibold text-(--ui-text-dimmed)">
      FEATURED PROJECTS
    </h2>

    <div class="flex flex-row flex-wrap justify-between">
      <CardFeaturedProject
        v-for="({ meta: project }, id) in projects"
        :key="id"
        :project="project"
      />
    </div>

    <div v-if="showFooter" class="flex items-center justify-center text-sm">
      <UButton
        label="All Projects"
        to="/projects"
        color="neutral"
        variant="ghost"
        trailing-icon="solar:arrow-right-outline"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  showFooter: Boolean,
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').limit(2).all(),
)
</script>
