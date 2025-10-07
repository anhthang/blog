export default defineAppConfig({
  ui: {
    icons: {
      arrowDown: 'hugeicons:arrow-down-02',
      arrowLeft: 'hugeicons:arrow-left-02',
      arrowRight: 'hugeicons:arrow-right-02',
      arrowUp: 'hugeicons:arrow-up-02',
      check: 'hugeicons:tick-02',
      chevronDoubleLeft: 'hugeicons:arrow-left-double',
      chevronDoubleRight: 'hugeicons:arrow-right-double',
      chevronDown: 'hugeicons:arrow-down-01',
      chevronLeft: 'hugeicons:arrow-left-01',
      chevronRight: 'hugeicons:arrow-right-01',
      chevronUp: 'hugeicons:arrow-up-01',
      close: 'hugeicons:cancel-01',
      external: 'hugeicons:arrow-up-right-01',
      search: 'hugeicons:search-01',
      system: 'hugeicons:computer',
      light: 'hugeicons:sun-02',
      dark: 'hugeicons:moon-02',
      ellipsis: 'hugeicons:more-horizontal',
      file: 'hugeicons:file-01',
      folder: 'hugeicons:folder-01',
      folderOpen: 'hugeicons:folder-02',
      loading: 'hugeicons:loading-03',
      minus: 'hugeicons:minus-sign',
      plus: 'hugeicons:plus-sign',
      upload: 'hugeicons:upload-03',
      caution: 'hugeicons:alert-circle',
      copy: 'hugeicons:copy-01',
      copyCheck: 'hugeicons:tick-double-02',
      error: 'hugeicons:cancel-circle',
      eye: 'hugeicons:view',
      eyeOff: 'hugeicons:view-off-slash',
      hash: 'hugeicons:grid',
      info: 'hugeicons:information-circle',
      menu: 'hugeicons:menu-01',
      panelClose: 'hugeicons:sidebar-left-01',
      panelOpen: 'hugeicons:sidebar-right-01',
      reload: 'hugeicons:rotate-clockwise',
      stop: 'hugeicons:square',
      success: 'hugeicons:checkmark-circle-02',
      tip: 'hugeicons:idea-01',
      warning: 'hugeicons:alert-02',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
        variant: 'soft',
      },
    },
    pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8',
    },
    pageHeader: {
      slots: {
        root: 'border-none',
        title:
          'text-2xl sm:text-3xl bg-gradient-to-r from-red-300 via-pink-400 to-violet-600 dark:from-amber-200 dark:to-rose-400 text-transparent bg-clip-text',
        description: 'text-md',
      },
    },
    pageSection: {
      slots: {
        container: '!px-0 py-4 sm:py-6 lg:py-8',
      },
      variants: {
        orientation: {
          vertical: {
            features: 'lg:grid-cols-2 gap-4',
          },
        },
      },
      compoundVariants: [
        {
          orientation: 'vertical',
          title: true,
          class: {
            body: 'mt-8',
          },
        },
        {
          orientation: 'vertical',
          description: true,
          class: {
            body: 'mt-8',
          },
        },
        {
          orientation: 'vertical',
          body: true,
          class: {
            footer: 'mt-8',
          },
        },
      ],
    },
  },
})
