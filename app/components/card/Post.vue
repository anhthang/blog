<template>
  <UPageCard
    :title="post.title"
    :description="post.description"
    :to="post.path"
    variant="ghost"
    class="group flex hover:bg-muted p-2 rounded-lg -m-2"
    :ui="{
      container: '!p-0',
      title: 'group-hover:text-primary',
    }"
  >
    <template #leading>
      <time
        class="relative z-10 order-first flex items-center text-xs text-dimmed pl-3.5"
        datetime="2022-09-05"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-accented"> </span>
        </span>
        {{ getReadableDate(post.meta.published) }} -
        {{ post.meta?.readingTime.text }}
      </time>
    </template>
  </UPageCard>
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
