<template>
  <UPage>
    <UPageCTA
      :title="$config.public.me"
      :description="$config.public.bio"
      variant="naked"
      reverse
      :ui="{
        container: 'px-4 py-8 sm:px-8 sm:py-16 lg:px-12 lg:py-16 gap-6 sm:gap-12'
      }"
    >
      <NuxtImg
        src="/avatar.jpg"
        :alt="$config.public.me"
        class="mx-auto rounded-full w-40"
      />

      <template #links>
        <UButton
          color="neutral"
          variant="ghost"
          class="block md:hidden"
          @click="() => (isOpen = true)"
        >
          Tap to Start
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
          to Start
        </UButton>
      </template>
    </UPageCTA>

    <FeaturedProjects :show-footer="true" />

    <!-- <RecentPosts /> -->

    <!-- <newsletter-form /> -->
  </UPage>
</template>

<script setup>
const isOpen = useState('open-cmd')
</script>
