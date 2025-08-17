<template>
  <UUser
    v-bind="item"
    size="lg"
    :to="item.url"
    target="_blank"
    class="group"
    :avatar="{
      icon: item.icon,
      ui: {
        icon: 'w-6 h-6 group-hover:text-error',
      },
    }"
    :ui="{
      name: 'peer-hover:text-primary',
    }"
  />
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
