<template>
  <main>
    <PageHeader
      class="mb-16"
      title="Hey, I'm Anh Thang 👋"
      :description="description"
    />
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
            item: 'hover:bg-(--ui-bg-elevated) p-2 -m-2 rounded-lg text-justify border-0 group',
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
                title: 'text-(--ui-text) order-first',
                description: 'text-sm leading-(--text-sm--line-height) mt-2',
              }"
            >
              <template #description="{ item: role }">
                <ul v-if="Array.isArray(role.details)" class="list-disc">
                  <li
                    v-for="(detail, idx) in role.details"
                    :key="idx"
                    class="text-(--ui-text-muted) ml-8"
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
                class="text-(--ui-text-muted) ml-8"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </UAccordion>
      </div>
    </div>
  </main>
</template>

<script setup>
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
</script>
