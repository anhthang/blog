<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-(--ui-bg-muted) prose-img:ring-1 prose-img:ring-(--ui-border) prose-img:rounded-lg"
    >
      <article>
        <h1>{{ post.title }}</h1>

        <ContentRenderer :value="post" />

        <div class="flex gap-2">
          <UBadge
            v-for="tag in post.meta.tags"
            :key="tag"
            color="neutral"
            variant="soft"
          >
            #{{ tag }}
          </UBadge>
        </div>
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
  title: post.value.title,
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
