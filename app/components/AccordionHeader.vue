<template>
  <NuxtLink
    :to="item.url"
    class="flex w-full text-sm min-w-0 cursor-pointer"
    target="_blank"
    external
  >
    <div class="flex-col text-start w-full space-y-2">
      <span class="flex items-center gap-4 truncate">
        <UIcon
          :name="item.icon"
          class="flex-shrink-0 w-6 h-6 group-hover:text-error"
        />

        <div v-if="Array.isArray(item.roles)" class="flex flex-1 flex-col">
          <span class="font-medium group-hover:text-primary">
            {{ item.company }}
          </span>
        </div>
        <div v-else class="flex flex-1 flex-col">
          <span class="font-medium group-hover:text-primary">
            {{ item.title }}
          </span>
          <span class="font-medium text-dimmed">
            {{ item.company }}
          </span>
        </div>

        <span
          class="text-xs font-medium"
          :class="{
            'text-dimmed': item.end,
          }"
        >
          {{ item.start }} - {{ item.end || 'Present' }}
        </span>
      </span>

      <p
        v-if="item.description"
        class="text-sm text-muted group-hover:text-default"
      >
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
</script>
