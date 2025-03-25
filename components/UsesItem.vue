<template>
  <li>
    <NuxtLink
      :to="item.url"
      class="flex hover:bg-(--ui-bg-elevated) p-2 rounded-lg -m-2 text-sm min-w-0"
      target="_blank"
      external
    >
      <div class="flex-col w-full space-y-2">
        <span class="flex items-center gap-4 truncate">
          <UIcon :name="item.icon" class="flex-shrink-0 w-6 h-6" />
          <span class="flex-1 truncate">{{ item.name }}</span>
          <span class="text-xs font-medium text-(--ui-text-dimmed)">
            {{ getHost(item.url) }}
          </span>
        </span>
        <p v-if="item.description" class="text-sm text-(--ui-text-muted)">
          {{ item.description }}
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

function getHost(url) {
  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.')) {
    host = host.substring(4)
  }
  return host
}
</script>
