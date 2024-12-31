<template>
  <li>
    <NuxtLink
      :to="item.url"
      class="flex hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
      target="_blank"
      external
    >
      <div class="flex-col w-full space-y-2">
        <span
          class="flex items-center gap-4 truncate text-gray-700 dark:text-gray-200"
        >
          <Icon :name="item.icon" class="w-6 h-6" />
          <strong>{{ item.title }}</strong> @ {{ item.company }}
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ item.start }} - {{ item.end }}
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
