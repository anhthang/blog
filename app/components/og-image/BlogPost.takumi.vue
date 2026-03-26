<template>
  <div
    class="w-full h-full flex flex-col p-[60px] justify-between bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white font-sans"
    :style="
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : void 0
    "
  >
    <div v-if="category" class="flex items-start">
      <div
        class="text-[24px] font-semibold px-6 py-2 text-white bg-blue-500 rounded-full"
      >
        {{ category }}
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <h1
        class="text-[80px] font-semibold m-0 text-indigo-500"
        style="line-height: 1.1"
      >
        {{ title || $config.public.me }}
      </h1>
      <p v-if="description" class="text-4xl leading-relaxed text-pretty">
        {{ description }}
      </p>
    </div>

    <div class="flex items-center gap-6">
      <div
        v-if="avatar"
        class="overflow-hidden border-4 border-neutral-200 dark:border-neutral-800"
        style="width: 80px; height: 80px; border-radius: 50%"
      >
        <img
          :src="avatar"
          alt="Avatar"
          class="w-full h-full"
          style="object-fit: cover; border-radius: 50%"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-[32px] font-semibold">{{ author }}</span>
        <span v-if="date" class="text-[24px] text-neutral-400">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  colorMode: { type: String, required: false, default: 'dark' },
  title: { type: String, required: false },
  description: { type: String, required: false },
  author: { type: String, required: false, default: 'Anh Thang' },
  date: { type: String, required: false },
  category: { type: String, required: false },
  avatar: { type: String, required: false, default: '/avatar.jpg' },
  backgroundImage: { type: String, required: false },
})
</script>
