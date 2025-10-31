<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      
      <button @click="goBack" class="mb-4 text-blue-600 hover:text-blue-800 font-medium">
        &lt; Back to Shop
      </button>
      
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-700">Your Items</h2>
            </div>
            
            <div class="divide-y divide-gray-200">
              <p v-if="cartItems.length === 0" class="p-6 text-gray-500">
                Your cart is empty.
              </p>
              
              <div v-for="item in cartItems" :key="item.cartItemId" class="flex items-center p-4">
                <img :src="item.imageUrl" :alt="item.name" class="w-20 h-20 object-cover rounded-md shadow-sm">
                
                <div class="flex-grow ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">{{ item.category }}</p>
                </div>
                
                <div class="mx-4">
                  <p class="text-lg font-semibold text-gray-800">${{ item.price.toFixed(2) }}</p>
                </div>
                
                <button @click="removeFromCart(item.cartItemId)" class="text-gray-400 hover:text-red-500 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
        
        <div class="lg:col-span-1 mt-8 lg:mt-0">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-12">
            <h2 class="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-4">
              Order Summary
            </h2>
            
            <div class="space-y-4 mt-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold text-gray-800">${{ total.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold text-gray-800">Free</span>
              </div>
              
              <div class="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-200 pt-4 mt-4">
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>
            </div>
            
            <button class="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useRouter } from 'vue-router';


import { cartItems, total, removeFromCart } from '../cart.js';


const router = useRouter();


const goBack = () => {
  router.push('/');
};
</script>