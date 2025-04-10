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
    icon: 'simple-icons:github',
  },
  {
    // name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/buianhthang/',
    target: '_blank',
    icon: 'simple-icons:linkedin',
  },
  {
    // name: 'Mastodon',
    to: 'https://mastodon.social/@anhthang',
    target: '_blank',
    icon: 'simple-icons:mastodon',
  },
  {
    // name: 'Bluesky',
    to: 'https://bsky.app/profile/anhthang.org',
    target: '_blank',
    icon: 'simple-icons:bluesky',
  },
  {
    // name: 'Instagram',
    to: 'https://www.instagram.com/anhthangbui',
    target: '_blank',
    icon: 'simple-icons:instagram',
  },
  {
    // name: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'simple-icons:buymeacoffee',
  },
]
</script>
