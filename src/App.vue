<script setup>
import Flash from './components/Flash.vue';
import FeaturedRestaurants from './components/FeaturedRestaurants.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Popular from './components/Popular.vue';
import Work from './components/Work.vue';

</script>

<template>
  <Header />
  <Hero />
  <Flash />
  <Work />
  <Popular />
  <FeaturedRestaurants />
</template>

<style lang="scss">
  @use './assets/styles/main.scss'
</style>
