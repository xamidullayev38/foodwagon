<template>
    <div class="hero py-[132px]  overflow-hidden">
        <div class="container relative">
            <div class="flex  items-start flex-col">
                <h1 class="text-[88px] text-white font-semibold mb-2 leading-25">Are you starving?</h1>
                <p class="text-[18px] mb-5">Within a few clicks, find meals that are accessible near you</p>
                <div class="flex flex-col p-6 rounded-2xl bg-white">
                    <div class="w-full max-w-4xl mx-auto bg-white  p-4">
                        <div class="flex items-center gap-6 mb-4">
                            <button
                                class="flex items-center gap-2 px-4 py-2 rounded-2xl bg-orange-100 text-orange-600 font-medium">
                                <img src="../assets/img/svg/mtot.svg" alt="">
                                Delivery
                            </button>

                            <button
                                class="flex items-center gap-2 px-4 py-2 rounded-2xl text-gray-500 hover:bg-gray-100">
                                <img src="../assets/img/svg/bag.svg" alt="">
                                Pickup
                            </button>
                        </div>

                        <div class="flex items-center gap-3">
                            <div class="w-[420px] flex items-center flex-1 bg-gray-100 rounded-xl px-4 py-3 gap-2">
                                
                                <img src="../assets/img/svg/map-marker-alt.svg" alt="">

                                <input type="text" placeholder="Enter Your Address"
                                    class="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400" />
                            </div>

                            
                            <button
                                class="flex cursor-pointer items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl">
                                
                                Find Food
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <img class="hero-img" src="../assets/img/heroImg.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>
<style lang="scss">
@use '../assets/styles/_variables' as *;

.hero {
    background: $base;
}

.hero-img{
    position: absolute;
    bottom: -150px;
    right: -100px;
}
.item{
    overflow: hidden ;
}
@media (max-width:1024px) {
    .hero-img{
        display: none;
    }
}
</style>
