<script setup>
import { defineProps } from 'vue';
import Postcard from './Postcard.vue';
import { useRoute } from 'vue-router';
defineProps({
    posts:{
        type:Array
    }

})
const route= useRoute()
</script>

<template>
    <section :class="route.path === '/' 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5 gap-5 gap-x-10 py-5 px-8'
    : 'grid grid-cols-1 gap-4 w-[350px] py-2 px-2'">
        <Postcard :post="post" v-for="(post) in posts" :key="post.id"/>
    </section>
</template>
