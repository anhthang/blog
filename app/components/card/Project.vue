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
            ? 'rotate-90 w-6 h-6 group-hover:text-error'
            : 'w-6 h-6 group-hover:text-error',
      },
    }"
    :ui="{
      name: 'peer-hover:text-primary',
    }"
    class="group"
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
