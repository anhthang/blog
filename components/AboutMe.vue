<template>
  <div class="space-y-6 relative text-justify">
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
    <p class="text-gray-900 dark:text-gray-400">
      I'm Thang, a {{ current.title }} at {{ current.company }}.
      {{ config.public.about }}
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      This blog is my outlet to share experiences and discoveries I find
      valuable. Stay tuned for exciting updates!
    </p>

    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        color="gray"
        variant="ghost"
        class="hover:bg-gray-100"
        @click="() => (isOpen = true)"
      >
        Press
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
        for Quick Links
      </UButton>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { metaSymbol } = useShortcuts()

const isOpen = useState('open-cmd')

useSeoMeta({
  description: config.public.about,
})

const { data } = await useAsyncData('experience', () =>
  queryCollection('profiles').where('id', 'LIKE', '%experience%').first(),
)

const [current] = data.value.meta.body
</script>
