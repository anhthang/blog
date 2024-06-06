<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p class="text-gray-400 text-sm">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    ></div>
    <Icon :name="project.icon" class="w-8 h-8" />
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
