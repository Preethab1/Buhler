<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
    
    <router-link :to="`/products/${product.id}`" class="flex-grow">
      <div class="flex justify-center items-center pt-4"> 
        <div class="w-full h-72 bg-gray-100">
          <img :src="product.imageUrl" :alt="product.name" class="w-full h-full object-contain">
        </div>
      </div>
      
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
        <p class="text-xl font-bold text-blue-600 mb-4">${{ product.price.toFixed(2) }}</p>
      </div>
    </router-link>
    
    <div class="p-4 pt-0">
      <button 
        @click="onAddToCart"
        class="w-full bg-teal-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-500 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['addToCart']);

const onAddToCart = () => {
  emit('addToCart', props.product);
};
</script>