<template>
  <UPageSection>
    <template #headline>
      <CategoryHeader title="Others" />
    </template>

    <template #body>
      <UPageList class="gap-6">
        <CardProject
          v-for="({ meta: project }, id) in projects"
          :key="id"
          :project="project"
        />
      </UPageList>
    </template>
  </UPageSection>
</template>

<script setup>
const { data: projects } = await useAsyncData('projects-all', () =>
  queryCollection('projects').limit(10).skip(2).all(),
)
</script>
