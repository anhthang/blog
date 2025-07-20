<template>
  <NuxtLink
    :to="item.url"
    class="flex hover:bg-(--ui-bg-elevated) p-2 rounded-lg -m-2 text-sm min-w-0 group"
    target="_blank"
    external
  >
    <div class="flex-col w-full space-y-2">
      <span class="flex items-center gap-4 truncate">
        <UIcon
          :name="item.icon"
          class="flex-shrink-0 w-6 h-6 group-hover:text-(--ui-error)"
        />

        <span
          class="flex-1 font-medium truncate group-hover:text-(--ui-primary)"
        >
          {{ item.name }}
        </span>

        <span class="text-xs font-medium text-(--ui-text-dimmed)">
          {{ getHost(item.url) }}
        </span>
      </span>

      <p v-if="item.description" class="text-sm text-(--ui-text-muted)">
        {{ item.description }}
      </p>
    </div>
  </NuxtLink>
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
