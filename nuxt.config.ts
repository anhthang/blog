export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased bg-gray-50 dark:bg-black min-h-screen',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // bundled in @nuxt/ui
  colorMode: {
    preference: 'dark',
  },

  content: {
    database: {
      type: 'd1',
      binding: 'BLOG_DB',
    },
    build: {
      markdown: {
        remarkPlugins: { 'remark-reading-time': {} },
        highlight: {
          theme: {
            default: 'ayu-dark',
            light: 'catppuccin-latte',
            dark: 'dracula-soft',
          },
          langs: [
            'js',
            'jsx',
            'json',
            'ts',
            'tsx',
            'vue',
            'css',
            'html',
            'vue',
            'bash',
            'md',
            'mdc',
            'yaml',
            // more languages
            'ini',
            'dockerfile',
            'nginx',
            'sql',
          ],
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Reddit Sans', provider: 'google' },
      { name: 'Reddit Mono', provider: 'google' },
    ],
  },

  runtimeConfig: {
    public: {
      homepage: 'https://anhthang.org',
      me: 'Anh Thang Bui',
      about:
        'I am a passionate software engineer with a keen interest in web development, open-source projects, and cloud computing.',
      bio: 'Something to remember..',
    },
  },
})
