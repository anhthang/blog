<template>
  <UPage>
    <UPageHeader title="Building & Sharing" :description="description" />

    <FeaturedProjects />

    <OtherProjects />
  </UPage>
</template>

<script setup>
const description =
  "Though my portfolio is small, I'm passionate about the projects I chose. Some are even open-source - feel free to contribute!"

useSeoMeta({
  title: 'What I Build & Share',
  description,
  ogDescription: description,
  twitterDescription: description,
})
</script>
