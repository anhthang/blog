<template>
  <UPageSection
    :ui="{
      container: '!px-0 py-8 sm:py-12 lg:py-16',
    }"
    :links="
      showFooter
        ? [
            {
              label: 'All Projects',
              trailingIcon: 'hugeicons:arrow-right-02',
              to: '/projects',
              variant: 'ghost',
            },
          ]
        : undefined
    "
  >
    <template #headline>
      <CategoryHeader :title="showFooter ? 'Featured Projects' : 'Pinned'" />
    </template>

    <template #features>
      <CardFeaturedProject
        v-for="({ meta: project }, id) in projects"
        :key="id"
        :project="project"
      />
    </template>
  </UPageSection>
</template>

<script lang="ts" setup>
defineProps({
  showFooter: Boolean,
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').limit(2).all(),
)
</script>
