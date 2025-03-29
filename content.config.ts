import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      source: 'posts/*.md',
      type: 'page',
    }),
    projects: defineCollection({
      source: 'projects/*.json',
      type: 'data',
      schema: z
        .object({
          name: z.string().min(1),
          url: z.string().url(),
          description: z.string(),
          icon: z.string(),
          status: z.string(),
          opensource: z.boolean(),
          featured: z.boolean(),
        })
        .array(),
    }),
    uses: defineCollection({
      source: 'uses/*.json',
      type: 'data',
      schema: z
        .object({
          name: z.string().min(1),
          description: z.string(),
          icon: z.string(),
          url: z.string().url(),
          tags: z.string().array(),
        })
        .array(),
    }),
    profiles: defineCollection({
      source: 'profiles/*.json',
      type: 'data',
      schema: z
        .object({
          title: z.string().min(1),
          icon: z.string(),
          company: z.string(),
          location: z.string(),
          start: z.string(),
          end: z.string(),
          summary: z.string().url(),
          disabled: z.boolean(),
          slot: z.literal('description'),
          details: z.string().array(),
        })
        .array(),
    }),
  },
})
