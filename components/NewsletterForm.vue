<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-(--ui-primary) bg-(--ui-primary)/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>

      <h2 class="uppercase text-sm font-semibold text-(--ui-text-muted)">
        STAY IN TOUCH
      </h2>
    </div>

    <p class="mt-2 text-sm text-(--ui-text-toned)">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>

    <div class="flex items-center gap-3 mt-6">
      <UInput
        placeholder="Email Address"
        icon="solar:inbox-line-line-duotone"
        class="flex-1"
        size="lg"
      />
      <UButton label="Subscribe" size="lg" color="neutral" />
    </div>
  </div>
</template>
