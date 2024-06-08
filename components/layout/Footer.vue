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
    label: `© ${new Date().getFullYear()} ${config.public.me}`,
  },
]

const right = [
  {
    // name: 'GitHub',
    to: 'https://github.com/anhthang',
    icon: 'i-iconoir-github',
  },
  {
    // name: 'X',
    to: 'https://twitter.com/anhthangbui',
    icon: 'i-iconoir-x',
  },
  {
    // name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/buianhthang/',
    icon: 'i-iconoir-linkedin',
    iconClass: 'group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2]',
  },
  {
    // name: 'Telegram',
    to: 'https://t.me/buianhthang',
    icon: 'i-iconoir-telegram',
    iconClass: 'group-hover:text-[#26A5E4] dark:group-hover:text-[#26A5E4]',
  },
  {
    // name: 'Mastodon',
    to: 'https://mastodon.social/@anhthang',
    icon: 'i-iconoir-mastodon',
    iconClass: 'group-hover:text-[#6364FF] dark:group-hover:text-[#6364FF]',
  },
  {
    // name: 'Buy Me A Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    icon: 'i-iconoir-coffee-cup',
    iconClass:
      'text-[#BD5FFF] dark:text-[#FFDD00] group-hover:text-[#BD5FFF] dark:group-hover:text-[#FFDD00]',
  },
]
</script>
