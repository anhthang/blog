<template>
  <div class="relative flex flex-wrap gap-4 items-center">
    <span class="font-medium text-(--ui-text-dimmed)">
      {{ title }}
    </span>
    <div class="flex-1 h-px bg-(--ui-bg-elevated)"></div>
    <span
      v-if="description"
      class="text-xs text-(--ui-text-dimmed) w-full sm:w-auto"
    >
      {{ description }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
