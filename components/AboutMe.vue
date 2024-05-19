<template>
  <div class="space-y-6 relative">
    <NuxtImg
      src="/avatar.jpg"
      :alt="config.public.me"
      class="float-left w-32 h-32 rounded-full mr-6 mb-6"
    />
    <h1
      class="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">{{ config.public.about }}</p>
    <p class="text-gray-900 dark:text-gray-400">
      This website was born from my desire to chronicle my experiences and share
      intriguing discoveries worth holding onto. Though the content library is
      still expanding (thanks to a persistent case of wanderlust!), I'm fully
      committed to bringing you even more valuable content in the near future.
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useSeoMeta({
  description: config.public.about,
})
</script>
