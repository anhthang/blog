<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.jpg"
      :alt="$config.public.me"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
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
