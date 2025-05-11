<template>
  <main>
    <PageHeader :title :description />

    <p class="mt-3 mb-16 text-sm text-(--ui-text-dimmed)">
      Inspired by
      <NuxtLink to="https://sive.rs/now" target="_blank" class="underline">
        Derek Sivers</NuxtLink
      >
      and the
      <NuxtLink to="https://nownownow.com" target="_blank" class="underline">
        /now</NuxtLink
      >
      movement. You can make one too at
      <NuxtLink
        to="https://nownownow.com/about"
        target="_blank"
        class="underline"
      >
        nownownow.com/about
      </NuxtLink>
    </p>

    <UAccordion
      v-model="active"
      :items="items"
      type="multiple"
      :ui="{
        label: 'text-base font-semibold',
        trailingIcon: 'hidden',
      }"
    >
      <template #listening="{ item }">
        <iframe
          style="border-radius: 12px"
          :src="item.content"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          class="mb-3.5"
        />
      </template>
    </UAccordion>
  </main>
</template>

<script setup>
const title = 'Beyond the Terminal'
const description =
  "Life's not all about deployments and pipelines — here's what I'm currently vibing with: music, thoughts, and whatever feels right."

const items = [
  {
    label: 'Daily Flow',
    icon: 'hugeicons:pulse-02',
    content: 'Enjoying 1-2 coffee per day, then diving into work.',
  },
  {
    label: 'Now Playing',
    icon: 'hugeicons:playlist-02',
    slot: 'listening',
    content:
      'https://open.spotify.com/embed/track/1XZE0InCx3SdCnLpVsPpZl?utm_source=generator',
  },
  // {
  //   label: 'Pages Open',
  //   icon: 'hugeicons:collections-bookmark',
  // },
  // {
  //   label: 'Small Joys',
  //   icon: 'hugeicons:bubble-tea-01',
  // },
  {
    label: 'On My Mind',
    icon: 'hugeicons:ai-idea',
    content:
      "I want to learn Chinese... but I'm currently in my lazy arc. We'll see.",
  },
]

const active = items.map((i, idx) => idx.toString())

useSeoMeta({
  title: "What I'm Doing Now",
  description,
  ogDescription: description,
  twitterDescription: description,
})
</script>
