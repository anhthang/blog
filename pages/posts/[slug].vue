<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-zinc-200 dark:prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article>
        <h1>{{ post.title }}</h1>
        <ContentRenderer :value="post" />
      </article>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryCollection('posts').path(route.path).first(),
)

useSeoMeta({
  ogType: 'article',
  ogUrl: `${config.public.homepage}${route.path}`,
  articleAuthor: config.public.me,
})
</script>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
