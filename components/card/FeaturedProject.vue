<template>
  <NuxtLink
    class="w-1/2 flex flex-col gap-2 group p-2 -m-2 rounded-lg hover:bg-(--ui-bg-elevated)"
    :to="project.url"
    target="_blank"
    external
  >
    <UIcon :name="project.icon" class="w-8 h-8 group-hover:text-(--ui-error)" />

    <h2
      class="font-semibold font-display tracking-tight group-hover:text-(--ui-primary)"
    >
      {{ project.name }}
    </h2>

    <p class="text-(--ui-text-muted) text-sm">{{ project.description }}</p>
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
