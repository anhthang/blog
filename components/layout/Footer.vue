<template>
  <UHorizontalNavigation
    :links="[left, right]"
    class="border-t border-gray-200 dark:border-gray-800"
    :ui="{
      base: 'min-h-16',
      label: 'hidden md:block',
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
    iconClass: 'group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2]',
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
    iconClass: 'group-hover:text-[#6364FF] dark:group-hover:text-[#6364FF]',
  },
  {
    // name: 'Bluesky',
    to: 'https://bsky.app/profile/anhthang.org',
    target: '_blank',
    icon: 'simple-icons:bluesky',
    iconClass: 'group-hover:text-[#1083FE] dark:group-hover:text-[#1083FE]',
  },
  {
    // name: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'simple-icons:buymeacoffee',
    iconClass:
      'text-[#BD5FFF] dark:text-[#FFDD00] group-hover:text-[#BD5FFF] dark:group-hover:text-[#FFDD00]',
  },
]
</script>
