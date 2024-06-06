<template>
  <NuxtLink
    class="w-1/2 flex flex-col gap-2 group p-2 -m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
    :to="project.url"
    target="_blank"
    external
  >
    <Icon :name="project.icon" class="w-8 h-8" />

    <h2
      class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
    >
      {{ project.name }}
    </h2>

    <p class="text-gray-400 text-sm">{{ project.description }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
