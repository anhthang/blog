<template>
  <NuxtLink
    class="flex items-center gap-8 group p-2 -m-2 rounded-lg hover:bg-(--ui-bg-elevated)"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="flex-1">
      <h3 class="text-sm font-medium group-hover:text-(--ui-primary)">
        {{ project.name }}
      </h3>
      <p class="text-(--ui-text-muted) text-sm mt-2">
        {{ project.description }}
      </p>
    </div>

    <UIcon
      :name="project.icon"
      class="flex-shrink-0 w-8 h-8 group-hover:text-(--ui-error)"
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
