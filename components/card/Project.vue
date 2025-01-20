<template>
  <NuxtLink
    class="flex items-center gap-4 group p-2 -m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="flex-1">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p class="text-gray-400 text-sm">{{ project.description }}</p>
    </div>

    <UIcon
      :name="project.icon"
      class="flex-shrink-0 w-8 h-8"
      :class="{
        'rotate-90': project.name === 'gitflow',
      }"
    />
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
