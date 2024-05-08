<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<script setup>
const config = useRuntimeConfig()
const { homepage, me, about } = config.public

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})

useSeoMeta({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} | ${me}` : me
  },
  description: about,
  ogType: 'website',
  ogUrl: homepage,
  ogTitle: me,
  ogDescription: about,
  ogImage: `${homepage}/blog.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: me,
  twitterDescription: about,
  twitterImage: `${homepage}/blog.png`,
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
