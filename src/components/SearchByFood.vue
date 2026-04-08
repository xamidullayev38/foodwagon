<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

import pizza from '../assets/img/card1.png'
import burger from '../assets/img/card2.png'
import noodles from '../assets/img/card3.png'
import sandwich from '../assets/img/card4.png'
import chowmein from '../assets/img/card21.png'
import steak from '../assets/img/card22.png'
import pasta from '../assets/img/card23.png'
import sushi from '../assets/img/card24.png'
import tacos from '../assets/img/card25.png'

const modules = [Navigation]

const swiperRef = ref(null)

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const slidePrev = () => swiperRef.value?.slidePrev()
const slideNext = () => swiperRef.value?.slideNext()

const foodItems = ref([
  {
    id: 1,
    name: 'Pizza',
    image: pizza,
  },
  {
    id: 2,
    name: 'Burger',
    image: burger,
  },
  {
    id: 3,
    name: 'Noodles',
    image: noodles,
  },
  {
    id: 4,
    name: 'Sub-sandwich',
    image: sandwich,
  },
  {
    id: 5,
    name: 'Chowmein',
    image: chowmein,
  },
  {
    id: 6,
    name: 'Steak',
    image: steak,
  },
  {
    id: 7,
    name: 'Pasta',
    image: pasta,
  },
  {
    id: 8,
    name: 'Sushi',
    image: sushi,
  },
  {
    id: 9,
    name: 'Tacos',
    image: tacos,
  },
])
</script>

<template>
  <section class="py-16 sm:py-20 bg-white">
    <div class="container">

      <!-- Header: Title + View All + Nav Arrows -->
      <div class="flex items-center justify-between mb-8 sm:mb-10">

        <!-- Title -->
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          Search by <span class="text-orange-500">Food</span>
        </h2>

        <!-- Right Side: View All + Nav Arrows -->
        <div class="flex items-center gap-3 sm:gap-4">

          <!-- View All Link -->
          <button class="hidden sm:block text-orange-500 hover:text-orange-600 font-semibold text-sm sm:text-base transition-colors cursor-pointer">
            View All
          </button>

          <!-- Navigation Arrows -->
          <div class="flex items-center gap-2">
            <!-- Prev Arrow -->
            <button
              @click="slidePrev"
              aria-label="Previous"
              class="
                group
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                bg-white rounded-full
                shadow-md hover:shadow-lg
                border border-gray-200
                text-orange-500 hover:bg-orange-500 hover:text-white
                transition-all duration-300
                cursor-pointer
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Next Arrow -->
            <button
              @click="slideNext"
              aria-label="Next"
              class="
                group
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                bg-white rounded-full
                shadow-md hover:shadow-lg
                border border-gray-200
                text-orange-500 hover:bg-orange-500 hover:text-white
                transition-all duration-300
                cursor-pointer
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Swiper Carousel -->
      <Swiper
        :modules="modules"
        :slides-per-view="2.5"
        :space-between="16"
        :grab-cursor="true"
        :breakpoints="{
          480:  { slidesPerView: 3,   spaceBetween: 20 },
          640:  { slidesPerView: 4,   spaceBetween: 24 },
          1024: { slidesPerView: 5,   spaceBetween: 28 },
          1280: { slidesPerView: 6,   spaceBetween: 32 },
        }"
        @swiper="onSwiper"
        class="overflow-hidden"
      >
        <SwiperSlide
          v-for="item in foodItems"
          :key="item.id"
        >
          <!-- Food Item -->
          <div class="flex flex-col items-center cursor-pointer group">

            <!-- Circular Image -->
            <div class="relative mb-3 sm:mb-4">
              <div class="
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                rounded-full overflow-hidden
                bg-orange-50
                border-2 border-gray-100
                shadow-md group-hover:shadow-xl
                transition-all duration-300
                group-hover:scale-110
                group-hover:border-orange-200
              ">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Food Name -->
            <p class="text-sm sm:text-base font-medium text-gray-700 text-center group-hover:text-orange-500 transition-colors">
              {{ item.name }}
            </p>

          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
</template>

<style scoped>
/* Ensure smooth transitions */
</style>
