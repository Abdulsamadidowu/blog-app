<script setup>
import { TriangleAlert } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="flex flex-col justify-center gap-5 items-center mx-auto h-dvh">
        <TriangleAlert :size="80" color="red"/>
        <h1 class="text-white text-5xl">404</h1>
        <div class="text-center ">
            <h2 class="text-2xl text-white">oops! Page not found</h2>
            <p class="text-gray-300">We cant seem to find the page your'e linking,might have been moved or deleted</p>
            <p class="text-gray-300">Lodge a complaint to Layinka@git.com </p>
            <RouterLink to="/"><a class="text-purple-500">Go home ?</a></RouterLink>
        </div>
    </div>
</template>