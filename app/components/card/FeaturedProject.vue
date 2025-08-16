<template>
  <UUser
    :name="project.name"
    :description="project.description"
    size="xl"
    orientation="vertical"
    :to="project.url"
    target="_blank"
    class="group"
    :avatar="{
      icon: project.icon,
      ui: {
        root: 'rounded-none bg-transparent',
        icon: 'w-8 h-8 group-hover:text-error transition-transform duration-[2000ms] ease-in-out group-hover:rotate-[360deg]',
      },
    }"
    :ui="{
      name: 'font-bold peer-hover:text-primary',
    }"
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
