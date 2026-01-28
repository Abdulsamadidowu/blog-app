<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

defineProps({
  currentPage: Number,
  totalPages: Number,
  prevPage: Function, 
  nextPage: Function,
  disabled: Boolean,
});
</script>
<template>
  <div class="flex justify-center">
    <div class="flex w-[300px] justify-between">
      <button @click="prevPage" :disabled="currentPage === 1" class="cursor-pointer">
        <ChevronLeft :size="32" color="white"/>
      </button>

      <span class="text-white text-[20px] cursor-pointer">
        {{ currentPage }} of {{ totalPages }}
      </span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="cursor-pointer"
      >
        <ChevronRight :size="32" color="white"/>
      </button>
    </div>
  </div>
</template>
