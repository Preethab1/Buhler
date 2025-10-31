<template>
  <div class="bg-gray-100 min-h-screen w-full flex flex-col">
    
    <Navbar :cart-count="cartCount" />

    <router-view />
  
  </div>
</template>

<script setup>
import { cartCount } from './cart.js';
import Navbar from './components/Navbar.vue';
</script>

<style>

</style>