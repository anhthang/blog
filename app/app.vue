<template>
  <UApp>
    <NuxtLoadingIndicator color="#14b8a6" />
    <div class="flex flex-col gap-8 min-h-screen max-w-3xl mx-auto px-4">
      <LayoutNavbar />

      <NuxtPage class="flex-1" />

      <LayoutFooter />
    </div>
  </UApp>
</template>

<script setup>
const config = useRuntimeConfig()
const { homepage, me, about } = config.public

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
