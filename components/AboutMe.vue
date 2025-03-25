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
    <p class="text-(--ui-text-highlighted)">
      I'm Thang, a {{ current.title }} based in Hanoi, Vietnam, currently
      working at {{ current.company }} (previously at {{ previous.company }}).
    </p>
    <p class="text-(--ui-text-highlighted)">
      {{ config.public.about }}
    </p>
    <p class="text-(--ui-text-highlighted)">
      This blog is my outlet to share experiences and discoveries I find
      valuable. Stay tuned for exciting updates!
    </p>

    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton color="neutral" variant="ghost" @click="() => (isOpen = true)">
        Press
        <UKbd value="meta" />
        <UKbd>K</UKbd>
        for Quick Links
      </UButton>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const isOpen = useState('open-cmd')

useSeoMeta({
  description: config.public.about,
})

const { data } = await useAsyncData('experience', () =>
  queryCollection('profiles').where('id', 'LIKE', '%experience%').first(),
)

const [current, previous] = data.value.meta.body
</script>
