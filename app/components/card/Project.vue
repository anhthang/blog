<template>
  <UUser
    v-bind="project"
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
    class="flex hover:bg-muted p-2 rounded-lg -m-2 group"
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
