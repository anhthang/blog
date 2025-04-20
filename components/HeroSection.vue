<template>
  <div class="space-y-6 relative text-justify">
    <PageHeader title="Behind the Terminal" :description="config.public.bio" />

    <UTabs
      :items="items"
      variant="link"
      :ui="{
        root: 'gap-4',
        list: 'justify-between',
      }"
    >
      <template #text>
        <div class="relative space-y-6 mt-2">
          <NuxtImg
            src="/avatar.jpg"
            :alt="config.public.me"
            class="float-left w-20 h-20 md:w-32 md:h-32 rounded-full mr-4 mb-4 md:mr-6 md:mb-6"
          />

          <p class="text-(--ui-text-highlighted)">
            I'm Thang, a {{ current.title }} based in Hanoi, currently working
            at {{ current.company }} (previously at {{ previous.company }}).
          </p>

          <p class="text-(--ui-text-highlighted)">
            {{ config.public.about }}
          </p>

          <p class="text-(--ui-text-highlighted)">
            Learn more about my expertise on the
            <NuxtLink to="/about" class="text-primary underline">
              /about
            </NuxtLink>
            page, or see what I'm up to <i>right now</i> on the
            <NuxtLink to="/now" class="text-primary underline">/now</NuxtLink>
            page.
          </p>

          <div class="flex items-center justify-center mt-6 text-sm">
            <UButton
              color="neutral"
              variant="ghost"
              class="block md:hidden"
              @click="() => (isOpen = true)"
            >
              Tap for Quick Links
            </UButton>
            <UButton
              color="neutral"
              variant="ghost"
              class="hidden md:block"
              @click="() => (isOpen = true)"
            >
              Press
              <UKbd value="meta" />
              <UKbd>K</UKbd>
              for Quick Links
            </UButton>
          </div>
        </div>
      </template>

      <template #yaml>
        <ShikiBlock :code="crd" lang="yaml" />
      </template>
    </UTabs>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const isOpen = useState('open-cmd')

useSeoMeta({
  description: config.public.about,
})

const { data } = await useAsyncData('experience', () =>
  queryCollection('profiles').where('id', 'LIKE', '%experience%').first(),
)

const [current, previous] = data.value.meta.body

const items = ref([
  {
    label: 'README.md',
    icon: 'solar:document-add-line-duotone',
    slot: 'text',
  },
  {
    icon: 'solar:programming-line-duotone',
    slot: 'yaml',
  },
])

const crd = `
apiVersion: anhthang.org/v1alpha1
kind: EngineerProfile
metadata:
  name: thang
  namespace: blog
spec:
  name: "Thang"
  title: "${current.title}"
  location: "Hanoi, Vietnam"
  currentCompany: "${current.company}"
  previousCompany: "${previous.company}"
  focus: "${config.public.about}"
  links:
    about: "/about"
    now: "/now"
`.trim()
</script>
