<template>
  <div class="relative flex flex-wrap gap-4 items-center">
    <span class="font-medium text-muted flex-1">
      {{ title }}
    </span>

    <span v-if="description" class="text-xs text-dimmed w-full sm:w-auto">
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
