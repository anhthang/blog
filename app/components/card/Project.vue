<template>
  <UUser
    :name="project.name"
    :description="project.description"
    size="lg"
    :to="project.url"
    target="_blank"
    :avatar="{
      icon: project.icon,
      ui: {
        icon:
          project.name === 'gitflow'
            ? 'rotate-90 group-hover:text-error'
            : 'group-hover:text-error',
      },
    }"
    :ui="{
      name: 'peer-hover:text-primary',
    }"
    class="flex hover:bg-elevated p-2 rounded-lg -m-2 group"
  />
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
