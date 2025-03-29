<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="[left, middle, right]"
    class="border-b border-neutral-200 dark:border-neutral-800"
    :ui="{
      linkLabel: 'hidden md:block',
      linkLeadingIcon: 'group-data-[active]:text-(--ui-error)',
    }"
  />

  <UModal v-model:open="isOpen">
    <template #content>
      <UCommandPalette
        :groups="groups"
        icon="solar:magnifer-outline"
        @update:model-value="onCommandClick"
      />
    </template>
  </UModal>
</template>

<script setup>
const colorMode = useColorMode()
const route = useRoute()

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
    icon: 'solar:home-angle-outline',
  },
]

const middle = computed(() => [
  {
    label: 'Projects',
    to: '/projects',
    icon: 'solar:folder-with-files-outline',
  },
  {
    label: 'Posts',
    to: '/posts',
    active: route.path.startsWith('/posts'),
    icon: 'solar:document-add-outline',
  },
  {
    label: 'Uses',
    to: '/uses',
    icon: 'solar:backpack-outline',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'solar:user-circle-outline',
  },
])

const right = computed(() => [
  {
    icon: isDark.value
      ? 'solar:moon-stars-bold-duotone'
      : 'solar:sun-line-duotone',
    class: 'cursor-pointer',
    onSelect: () => {
      isDark.value = !isDark.value
    },
  },
])

// command palette
const groups = computed(() => [
  {
    id: 'links',
    label: 'Go to',
    items: middle.value,
  },
  {
    id: 'theme',
    label: 'Theme',
    items: [
      {
        label: 'System',
        value: 'system',
        icon: 'solar:laptop-minimalistic-line-duotone',
        disabled: colorMode.preference === 'system',
      },
      {
        label: 'Light',
        value: 'light',
        icon: 'solar:sun-line-duotone',
        disabled: colorMode.preference === 'light',
      },
      {
        label: 'Dark',
        value: 'dark',
        icon: 'solar:moon-stars-bold-duotone',
        disabled: colorMode.preference === 'dark',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    items: [
      {
        label: 'bui at anhthang dot org',
        to: 'mailto:bui@anhthang.org',
        icon: 'solar:inbox-line-outline',
      },
      {
        label: 'Buy Me a Coffee',
        to: 'https://www.buymeacoffee.com/anhthang',
        target: '_blank',
        icon: 'solar:tea-cup-outline',
      },
    ],
  },
])

const onCommandClick = (command) => {
  if (!command.to) {
    colorMode.preference = command.value
  }

  toggleCmd()
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: toggleCmd,
  },
})
</script>
