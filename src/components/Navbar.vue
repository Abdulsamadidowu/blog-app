<script setup>
import { RouterLink } from "vue-router";
import {
  ChevronLeft,
  Search,
  Newspaper,
  BellDot,
  Rss,
  NewspaperIcon,
} from "lucide-vue-next";
</script>

<template>
  <nav>
    <div class="flex justify-between py-2 px-2.5">
      <div class="flex space-x-4">
        <div v-show="$route.path !== '/'">
          <ChevronLeft @click="$router.back()" :size="36" color="#06b6d4" />
        </div>
        <RouterLink to="/"
          ><h1 class="text-3xl text-[#06b6d4]">BLOG APP</h1></RouterLink
        >
      </div>
      <div class="lg:flex justify-center hidden">
        <div
          class="w-[350px] h-[40px] p-2.5 border-0 bg-[#252930] rounded-2xl flex justify-between items-center"
        >
          <Search :size="24" color="white" />
          <input
            placeholder="Search"
            class="border-0 text-white bg-transparent h-[30px] w-[150px]"
          />
        </div>
      </div>
      <div class="flex w-[100px] justify-between">
        <Newspaper :size="24" color="white" />
        <Rss :size="24" color="white" />
        <BellDot :size="24" color="white" />
      </div>
    </div>
    <div class="flex justify-center lg:hidden">
      <div
        class="w-[300px] h-[40px] p-2.5 border-0 bg-[#252930] rounded-2xl flex justify-between items-center"
      >
        <Search :size="24" color="white" />
        <input
          placeholder="Search"
          class="border-0 text-white bg-transparent h-[30px] w-[150px]"
        />
      </div>
    </div>
  </nav>
</template>
