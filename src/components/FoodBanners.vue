<script setup>
import { ref } from 'vue'

import bannerImg1 from '../assets/img/card31.png'
import bannerImg2 from '../assets/img/card32.png'
import bannerImg3 from '../assets/img/card33.png'

const banners = ref([
  {
    id: 1,
    title: 'Wanna eat hot & spicy',
    highlightText: 'Pizza?',
    description: 'Order now and get the best deals on our delicious hot pizzas with extra cheese and toppings.',
    image: bannerImg1,
    reverse: false,
  },
  {
    id: 2,
    title: 'Best deals',
    highlightText: 'Crispy Sandwiches',
    description: 'Enjoy our freshly made sandwiches with premium ingredients and crispy bread at unbeatable prices.',
    image: bannerImg2,
    reverse: false,
  },
  {
    id: 3,
    title: 'Celebrate parties with',
    highlightText: 'Fried Chicken',
    description: 'Make your party memorable with our crispy fried chicken meals and special combo offers.',
    image: bannerImg3,
    reverse: true,
  },
])
</script>

<template>
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="space-y-8">

        <div
          v-for="banner in banners"
          :key="banner.id"
          class="rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] shadow-lg"
        >
          <div
            :class="[
              'bg-gray-100 p-8 md:p-10 flex flex-col justify-center w-full md:w-1/2',
              banner.reverse ? 'md:order-2' : 'md:order-1'
            ]"
          >
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
              {{ banner.title }} <span class="text-orange-500">{{ banner.highlightText }}</span>
            </h2>
            <p class="mt-3 text-gray-500 text-sm max-w-md">
              {{ banner.description }}
            </p>
            <div class="mt-6">
              <button class="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          </div>

          <!-- Image Section -->
          <div
            :class="[
              'relative w-full md:w-1/2 h-48 md:h-auto',
              banner.reverse ? 'md:order-1' : 'md:order-2'
            ]"
          >
            <div
              v-if="banner.id === 1"
              class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"
            ></div>

            <img
              :src="banner.image"
              :alt="banner.title"
              class="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>