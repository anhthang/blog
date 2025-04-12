<template>
  <NuxtLink :to="post.path" class="group">
    <article
      class="p-2 -m-2 rounded-lg hover:bg-(--ui-bg-elevated) text-justify"
    >
      <time
        class="relative z-10 order-first mb-2 flex items-center text-xs text-(--ui-text-dimmed) pl-3.5"
        datetime="2022-09-05"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-(--ui-bg-accented)"> </span>
        </span>
        {{ getReadableDate(post.meta.published) }} -
        {{ post.meta?.readingTime.text }}
      </time>
      <h2
        class="font-semibold font-display tracking-tight group-hover:text-(--ui-primary)"
      >
        {{ post.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-(--ui-text-muted)">
        {{ post.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const getReadableDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
