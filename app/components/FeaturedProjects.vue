<template>
  <UPageSection
    headline="Featured"
    :links="
      showFooter
        ? [
            {
              label: 'All Projects',
              trailingIcon: 'solar:map-arrow-right-bold-duotone',
              to: '/projects',
              variant: 'ghost',
            },
          ]
        : undefined
    "
  >
    <template v-if="!showFooter" #headline>
      <CategoryHeader title="Pinned" />
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
