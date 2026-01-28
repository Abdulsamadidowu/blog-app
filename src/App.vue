<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Loadspinner from './components/Loadspinner.vue';
import { RouterView } from 'vue-router';
// import Loadspinner from './components/Loadspinner.vue';
</script>

<template>
  <div class="bg-[#1a1d23] ">
    <Navbar/>
  
  <Suspense>
    <template #default>
      <RouterView/>
    </template>
    <template #fallback>
      <Loadspinner />
    </template>
  </Suspense>
  
  <Footer/>
  </div>
</template>


