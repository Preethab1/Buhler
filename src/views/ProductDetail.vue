<template>
  <div class="bg-gray-100 min-h-screen py-10 px-4 md:px-12">
    <button @click="goBack" class="text-lg font-medium text-blue-600 hover:text-blue-800 mb-6">
      &lt; Back
    </button>
    
    <div v-if="!product" class="text-center text-2xl text-gray-500 py-20">
      Product not found.
    </div>

    <div v-else class="flex flex-col md:flex-row bg-white p-6 md:p-10 rounded-lg shadow-lg">
      
      <div class="md:w-1/2 flex justify-center items-center">
        <img :src="product.imageUrl" :alt="product.name" class="w-full max-w-lg h-auto object-contain rounded-md">
      </div>

      <div class="md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
        <p class="text-2xl text-gray-500 mb-6 capitalize">
          {{ product.category.replace(/[^a-zA-Z0-9 ]/g, ' ') }}
        </p>
        <p class="text-4xl font-light text-gray-800 mb-8">
          ${{ product.price.toFixed(2) }}
        </p>
        
        <button @click="handleAddToCart" class="w-full bg-teal-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-500 transition-colors duration-300 flex items-center justify-center space-x-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { products, addToCart } from '../cart.js';

const route = useRoute();
const router = useRouter();


const productId = route.params.id;


const product = computed(() => {
  return products.value.find(p => p.id === productId);
});


const handleAddToCart = () => {
  if (product.value) {
    addToCart(product.value);
    alert('Added to cart!');
  }
};

const goBack = () => {
  router.go(-1);
};
</script>