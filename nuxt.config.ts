export default defineNuxtConfig({
  css: ['~/assets/main.css'],

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
        class: 'antialiased min-h-screen',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'BLOG_DB',
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

  runtimeConfig: {
    public: {
      homepage: 'https://anhthang.org',
      me: 'Anh Thang Bui',
      about:
        "I focus on building and maintaining scalable cloud infrastructure to support the development. I'm passionate about building web applications and sites using Node.js, Vue.js, Nuxt.js, and React.",
      bio: 'Something to remember..',
    },
  },
})
