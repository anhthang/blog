<template>
  <NuxtLink :to="post.path" class="group">
    <article
      class="p-2 -m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-justify"
    >
      <time
        class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
        datetime="2022-09-05"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500">
          </span>
        </span>
        {{ getReadableDate(post.meta.published) }} -
        {{ post.meta?.readingTime.text }}
      </time>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
      >
        {{ post.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
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
