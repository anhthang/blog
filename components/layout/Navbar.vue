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
        icon="hugeicons:search-01"
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
    icon: 'hugeicons:home-01',
  },
]

const middle = computed(() => [
  {
    label: 'Projects',
    to: '/projects',
    icon: 'hugeicons:repository',
  },
  {
    label: 'Posts',
    to: '/posts',
    active: route.path.startsWith('/posts'),
    icon: 'hugeicons:note-edit',
  },
  {
    label: 'Uses',
    to: '/uses',
    icon: 'hugeicons:shopping-bag-favorite',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'hugeicons:user-status',
  },
])

const right = computed(() => [
  {
    icon: isDark.value ? 'hugeicons:moon-02' : 'hugeicons:sun-01',
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
    items: [
      ...middle.value,
      {
        label: 'Now',
        to: '/now',
        icon: 'hugeicons:pulse-02',
      },
    ],
  },
  {
    id: 'theme',
    label: 'Theme',
    items: [
      {
        label: 'System',
        value: 'system',
        icon: 'hugeicons:computer-settings',
        disabled: colorMode.preference === 'system',
      },
      {
        label: 'Light',
        value: 'light',
        icon: 'hugeicons:sun-01',
        disabled: colorMode.preference === 'light',
      },
      {
        label: 'Dark',
        value: 'dark',
        icon: 'hugeicons:moon-02',
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
        icon: 'hugeicons:mail-at-sign-02',
      },
      {
        label: 'Buy Me a Coffee',
        to: 'https://www.buymeacoffee.com/anhthang',
        target: '_blank',
        icon: 'hugeicons:coffee-02',
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
