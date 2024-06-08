<template>
  <div class="space-y-6 relative">
    <h1 class="text-2xl font-mono font-bold tracking-tight">
      <span
        class="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text"
      >
        $ whoami
      </span>
    </h1>
    <NuxtImg
      src="/avatar.jpg"
      :alt="config.public.me"
      class="float-left w-20 h-20 md:w-32 md:h-32 rounded-full mr-4 mb-4 md:mr-6 md:mb-6"
    />
    <p class="text-gray-900 dark:text-gray-400">{{ config.public.about }}</p>
    <p class="text-gray-900 dark:text-gray-400">
      This blog is my outlet to share experiences and discoveries I find
      valuable. Stay tuned for exciting updates!
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useSeoMeta({
  description: config.public.about,
})
</script>
