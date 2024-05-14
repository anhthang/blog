<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <UHorizontalNavigation
      :links="[left, middle, right]"
      :ui="{
        wrapper: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl',
        container:
          'flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5',
      }"
    />
  </div>
</template>

<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'
const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const left = [
  {
    to: '/',
    avatar: {
      src: '/avatar.jpg',
    },
  },
]

const middle = [
  {
    label: 'Projects',
    to: '/projects',
    icon: 'i-solar-folder-with-files-outline',
  },
  {
    label: 'Posts',
    to: '/posts',
    icon: 'i-solar-document-add-outline',
  },
]

const right = computed(() => [
  {
    icon: isDark.value
      ? 'i-line-md-moon-rising-filled-alt-loop'
      : 'i-line-md-moon-to-sunny-outline-loop-transition',
    iconClass: 'text-gray-700 dark:text-gray-200', // display as active
    click: () => {
      isDark.value = !isDark.value
    },
  },
])
</script>
