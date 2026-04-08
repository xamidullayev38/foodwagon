<template>
  <header class="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
    <div class="container">
      <!-- Desktop & Tablet Layout (≥640px) -->
      <div class="hidden sm:flex items-center justify-between gap-4 py-3">
        <!-- Logo -->
        <a href="#" class="flex-shrink-0">
          <img :src="img" alt="logo" class="h-8 w-auto">
        </a>

        <!-- Desktop: Delivery Location (≥1024px) -->
        <div class="hidden lg:flex items-center gap-2 text-sm">
          <p class="font-bold text-gray-800">Deliver to:</p>
          <span class="text-gray-500">Current Location</span>
          <img src="../assets/img/svg/map-marker-alt.svg" alt="location" class="w-4 h-4">
          <span class="font-bold text-gray-800">Mohammadpur Bus Stand, Dhaka</span>
        </div>

        <!-- Tablet: Search (640px-1023px, flex-1 in middle) -->
        <div class="flex lg:hidden flex-1 max-w-md mx-4">
          <div class="flex items-center bg-gray-100 rounded-xl px-4 py-2.5 w-full">
            <img src="../assets/img/svg/Search (1).svg" alt="search" class="w-4 h-4 mr-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Search Food"
              class="bg-transparent outline-none border-none text-sm w-full placeholder-gray-400 text-gray-700"
            >
          </div>
        </div>

        <!-- Desktop: Search + Login (≥1024px) -->
        <div class="hidden lg:flex items-center gap-3">
          <div class="flex items-center bg-gray-100 rounded-xl px-4 py-2.5 w-[180px]">
            <img src="../assets/img/svg/Search (1).svg" alt="search" class="w-4 h-4 mr-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Search Food"
              class="bg-transparent outline-none border-none text-sm w-full placeholder-gray-400 text-gray-700"
            >
          </div>

          <button class="flex items-center gap-2 rounded-2xl nav-btn whitespace-nowrap">
            <img src="../assets/img/svg/profile.svg" alt="profile" class="w-4 h-4">
            Login
          </button>
        </div>

        <!-- Tablet: Login Button Only (640px-1023px) -->
        <button class="flex lg:hidden items-center gap-2 rounded-2xl nav-btn whitespace-nowrap">
          <img src="../assets/img/svg/profile.svg" alt="profile" class="w-4 h-4">
          Login
        </button>
      </div>

      <!-- Mobile Layout (<640px) -->
      <div class="sm:hidden">
        <!-- Top Row: Logo + Login -->
        <div class="flex items-center justify-between py-3">
          <a href="#" class="flex-shrink-0">
            <img :src="img" alt="logo" class="h-7 w-auto">
          </a>

          <button class="flex items-center gap-2 rounded-2xl nav-btn text-sm">
            <img src="../assets/img/svg/profile.svg" alt="profile" class="w-4 h-4">
            <span class="hidden xs:inline">Login</span>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="pb-3">
          <div class="flex items-center bg-gray-100 rounded-xl px-4 py-2.5 w-full">
            <img src="../assets/img/svg/Search (1).svg" alt="search" class="w-4 h-4 mr-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Search Food"
              class="bg-transparent outline-none border-none text-sm w-full placeholder-gray-400 text-gray-700"
            >
          </div>
        </div>

        <!-- Location Strip -->
        <div class="pb-3 px-2">
          <div class="flex items-center gap-1.5 text-xs text-gray-600">
            <img src="../assets/img/svg/map-marker-alt.svg" alt="location" class="w-3 h-3 flex-shrink-0">
            <span class="truncate">Mohammadpur Bus Stand, Dhaka</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import img from '../assets/img/logo.png'
</script>

<style lang="scss">
@use '../assets/styles/_variables' as *;

.nav-btn {
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 16px;
  box-shadow: 0px 4px 4px -1px $base;
  transition: .3s ease;

  &:hover {
    box-shadow: 0px 4px 8px 0px $base;
    transform: translateY(-2px);
  }
}
</style>
