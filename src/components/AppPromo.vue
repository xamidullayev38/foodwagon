<script setup>
import foodImg1 from '../assets/img/card1.png'
import foodImg2 from '../assets/img/card2.png'
</script>

<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-[#f8f6f3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <!-- Top Feature Bar -->
      <div class="bg-gray-100 rounded-2xl sm:rounded-3xl shadow-lg px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-6 mb-10 sm:mb-16 lg:mb-20">

        <!-- Mobile & Tablet: Stacked Layout -->
        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 lg:hidden">

          <!-- Daily Discounts -->
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm sm:text-base text-gray-800">Daily Discounts</h3>
              <p class="text-xs sm:text-sm text-gray-500">Save up to 50%</p>
            </div>
          </div>

          <!-- Quick Delivery -->
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm sm:text-base text-gray-800">Quick Delivery</h3>
              <p class="text-xs sm:text-sm text-gray-500">Within 30 mins</p>
            </div>
          </div>

          <!-- Live Tracking -->
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm sm:text-base text-gray-800">Live Tracking</h3>
              <p class="text-xs sm:text-sm text-gray-500">Real-time updates</p>
            </div>
          </div>

        </div>

        <!-- Desktop: Horizontal Layout with Dividers -->
        <div class="hidden lg:flex items-center justify-between">

          <!-- Daily Discounts -->
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Daily Discounts</h3>
              <p class="text-sm text-gray-500">Save up to 50%</p>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-l border-gray-300 h-12"></div>

          <!-- Quick Delivery -->
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Quick Delivery</h3>
              <p class="text-sm text-gray-500">Within 30 mins</p>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-l border-gray-300 h-12"></div>

          <!-- Live Tracking -->
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Live Tracking</h3>
              <p class="text-sm text-gray-500">Real-time updates</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Main Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">

        <!-- LEFT: Overlapping Food Images -->
        <div class="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center order-2 lg:order-1">
          <!-- Image 1 (Back) -->
          <div class="absolute left-0 top-1/2 -translate-y-1/2 -rotate-6">
            <img
              :src="foodImg1"
              alt="Food"
              class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-xl"
            />
          </div>

          <!-- Image 2 (Front) -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 rotate-6 z-10">
            <img
              :src="foodImg2"
              alt="Food"
              class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>

        <!-- RIGHT: Install CTA -->
        <div class="text-center lg:text-left order-1 lg:order-2">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
            Install the app
          </h2>
          <p class="text-gray-600 mt-3 sm:mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
            Download our mobile app for the best experience. Get exclusive deals, faster ordering, and real-time tracking of your delivery.
          </p>

          <!-- App Store Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">

            <!-- Google Play -->
            <button class="bg-black text-white rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 shadow-md hover:scale-105 transition text-sm sm:text-base whitespace-nowrap">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Get it on Google Play</span>
            </button>

            <!-- App Store -->
            <button class="bg-black text-white rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 shadow-md hover:scale-105 transition text-sm sm:text-base whitespace-nowrap">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <span>Download on the App Store</span>
            </button>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
