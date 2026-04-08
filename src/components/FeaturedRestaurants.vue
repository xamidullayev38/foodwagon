<script setup>
import { ref } from 'vue'

import img1 from '../assets/img/card21.png'
import img2 from '../assets/img/card22.png'
import img3 from '../assets/img/card23.png'
import img4 from '../assets/img/card24.png'
import img5 from '../assets/img/card25.png'
import img6 from '../assets/img/card31.png'
import img7 from '../assets/img/card32.png'
import img8 from '../assets/img/card33.png'

import logo1 from '../assets/img/2/Icon.png'
import logo2 from '../assets/img/2/Icon-1.png'
import logo3 from '../assets/img/2/Icon-2.png'

const restaurants = ref([
  {
    id: 1,
    name: 'Foodworld',
    image: img1,
    logo: logo1,
    rating: 46,
    discount: 20,
    isFast: true,
    isOpen: true,
  },
  {
    id: 2,
    name: 'Pizzahub',
    image: img2,
    logo: logo2,
    rating: 40,
    discount: 15,
    isFast: false,
    isOpen: true,
  },
  {
    id: 3,
    name: 'Donuts hut',
    image: img3,
    logo: logo3,
    rating: 20,
    discount: 10,
    isFast: true,
    isOpen: false,
  },
  {
    id: 4,
    name: 'Donuts hut',
    image: img4,
    logo: logo1,
    rating: 50,
    discount: 15,
    isFast: true,
    isOpen: true,
  },
  {
    id: 5,
    name: 'Ruby Tuesday',
    image: img5,
    logo: logo2,
    rating: 26,
    discount: 10,
    isFast: false,
    isOpen: true,
  },
  {
    id: 6,
    name: 'Kuakata Fried Chicken',
    image: img6,
    logo: logo3,
    rating: 53,
    discount: 25,
    isFast: true,
    isOpen: false,
  },
  {
    id: 7,
    name: 'Red Square',
    image: img7,
    logo: logo1,
    rating: 45,
    isFast: false,
    isOpen: true,
  },
  {
    id: 8,
    name: 'Taco Bell',
    image: img8,
    logo: logo2,
    rating: 35,
    discount: 10,
    isFast: true,
    isOpen: true,
  },
])
</script>

<template>
  <section class="py-16 sm:py-20 bg-gray-50">
    <div class="container">

      <!-- Section Header -->
      <div class="text-center mb-10 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Featured <span class="text-orange-500">Restaurants</span>
        </h2>
        <p class="text-gray-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
          Explore our top-rated restaurants with exclusive deals and lightning-fast delivery.
        </p>
      </div>

      <!-- Restaurant Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">

        <div
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          class="
            group
            bg-white rounded-2xl overflow-hidden
            shadow-md hover:shadow-2xl hover:shadow-orange-100
            transition-all duration-300 ease-out
            hover:-translate-y-2
            cursor-pointer
          "
        >
          <!-- Image with Overlay Badges -->
          <div class="relative overflow-hidden">
            <img
              :src="restaurant.image"
              :alt="restaurant.name"
              class="
                w-full h-48 sm:h-56 object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
              loading="lazy"
            />

            <!-- Badges Container (Top Left) -->
            <div class="absolute top-3 left-3 flex flex-col gap-2">
              <!-- Discount Badge -->
              <div
                v-if="restaurant.discount"
                class="
                  bg-orange-500 text-white
                  text-xs font-bold
                  px-2.5 py-1 rounded-lg
                  shadow-md
                "
              >
                {{ restaurant.discount }}% off
              </div>

              <!-- Fast Badge -->
              <div
                v-if="restaurant.isFast"
                class="
                  bg-orange-100 text-orange-600
                  text-xs font-bold
                  px-2.5 py-1 rounded-lg
                  shadow-sm
                "
              >
                🚀 Fast
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-4 sm:p-5">

            <!-- Logo + Name + Rating -->
            <div class="flex items-start gap-3 mb-3">
              <!-- Logo -->
              <div class="flex-shrink-0">
                <img
                  :src="restaurant.logo"
                  :alt="restaurant.name + ' logo'"
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-gray-100"
                />
              </div>

              <!-- Name + Rating -->
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-gray-800 text-base sm:text-lg leading-tight truncate mb-1">
                  {{ restaurant.name }}
                </h3>

                <div class="flex items-center gap-1.5">
                  <svg
                    class="w-4 h-4 text-orange-400 fill-current flex-shrink-0"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span class="text-orange-500 font-bold text-sm">{{ restaurant.rating }}</span>
                </div>
              </div>
            </div>

            <!-- Status Badge -->
            <div>
              <span
                v-if="restaurant.isOpen"
                class="
                  inline-flex items-center gap-1.5
                  bg-green-50 text-green-600
                  text-xs font-semibold
                  px-3 py-1.5 rounded-full
                  border border-green-100
                "
              >
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Open Now
              </span>

              <span
                v-else
                class="
                  inline-flex items-center gap-1.5
                  bg-orange-50 text-orange-500
                  text-xs font-semibold
                  px-3 py-1.5 rounded-full
                  border border-orange-100
                "
              >
                <span class="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Opens tomorrow
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- View All Button -->
      <div class="flex justify-center">
        <button
          class="
            bg-orange-500 hover:bg-orange-600
            active:scale-95
            text-white font-bold
            px-8 sm:px-10 py-3 sm:py-3.5
            rounded-full
            text-sm sm:text-base
            shadow-lg hover:shadow-xl hover:shadow-orange-200
            transition-all duration-300
            cursor-pointer
          "
        >
          View All Restaurants
          <span class="ml-2">→</span>
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Additional utility for smooth transitions */
</style>
