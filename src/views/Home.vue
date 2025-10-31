<template>
  <main class="px-6 py-8 flex-grow">
    
    <div 
      v-for="(categoryProducts, categoryName) in productsByCategory" 
      :key="categoryName"
      class="mb-2"
    >
      
      <h2 class="text-xl font-bold text-gray-900 mb-2 capitalize pl-4 border-l-4 border-blue-600">
        {{ categoryName.replace(/[^a-zA-Z0-9 ]/g, ' ') }}
      </h2>
      
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard 
          v-for="product in getPaginatedProducts(categoryName)" 
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>

      <div class="mt-2 flex justify-center items-center space-x-2">
        <button
          v-for="page in getTotalPages(categoryName)"
          :key="page"
          @click="changePage(categoryName, page)"
          :class="[
            'w-2.5 h-2.5 rounded-full transition-colors duration-200',
            categoryCurrentPage[categoryName] === page 
              ? 'bg-gray-800' 
              : 'bg-gray-300 hover:bg-gray-500'
          ]"
        >
          <span class="sr-only">Go to page {{ page }}</span>
        </button>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ProductCard from '../components/ProductCard.vue';

import { addToCart, productsByCategory } from '../cart.js'; 


const itemsPerPage = ref(4);
const categoryCurrentPage = ref({});


watch(productsByCategory, (newCategories) => {
  for (const categoryName of Object.keys(newCategories)) {
    if (!categoryCurrentPage.value[categoryName]) {
      categoryCurrentPage.value[categoryName] = 1;
    }
  }
}, { immediate: true });



const getTotalPages = (categoryName) => {
  const products = productsByCategory.value[categoryName] || [];
  return Math.ceil(products.length / itemsPerPage.value);
};


const getPaginatedProducts = (categoryName) => {
  const products = productsByCategory.value[categoryName] || [];
  const totalProducts = products.length;
  const currentPage = categoryCurrentPage.value[categoryName] || 1;
  const perPage = itemsPerPage.value;
  const totalPages = getTotalPages(categoryName); 

  let startIndex;
  let endIndex;


  if (currentPage === totalPages && currentPage > 1 && totalProducts % perPage !== 0) {
    endIndex = totalProducts;
    startIndex = totalProducts - perPage;
    if (startIndex < 0) {
      startIndex = 0;
    }
  } else {


    startIndex = (currentPage - 1) * perPage;
    endIndex = startIndex + perPage;
  }
  
  return products.slice(startIndex, endIndex);
};

const changePage = (categoryName, page) => {
  const totalPages = getTotalPages(categoryName);
  if (page >= 1 && page <= totalPages) {
    categoryCurrentPage.value[categoryName] = page;
  }
};
</script>