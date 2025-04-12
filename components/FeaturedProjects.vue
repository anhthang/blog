<template>
  <div class="space-y-6 relative">
    <CategoryHeader :title="showFooter ? 'Featured Projects' : 'Pinned'" />

    <div class="flex flex-col gap-6 md:flex-row flex-wrap justify-between">
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
