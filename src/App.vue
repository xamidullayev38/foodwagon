<script setup>
import AppPromo from './components/AppPromo.vue';
import Flash from './components/Flash.vue';
import FeaturedRestaurants from './components/FeaturedRestaurants.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Popular from './components/Popular.vue';
import SearchByFood from './components/SearchByFood.vue';
import Work from './components/Work.vue';

</script>

<template>
  <Header />
  <Hero />
  <Flash />
  <Work />
  <Popular />
  <FeaturedRestaurants />
  <SearchByFood />
  <AppPromo />
</template>

<style lang="scss">
  @use './assets/styles/main.scss'
</style>
