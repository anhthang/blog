<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-zinc-200 dark:prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params
const config = useRuntimeConfig()

useSeoMeta({
  ogType: 'article',
  ogUrl: `${config.public.homepage}/posts/${slug}`,
  articleAuthor: config.public.me,
})
</script>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
