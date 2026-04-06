<script setup>
import WorkCard from './WorkCard.vue';
import img1 from '../assets/img/location.png';
import img2 from '../assets/img/order.png';
import img3 from '../assets/img/pay.png';
import img4 from '../assets/img/enjoy.png';
const items = [
    {
        id: 1,
        icon: img1,
        title: "Select Location",
        subtitle: "Choose the location where your food will be delivered."
    },
    {
        id: 2,
        icon: img2,
        title: "Choose order",
        subtitle: "Check over hundreds of menus to pick your favorite food"
    },
    {
        id: 3,
        icon: img3,
        title: "Pay advanced",
        subtitle: "It's quick, safe, and simple. Select several methods of payment."
    },
    {
        id: 4,
        icon: img4,
        title: "Enjoy meals",
        subtitle: "Food is made and delivered directly to your home."
    },
]

</script>

<template>
    <div class="mb-10">
        <div class="bg-gradient-to-b from-[#fdf3e7] to-white pt-20 pb-40 text-center">
            <h2 class="text-3xl font-bold text-orange-500">
                How does it work
            </h2>
        </div>

        <div class="max-w-6xl mx-auto -mt-32 px-4">
            <div class="flex flex-col md:flex-row gap-8">

                <WorkCard v-for="item in items" :key="item.id" :icon="item.icon" :title="item.title"
                    :subtitle="item.subtitle" class="flex-1" />

            </div>
        </div>
    </div>
</template>
