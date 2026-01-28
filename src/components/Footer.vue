<script setup>
import { RouterLink } from 'vue-router';
import { Twitter,Instagram,Facebook } from 'lucide-vue-next';

</script>
<template>
    <footer class="flex flex-col gap-2 md:flex-row md:justify-between items-center">
        <p class="w-[350px] text-white text-center md:hidden">This is a medium,we are not responsible for information shared</p>
        <div class="flex w-[300px] justify-between md:w-[200px] ">
            <a class="text-white">Donations</a>
            <RouterLink to="/contactus"><a class="text-white">Contact us</a></RouterLink>
            <RouterLink to="/"><a class="text-white">home</a></RouterLink>
        </div>
        <p class="w-[350px] text-center text-white hidden md:block">This is a medium,we are not responsible for information shared</p>
        <div class="flex w-[300px] justify-between md:w-[200px]">
            <Twitter :size="24" color="white"/>
            <Instagram :size="24" color="white"/>
            <Facebook :size="24" color="white"/>
        </div>
    </footer>          
</template>