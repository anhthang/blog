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
          <Icon :name="item.icon" class="flex-shrink-0 w-8 h-8" />
          <div class="flex flex-1 flex-col">
            <span class="font-bold truncate">
              {{ item.title }}
            </span>
            <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
              {{ item.start }} - {{ item.end }}
            </span>
          </div>
          <span
            class="text-xs font-medium text-gray-400 dark:text-gray-600 flex items-center gap-1"
          >
            <Icon name="i-solar-buildings-2-line-duotone" class="w-4 h-4" />
            {{ item.company }}
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
