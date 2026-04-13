<template>
    <footer class="bg-[#1f1f1f] text-gray-400 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-6">

            <div>
                <h3 class="text-white font-semibold mb-6">Our top cities</h3>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
                    <ul v-for="(col, i) in cities" :key="i" class="space-y-2">
                        <li v-for="city in col" :key="city" class="hover:text-white cursor-pointer transition">
                            {{ city }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-700 my-10"></div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-10">

                <div>
                    <h4 class="text-white font-semibold mb-4">Company</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="item in company" :key="item" class="hover:text-white cursor-pointer">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="item in contact" :key="item" class="hover:text-white cursor-pointer">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-semibold mb-4">Legal</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="item in legal" :key="item" class="hover:text-white cursor-pointer">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div></div>

                <div>
                    <h4 class="text-white font-semibold mb-4">FOLLOW US</h4>

                    <div class="flex gap-4 mb-6">
                        <i class="fab fa-instagram hover:text-white cursor-pointer"></i>
                        <i class="fab fa-facebook hover:text-white cursor-pointer"></i>
                        <i class="fab fa-twitter hover:text-white cursor-pointer"></i>
                    </div>

                    <p class="text-sm mb-4">
                        Receive exclusive offers in your mailbox
                    </p>

                    <div class="flex w-full max-w-sm">
                        <input type="email" placeholder="Your email"
                            class="flex-1 min-w-0 px-4 py-2 rounded-l-lg bg-gray-700 text-white outline-none" />
                        <button
                            class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-5 rounded-r-lg font-semibold whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm">
                <p>All rights Reserved © Your Company, 2021</p>
                <p class="mt-2 md:mt-0">Made with 🧡 by Themewagon</p>
            </div>

        </div>
    </footer>
</template>

<script setup>
const cities = [
    ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
    ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
    ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
    ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
    ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"]
];

const company = ["About us", "Team", "Careers", "Blog"];
const contact = ["Help & Support", "Partner with us", "Ride with us"];
const legal = ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"];
</script>