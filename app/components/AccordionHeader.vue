<template>
  <div class="flex-col text-start w-full space-y-2 cursor-pointer">
    <span class="flex items-center gap-4 truncate">
      <div v-if="Array.isArray(item.roles)" class="flex flex-1 flex-col">
        <UUser
          :name="item.company"
          class="group"
          :ui="{ name: 'group-hover:text-primary' }"
          :avatar="{
            icon: item.icon,
            ui: {
              root: 'bg-transparent',
              icon: 'w-6 h-6 group-hover:text-error',
            },
          }"
        />
      </div>
      <div v-else class="flex flex-1 flex-col">
        <UUser
          :name="item.title"
          :description="item.company"
          class="group"
          :ui="{ name: 'group-hover:text-primary' }"
          :avatar="{
            icon: item.icon,
            ui: {
              root: 'bg-transparent',
              icon: 'w-6 h-6 group-hover:text-error',
            },
          }"
        />
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
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
