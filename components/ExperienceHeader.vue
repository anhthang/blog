<template>
  <li>
    <NuxtLink
      :to="item.url"
      class="flex text-sm min-w-0"
      target="_blank"
      external
    >
      <div class="flex-col w-full space-y-2">
        <span
          class="flex items-center gap-4 truncate text-gray-700 dark:text-gray-200"
        >
          <UIcon :name="item.icon" class="flex-shrink-0 w-6 h-6" />
          <div class="flex flex-1 flex-col">
            <span class="font-bold">
              {{ item.title }}
            </span>
            <span class="font-medium text-gray-400 dark:text-gray-600">
              {{ item.company }}
            </span>
          </div>
          <span
            class="text-xs font-medium"
            :class="{
              'text-gray-400 dark:text-gray-600': item.end,
            }"
          >
            {{ item.start }} - {{ item.end || 'Present' }}
          </span>
        </span>
        <p v-if="item.summary" class="text-sm text-gray-500">
          {{ item.summary }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
