<template>
  <div
    class="w-full h-full flex items-center justify-between p-20 bg-white text-neutral-900 font-sans"
  >
    <div class="flex flex-col justify-between h-full flex-1 pr-20">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <span v-if="date" class="text-2xl text-neutral-500">{{ date }}</span>
          <h1 v-if="date" class="text-6xl font-light m-0 leading-tight">
            <span class="text-neutral-500 block">posts/{{ path }}</span>
          </h1>
          <h1 v-else class="text-6xl font-light m-0 leading-tight">
            <span class="text-neutral-500">anhthang/</span>
            <span class="font-bold">{{ path }}</span>
          </h1>
        </div>

        <p v-if="description" class="text-3xl leading-relaxed text-neutral-600">
          {{ description }}
        </p>
        <p v-else class="text-3xl leading-relaxed text-neutral-600">
          {{ $config.public.about }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  path: { type: String, required: false, default: 'blog' },
  description: { type: String, required: false },
  date: { type: String, required: false },
})
</script>
