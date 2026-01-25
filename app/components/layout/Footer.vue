<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="[left, right]"
    class="border-t border-neutral-200 dark:border-neutral-800 justify-center md:justify-between"
    :ui="{
      // hide first child (left items) on mobile using arbitrary selector
      root: '[&>div:first-child]:hidden md:[&>div:first-child]:block',
    }"
  />
</template>

<script setup>
const config = useRuntimeConfig()

const left = [
  {
    label: `©${new Date().getFullYear()} ${config.public.me}`,
  },
]

const right = [
  {
    // name: 'GitHub',
    to: 'https://github.com/anhthang',
    target: '_blank',
    icon: 'hugeicons:github',
  },
  {
    // name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/buianhthang/',
    target: '_blank',
    icon: 'hugeicons:linkedin-01',
  },
  {
    // name: 'Mastodon',
    to: 'https://mastodon.social/@anhthang',
    target: '_blank',
    icon: 'hugeicons:mastodon',
  },
  {
    // name: 'Bluesky',
    to: 'https://bsky.app/profile/anhthang.org',
    target: '_blank',
    icon: 'hugeicons:bluesky',
  },
  {
    // name: 'Instagram',
    to: 'https://www.instagram.com/anhthangbui',
    target: '_blank',
    icon: 'hugeicons:instagram',
  },
  {
    // name: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'hugeicons:bubble-tea-02',
  },
]
</script>
