export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],

  ui: {
    icons: ['heroicons'],
  },

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

  content: {
    highlight: {
      theme: 'catppuccin-frappe',
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
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Cabin', provider: 'google' },
      { name: 'Fira Code', provider: 'google' },
    ],
  },

  runtimeConfig: {
    public: {
      homepage: 'https://anhthang.org',
      me: 'Anh Thang Bui',
      about:
        "I'm Thang, a Senior Software Engineer based in Hanoi, Vietnam, working at TUI. I'm passionate about building web applications and sites using Node.js, Vue.js, Nuxt, and React.",
      bio: 'Something to remember..',
    },
  },
})
