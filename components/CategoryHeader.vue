<template>
  <div class="relative flex items-center">
    <span class="font-medium text-(--ui-text-toned) pr-4">
      {{ title }}
    </span>
    <div class="flex-1 h-px bg-(--ui-bg-elevated)"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
