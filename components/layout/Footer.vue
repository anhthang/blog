<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="[left, right]"
    class="border-t border-neutral-200 dark:border-neutral-800"
    :ui="{
      linkLabel: 'hidden md:block',
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
  // {
  //   // name: 'X',
  //   to: 'https://twitter.com/anhthangbui',
  //   target: '_blank',
  //   icon: 'simple-icons:x',
  // },
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
    // name: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'simple-icons:buymeacoffee',
  },
]
</script>
