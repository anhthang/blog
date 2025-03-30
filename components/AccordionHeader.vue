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
          class="flex-shrink-0 w-6 h-6 group-hover:text-(--ui-error)"
        />

        <div class="flex flex-1 flex-col">
          <span class="font-medium group-hover:text-(--ui-primary)">
            {{ item.title }}
          </span>
          <span class="font-medium text-(--ui-text-dimmed)">
            {{ item.company }}
          </span>
        </div>

        <span
          class="text-xs font-medium"
          :class="{
            'text-(--ui-text-dimmed)': item.end,
          }"
        >
          {{ item.start }} - {{ item.end || 'Present' }}
        </span>
      </span>

      <p v-if="item.summary" class="text-sm text-(--ui-text-muted)">
        {{ item.summary }}
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
