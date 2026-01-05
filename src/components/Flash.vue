<script setup>
import img from '../assets/img/card1.png'
import img2 from '../assets/img/card2.png'
import img3 from '../assets/img/card3.png'
import img4 from '../assets/img/card4.png'

const cards = [
    { id: 1, img, discount: 15, title: 'Greys Vage', deadLine: 6 },
    { id: 2, img: img2, discount: 10, title: 'Greys Sage', deadLine: 6 },
    { id: 3, img: img3, discount: 25, title: 'Greys Vague', deadLine: 6 },
    { id: 4, img: img4, discount: 20, title: 'Greys Vage', deadLine: 6 },
]
</script>



<template>
    <div class="container ">
        <div class="mx-auto px-4 py-12">
            <div class="grid gap-6
             grid-cols-1
             sm:grid-cols-2
             lg:grid-cols-3
             xl:grid-cols-4">
                <div v-for="item in cards" :key="item.id" class="bg-white rounded-2xl overflow-hidden cursor-pointer
               shadow-sm hover:shadow-2xl
               transform hover:-translate-y-1
               transition-all duration-300 ease-out">
                    <div class="relative">
                        <img :src="item.img" alt="Food" class="w-full h-[220px] object-cover" />

                        <div class="absolute bottom-0 left-0
                   bg-yellow-500 text-white
                   px-4 py-2 rounded-tr-2xl">
                            <span class="text-3xl font-bold">{{ item.discount }}%</span>
                            <span class="block text-sm -mt-1">off</span>
                        </div>
                    </div>

                    <div class="p-4">
                        <h3 class="text-xl font-bold text-gray-900">
                            {{ item.title }}
                        </h3>

                        <p class="mt-2 inline-block text-sm
                   bg-orange-100 text-orange-500
                   px-3 py-1 rounded-lg font-medium">
                            {{ item.deadLine }} Days Remaining
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
