<template>
  <UPage>
    <!-- <HeroSection class="pb-4 sm:pb-6 lg:pb-8" /> -->

    <UPageCTA
      title="Behind the Terminal"
      :description="$config.public.bio"
      variant="naked"
      reverse
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
