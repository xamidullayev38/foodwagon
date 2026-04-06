<template>
  <div class="rounded-xl p-10 text-center w-full max-w-xs mx-auto 
              shadow-md transition duration-300 
              hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    
    <!-- Icon -->
    <div class="flex justify-center mb-6">
      <img :src="icon" :alt="title" 
           class="transition duration-300 hover:scale-110">
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-800 mb-2">
      {{ title }}
    </h3>

    <!-- Subtitle -->
    <p class="text-gray-500 text-sm">
      {{ subtitle }}
    </p>

  </div>
</template>

<script setup>
    defineProps({
        icon: String,
        title: String,
        subtitle: String,
    })
</script>