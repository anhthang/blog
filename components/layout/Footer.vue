<template>
  <UHorizontalNavigation
    :links="[left, right]"
    class="border-t border-gray-200 dark:border-gray-800"
    :ui="{
      wrapper: 'mx-auto px-2 sm:px-4 lg:px-6 max-w-3xl',
      base: 'min-h-16',
      label: 'hidden md:block',
    }"
  />
</template>

<script setup>
const config = useRuntimeConfig()

const left = [
  {
    label: `${new Date().getFullYear()} ${config.public.me}`,
    icon: 'i-iconoir-copyright',
  },
]

const right = [
  {
    // name: 'GitHub',
    to: 'https://github.com/anhthang',
    target: '_blank',
    icon: 'i-iconoir-github',
  },
  {
    // name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/buianhthang/',
    target: '_blank',
    icon: 'i-iconoir-linkedin',
    iconClass: 'group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2]',
  },
  {
    // name: 'X',
    to: 'https://twitter.com/anhthangbui',
    target: '_blank',
    icon: 'i-iconoir-x',
  },
  {
    // name: 'Mastodon',
    to: 'https://mastodon.social/@anhthang',
    target: '_blank',
    icon: 'i-iconoir-mastodon',
    iconClass: 'group-hover:text-[#6364FF] dark:group-hover:text-[#6364FF]',
  },
  {
    // label: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'i-iconoir-coffee-cup',
    iconClass:
      'text-[#BD5FFF] dark:text-[#FFDD00] group-hover:text-[#BD5FFF] dark:group-hover:text-[#FFDD00]',
  },
]
</script>
