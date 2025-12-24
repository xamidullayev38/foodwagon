<template>
  <div class="header w-full py-2">
    <div class="container">
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8"
      >
        <a href="#" class="flex justify-center lg:justify-start">
          <img :src="img" alt="logo" class="h-8">
        </a>

        <div
          class="hidden md:flex items-center gap-2 text-sm text-center lg:text-left"
        >
          <p class="font-bold">Deliver to:</p>
          <span>Current Location</span>
          <img src="../assets/img/svg/map-marker-alt.svg" alt="">
          <span class="font-bold">
            Mohammadpur Bus Stand, Dhaka
          </span>
        </div>

        <!-- SEARCH + BUTTON -->
        <div
          class="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto"
        >
          <!-- SEARCH -->
          <div
            class="flex items-center bg-gray-100 rounded-xl px-3 py-2 w-full sm:w-[150px]"
          >
            <img
              src="../assets/img/svg/Search (1).svg"
              alt=""
              class="w-4 h-4 mr-2"
            >
            <input
              type="text"
              placeholder="Search Food"
              class="bg-transparent outline-none border-none text-sm w-full placeholder-gray-400"
            >
          </div>

          <button class="flex items-center gap-2 rounded-2xl nav-btn">
            <img src="../assets/img/svg/profile.svg" alt="">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
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