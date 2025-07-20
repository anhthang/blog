<template>
  <div class="text-justify">
    <h1 class="text-2xl font-bold tracking-tight">
      <span
        class="bg-gradient-to-r from-red-300 via-pink-400 to-violet-600 dark:from-amber-200 dark:to-rose-400 text-transparent bg-clip-text"
      >
        {{ title }}
      </span>
    </h1>

    <p class="mt-6 text-(--ui-text-toned)">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
