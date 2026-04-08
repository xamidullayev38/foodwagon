<script setup>
import mobileImg1 from '../assets/img/banner-img.png'
import mobileImg2 from '../assets/img/banner-img2.png'
</script>

<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Top Feature Bar -->
      <div class="mb-12 sm:mb-16 lg:mb-20">
        <div class="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">

            <!-- Daily Discounts -->
            <div class="flex items-center justify-center gap-3 sm:gap-4">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-800">Daily Discounts</h3>
                <p class="text-xs sm:text-sm text-gray-500">Save up to 50%</p>
              </div>
            </div>

            <!-- Vertical Divider (hidden on mobile) -->
            <div class="hidden sm:block border-r border-gray-200"></div>

            <!-- Live Tracking -->
            <div class="flex items-center justify-center gap-3 sm:gap-4">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-800">Live Tracking</h3>
                <p class="text-xs sm:text-sm text-gray-500">Real-time updates</p>
              </div>
            </div>

            <!-- Vertical Divider (hidden on mobile) -->
            <div class="hidden sm:block border-r border-gray-200"></div>

            <!-- Quick Delivery -->
            <div class="flex items-center justify-center gap-3 sm:gap-4">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-gray-800">Quick Delivery</h3>
                <p class="text-xs sm:text-sm text-gray-500">Within 30 mins</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Main Section: Mobile Mockups + Install CTA -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: Overlapping Mobile Images -->
        <div class="relative flex justify-center lg:justify-start">
          <div class="relative w-full max-w-md mx-auto lg:mx-0">
            <!-- Mobile Image 1 -->
            <div class="relative z-10 transform lg:-rotate-6 transition-transform duration-300 hover:rotate-0">
              <img
                :src="mobileImg1"
                alt="Mobile App Screenshot 1"
                class="w-56 sm:w-64 md:w-72 mx-auto drop-shadow-2xl"
              />
            </div>
            <!-- Mobile Image 2 (Overlapping) -->
            <div class="absolute top-8 sm:top-12 -right-4 sm:-right-8 lg:-right-12 z-20 transform lg:rotate-6 transition-transform duration-300 hover:rotate-0">
              <img
                :src="mobileImg2"
                alt="Mobile App Screenshot 2"
                class="w-56 sm:w-64 md:w-72 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <!-- Right: Install CTA -->
        <div class="text-center lg:text-left">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-500 mb-4 sm:mb-6">
            Install the app
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
            Download our app and get exclusive deals, faster checkout, and real-time order tracking.
            Available on iOS and Android.
          </p>

          <!-- App Store Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <!-- Google Play Button -->
            <a
              href="#"
              class="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <svg class="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div class="text-left">
                <div class="text-[10px] opacity-80">GET IT ON</div>
                <div class="text-base font-bold">Google Play</div>
              </div>
            </a>

            <!-- App Store Button -->
            <a
              href="#"
              class="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <svg class="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div class="text-left">
                <div class="text-[10px] opacity-80">Download on the</div>
                <div class="text-base font-bold">App Store</div>
              </div>
            </a>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* Additional smooth transitions */
</style>
