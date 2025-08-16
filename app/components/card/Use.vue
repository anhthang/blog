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
        icon: 'group-hover:text-error',
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
