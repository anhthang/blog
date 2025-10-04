export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
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
            default: 'catppuccin-frappe',
            light: 'catppuccin-latte',
            dark: 'catppuccin-macchiato',
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
        'I focus on building and maintaining scalable cloud infrastructure to support development across teams.',
      bio: 'DevOps engineer by day, full-stack tinkerer by night.',
    },
  },
})
