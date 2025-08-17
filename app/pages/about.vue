<template>
  <UPage>
    <UPageHeader
      title="Behind the Terminal"
      :description="description"
      class="mb-6"
    >
      <template #description>
        <div class="relative space-y-6 mt-6 text-pretty">
          <NuxtImg
            src="/avatar.jpg"
            :alt="config.public.me"
            class="float-left w-20 h-20 md:w-32 md:h-32 rounded-full mr-4 mb-4 md:mr-6 md:mb-6"
          />

          <p>
            I'm Thang, a {{ current.title }} based in Hanoi, currently working
            at {{ current.company }} (previously at {{ previous.company }}).
          </p>

          <p>
            {{ description }}
          </p>

          <p>
            Check out what I'm up to <i>right now</i> on the
            <NuxtLink to="/now" class="text-primary underline">/now</NuxtLink>
            page.
          </p>
        </div>
      </template>
    </UPageHeader>

    <div class="space-y-16">
      <div
        v-for="({ meta: { title, body: items } }, id) in data"
        :key="id"
        class="space-y-6"
      >
        <CategoryHeader :title="title" />

        <UAccordion
          :items="items"
          :ui="{
            root: 'flex flex-col gap-6',
            item: 'hover:bg-muted p-2 -m-2 rounded-lg text-justify border-0 group',
            trigger: 'py-0',
            content: 'text-sm leading-(--text-sm--line-height) mt-2',
            trailingIcon: 'hidden',
          }"
        >
          <template #leading="{ item }">
            <AccordionHeader :item="item" />
          </template>

          <template #description="{ item }">
            <UTimeline
              v-if="item.roles"
              :items="item.roles"
              size="xs"
              :ui="{
                wrapper: 'flex flex-col',
                title: 'text-default order-first',
                description: 'text-sm leading-(--text-sm--line-height) mt-2',
              }"
            >
              <template #description="{ item: role }">
                <ul v-if="Array.isArray(role.details)" class="list-disc">
                  <li
                    v-for="(detail, idx) in role.details"
                    :key="idx"
                    class="text-muted ml-8"
                  >
                    {{ detail }}
                  </li>
                </ul>
              </template>
            </UTimeline>

            <ul v-else-if="Array.isArray(item.details)" class="list-disc">
              <li
                v-for="(detail, idx) in item.details"
                :key="idx"
                class="text-muted ml-8"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </UAccordion>
      </div>
    </div>
  </UPage>
</template>

<script setup>
const config = useRuntimeConfig()

const description =
  'As a Cloud DevOps Engineer, I focus on building and managing scalable cloud infrastructure and automating complex workflows. My goal is to ensure reliable and efficient software development across teams.'

useSeoMeta({
  title: 'Who I Am',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('about-me', () =>
  queryCollection('profiles').all(),
)

const [current, previous] = data.value[0].meta.body
</script>
