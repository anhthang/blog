<template>
  <div>
    <h1
      class="text-2xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-300 to-indigo-600 dark:from-amber-200 dark:to-rose-500 text-transparent bg-clip-text"
    >
      {{ title }}
    </h1>
    <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
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
