<template>
  <section class="hero py-10 sm:py-20 md:py-24 lg:py-[132px] overflow-hidden">
    <div class="container relative">
      <div class="flex items-start flex-col max-w-full lg:max-w-2xl">

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] text-white font-semibold mb-3 sm:mb-4 lg:mb-2 leading-tight lg:leading-[1.1]">
          Are you starving?
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg lg:text-[18px] text-white/80 mb-6 sm:mb-8 lg:mb-5">
          Within a few clicks, find meals that are accessible near you
        </p>

        <!-- Form Card -->
        <div class="w-full bg-white rounded-2xl p-4 sm:p-6 shadow-lg">

          <!-- Delivery / Pickup Toggle -->
          <div class="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-5">
            <button
              @click="activeTab = 'delivery'"
              :class="[
                'flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-medium text-sm sm:text-base transition-all',
                activeTab === 'delivery'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-500 hover:bg-gray-100'
              ]"
            >
              <img src="../assets/img/svg/mtot.svg" alt="delivery" class="w-4 h-4">
              Delivery
            </button>

            <button
              @click="activeTab = 'pickup'"
              :class="[
                'flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-medium text-sm sm:text-base transition-all',
                activeTab === 'pickup'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-500 hover:bg-gray-100'
              ]"
            >
              <img src="../assets/img/svg/bag.svg" alt="pickup" class="w-4 h-4">
              Pickup
            </button>
          </div>

          <!-- Address Input + Find Food Button -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            <!-- Address Input -->
            <div class="flex items-center flex-1 w-full bg-gray-100 rounded-xl px-4 py-3 gap-2">
              <img src="../assets/img/svg/map-marker-alt.svg" alt="location" class="w-4 h-4 flex-shrink-0">
              <input
                type="text"
                placeholder="Enter Your Address"
                class="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            <!-- Find Food Button -->
            <button
              class="
                flex items-center justify-center gap-2
                bg-orange-500 hover:bg-orange-600 active:scale-95
                text-white font-semibold
                px-6 py-3 rounded-xl
                text-sm sm:text-base
                w-full sm:w-auto
                transition-all duration-300
                cursor-pointer
                whitespace-nowrap
              "
            >
              Find Food
            </button>

          </div>
        </div>

      </div>

      <!-- Hero Image (Desktop Only) -->
      <img class="hero-img" src="../assets/img/heroImg.png" alt="hero food">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('delivery')
</script>

<style lang="scss">
@use '../assets/styles/_variables' as *;

.hero {
  background: $base;
}

.hero-img {
  position: absolute;
  bottom: -150px;
  right: -100px;
}

.item {
  overflow: hidden;
}

@media (max-width: 1024px) {
  .hero-img {
    display: none;
  }
}
</style>
