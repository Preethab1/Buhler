<template>
  <nav class="bg-white shadow-md">
    <div class="px-6 py-4 flex justify-between items-center">
      
      <div> 
        <router-link to="/">
        <img class="w-auto h-6" src="../assets/buhler-logo.svg" alt="Buhler" />
        </router-link>
      </div>

      <div class="flex items-center space-x-4">

        <div class="flex items-center space-x-2 text-sm">
          <span class="text-gray-600 font-semibold">{{ formattedDate }}</span>
          <span class="bg-gray-800 text-white px-2.5 py-1 rounded-full font-semibold text-xs">
            {{ formattedTime }}
          </span>
        </div>
        
        <button 
          @click="goToCheckout()"
          class="relative text-gray-700 hover:text-blue-600"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span 
            v-if="cartCount > 0" 
            class="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartCount }}
          </span>
        </button>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// Props
defineProps({
  cartCount: Number
});


const emit = defineEmits(['view-cart']);


const router = useRouter();
const goToCheckout = () => {


  

router.push('/checkout'); 
  emit('view-cart'); 
};



const now = ref(new Date());
let intervalId = null;

const updateTime = () => { 
  now.value = new Date(); 
};

onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (intervalId) { 
    clearInterval(intervalId); 
  }
});

const formattedDate = computed(() => {
  return now.value.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
});

const formattedTime = computed(() => {
  return now.value.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
});
</script>