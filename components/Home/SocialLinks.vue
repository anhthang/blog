<template>
  <div>
    <h2 class="uppercase text-sm font-semibold text-gray-400 mb-4">
      FIND ME ON
    </h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <UIcon :name="link.icon" class="w-6 h-6" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/anhthang',
    icon: 'i-line-md-github',
  },
  {
    name: 'X',
    url: 'https://twitter.com/anhthangbui',
    icon: 'i-line-md-twitter-x',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/buianhthang/',
    icon: 'i-line-md-linkedin',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/buianhthang',
    icon: 'i-line-md-telegram',
  },
  {
    name: 'Mastodon',
    url: 'https://mastodon.social/@anhthang',
    icon: 'i-line-md-mastodon',
  },
]
</script>
