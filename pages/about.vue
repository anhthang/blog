<template>
  <main>
    <page-header
      class="mb-16"
      title="Hey, I'm Anh Thang 👋"
      :description="description"
    />
    <div class="space-y-16">
      <ul
        v-for="({ meta: { title, body: items } }, id) in data"
        :key="id"
        class="space-y-4"
      >
        <group-headline :title="title" />

        <UAccordion
          :items="items"
          :ui="{
            wrapper: 'w-full flex flex-col gap-6 cursor-pointer',
            container:
              'w-full flex flex-col hover:bg-gray-100 dark:hover:bg-white/10 p-2 -m-2 rounded-lg text-justify',
            item: {
              base: 'ml-8',
            },
          }"
        >
          <template #default="{ item }">
            <experience-header :item="item" />
          </template>

          <template #description="{ item }">
            <ul v-if="Array.isArray(item.details)" class="list-disc">
              <li
                v-for="(detail, idx) in item.details"
                :key="idx"
                class="text-gray-500"
              >
                {{ detail }}
              </li>
            </ul>
          </template>
        </UAccordion>
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  'Experienced Full-Stack Software Engineer with a proven track record in architecting, developing, and deploying scalable web applications. Proficient in Node.js, ReactJS, VueJS, and cloud technologies (AWS, GCP). Passionate about building innovative solutions for travel, e-commerce, and fintech.'

useSeoMeta({
  title: 'About',
  description,
  ogDescription: description,
  twitterDescription: description,
})

const { data } = await useAsyncData('about-me', () =>
  queryCollection('profiles').all(),
)
</script>
