<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="prose dark:prose-invert prose-pre:bg-muted prose-pre:whitespace-pre-wrap max-w-none"
    v-html="highlighted"
  />
</template>

<script setup>
const { code, lang } = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: 'yaml',
  },
})

const colorMode = useColorMode()

const dark = await useShiki(code, lang, 'dracula-soft')
const light = await useShiki(code, lang, 'catppuccin-latte')

const highlighted = computed(() => (colorMode.value === 'dark' ? dark : light))
</script>
