<template>
  <main class="min-h-screen">
    <page-header
      class="mb-16"
      title="Hey, I'm Anh Thang 👋"
      :description="description"
    />
    <div class="space-y-16">
      <ul
        v-for="({ title, body: items }, id) in data"
        :key="id"
        class="space-y-4"
      >
        <uses-header :title="title" />
        <experience-item v-for="(item, idx) in items" :key="idx" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  'Experienced Full-Stack Software Engineer with a proven track record in architecting, developing, and deploying scalable web applications. Proficient in Node.js, ReactJS, VueJS, and cloud technologies (AWS, GCP). Passionate about building innovative solutions for travel, e-commerce, and fintech.'

useSeoMeta({
  title: 'Resume',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('resume-all', () =>
  queryContent('/resume').find(),
)
</script>
