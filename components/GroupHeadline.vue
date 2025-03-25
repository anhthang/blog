<template>
  <li>
    <div
      class="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-(--ui-bg-elevated) after:w-full after:left-0 after:right-0"
    >
      <span class="font-medium text-md text-(--ui-text-toned) pr-4">
        {{ title }}
      </span>
    </div>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
