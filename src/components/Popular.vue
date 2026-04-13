<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

import card1  from '../assets/img/card1.png'
import card2  from '../assets/img/card2.png'
import card3  from '../assets/img/card3.png'
import card4  from '../assets/img/card4.png'
import card21 from '../assets/img/card21.png'
import card22 from '../assets/img/card22.png'
import card23 from '../assets/img/card23.png'
import card31 from '../assets/img/card31.png'
import locationIcon from '../assets/img/svg/map-marker-alt.svg'

const modules = [Navigation]

const swiperRef = ref(null)

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const slidePrev = () => swiperRef.value?.slidePrev()
const slideNext = () => swiperRef.value?.slideNext()

const items = ref([
  {
    id: 1,
    title: 'Cheese Burger',
    restaurant: 'Burger House',
    price: '12.99',
    image: card1,
  },
  {
    id: 2,
    title: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: '15.49',
    image: card2,
  },
  {
    id: 3,
    title: 'Crispy Chicken',
    restaurant: 'Crispy Corner',
    price: '9.99',
    image: card3,
  },
  {
    id: 4,
    title: 'Beef Tacos',
    restaurant: 'Taco Town',
    price: '8.50',
    image: card4,
  },
  {
    id: 5,
    title: 'Spicy Wings',
    restaurant: 'Wing Station',
    price: '11.99',
    image: card21,
  },
  {
    id: 6,
    title: 'Fish & Chips',
    restaurant: 'Ocean Bites',
    price: '13.50',
    image: card22,
  },
  {
    id: 7,
    title: 'Veggie Wrap',
    restaurant: 'Green Garden',
    price: '7.99',
    image: card23,
  },
  {
    id: 8,
    title: 'BBQ Ribs Plate',
    restaurant: 'Smoke & Grill',
    price: '18.99',
    image: card31,
  },
])
</script>

<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="container">

      <!-- ── Section Header ── -->
      <div class="text-center mb-12">
        <span class="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">
          🍔 Top Picks
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800">
          Popular <span class="text-orange-500">Items</span>
        </h2>
        <p class="text-gray-400 mt-3 text-base max-w-md mx-auto">
          Discover the most‑loved dishes in your area, fresh and ready to order.
        </p>
      </div>

      <!-- ── Slider Wrapper ── -->
      <div class="relative">

        <!-- Prev Arrow -->
        <button
          @click="slidePrev"
          aria-label="Previous slide"
          class="
            group
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6
            z-10 w-11 h-11
            flex items-center justify-center
            bg-white rounded-full
            shadow-md hover:shadow-xl
            border border-gray-100
            text-orange-500 hover:bg-orange-500 hover:text-white
            transition-all duration-300
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- ── Swiper ── -->
        <Swiper
          :modules="modules"
          :slides-per-view="1.2"
          :space-between="16"
          :loop="true"
          :grab-cursor="true"
          :breakpoints="{
            480:  { slidesPerView: 2,   spaceBetween: 18 },
            768:  { slidesPerView: 3,   spaceBetween: 22 },
            1024: { slidesPerView: 4,   spaceBetween: 26 },
            1280: { slidesPerView: 4.5, spaceBetween: 28 },
          }"
          @swiper="onSwiper"
          class="!overflow-visible! py-4 px-0.5"
        >
          <SwiperSlide
            v-for="item in items"
            :key="item.id"
            class="h-auto!"
          >
            <!-- ── Food Card ── -->
            <div
              class="
                group
                flex flex-col h-full
                bg-white rounded-2xl
                p-4
                border border-gray-100
                shadow-md hover:shadow-2xl hover:shadow-orange-100
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                cursor-pointer
              "
            >

              <!-- Image -->
              <div class="relative overflow-hidden rounded-xl bg-orange-50 aspect-square mb-4">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="
                    w-full h-full object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                  loading="lazy"
                />
                <!-- Badge -->
                <span
                  class="
                    absolute top-2.5 left-2.5
                    bg-orange-500 text-white
                    text-[10px] font-bold
                    px-2 py-0.5 rounded-full
                    uppercase tracking-wide
                  "
                >
                  Popular
                </span>
              </div>

              <!-- Content -->
              <div class="flex flex-col gap-1.5 flex-1">

                <!-- Title -->
                <h3 class="font-bold text-gray-800 text-base leading-snug line-clamp-1">
                  {{ item.title }}
                </h3>

                <!-- Restaurant -->
                <div class="flex items-center gap-1 text-gray-400 text-sm">
                  <img
                    :src="locationIcon"
                    alt="location"
                    class="w-3.5 h-3.5 shrink-0 opacity-60"
                  />
                  <span class="truncate">{{ item.restaurant }}</span>
                </div>

                <!-- Price -->
                <p class="text-orange-500 font-extrabold text-xl mt-1">
                  ${{ item.price }}
                </p>

              </div>

              <!-- Order Button -->
              <button
                class="
                  mt-4 w-full
                  bg-orange-500 hover:bg-orange-600
                  active:scale-95
                  text-white font-semibold
                  py-2.5 px-4 rounded-xl
                  text-sm
                  shadow-sm hover:shadow-lg hover:shadow-orange-200
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Order Now
              </button>

            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Next Arrow -->
        <button
          @click="slideNext"
          aria-label="Next slide"
          class="
            group
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6
            z-10 w-11 h-11
            flex items-center justify-center
            bg-white rounded-full
            shadow-md hover:shadow-xl
            border border-gray-100
            text-orange-500 hover:bg-orange-500 hover:text-white
            transition-all duration-300
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure slides stretch to equal height */
:deep(.swiper-slide) {
  height: auto;
  display: flex;
}
:deep(.swiper-slide > div) {
  flex: 1;
}
</style>
