<template>
  <UHorizontalNavigation
    :links="[left, middle, right]"
    class="border-b border-gray-200 dark:border-gray-800"
    :ui="{
      wrapper: 'mx-auto px-2 sm:px-4 lg:px-6 max-w-3xl',
      // container:
      //   'flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5',
      base: 'min-h-16',
      label: 'hidden md:block',
    }"
  />

  <UModal v-model="isOpen">
    <UCommandPalette
      :autoselect="false"
      :groups="groups"
      icon="i-solar-magnifer-outline"
      @update:model-value="onCommandClick"
    />
  </UModal>
</template>

<script setup>
const colorMode = useColorMode()
const router = useRouter()

const isOpen = useState('open-cmd', () => false)

const toggleCmd = () => {
  isOpen.value = !isOpen.value
}

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
    icon: 'i-solar-home-angle-outline',
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
  {
    label: 'Uses',
    to: '/uses',
    icon: 'i-solar-backpack-outline',
  },
]

const right = computed(() => [
  {
    icon: isDark.value
      ? 'i-solar-moon-stars-bold-duotone'
      : 'i-solar-sun-line-duotone',
    iconClass: 'text-gray-700 dark:text-gray-200', // display as active
    click: () => {
      isDark.value = !isDark.value
    },
  },
])

// command palette
const groups = computed(() => [
  {
    key: 'links',
    label: 'Go to',
    commands: middle.map((link) => ({ ...link, id: link.label.toLowerCase() })),
  },
  {
    key: 'theme',
    label: 'Theme',
    commands: [
      {
        id: 'system',
        label: 'System',
        icon: 'i-solar-laptop-minimalistic-line-duotone',
        disabled: colorMode.preference === 'system',
      },
      {
        id: 'light',
        label: 'Light',
        icon: 'i-solar-sun-line-duotone',
        disabled: colorMode.preference === 'light',
      },
      {
        id: 'dark',
        label: 'Dark',
        icon: 'i-solar-moon-stars-bold-duotone',
        disabled: colorMode.preference === 'dark',
      },
    ],
  },
  {
    key: 'coffee',
    label: 'Contact',
    commands: [
      {
        id: 'email',
        label: 'bui at anhthang dot org',
        to: 'mailto:bui@anhthang.org',
        icon: 'i-solar-inbox-line-outline',
      },
      {
        id: 'buymeacoffee',
        label: 'Buy Me a Coffee',
        to: 'https://www.buymeacoffee.com/anhthang',
        icon: 'i-solar-tea-cup-outline',
      },
    ],
  },
])

const onCommandClick = (command) => {
  switch (command.group) {
    case 'links':
      toggleCmd()
      router.push(command.to)
      break
    case 'theme':
      colorMode.preference = command.id
      break
    case 'coffee':
      toggleCmd()
      window.open(command.to)
      break
    default:
      break
  }
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: toggleCmd,
  },
})
</script>
