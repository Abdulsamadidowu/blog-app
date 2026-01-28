<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { User,Heart,ThumbsDown,Bookmark,View } from "lucide-vue-next";

const postProps = defineProps({
  post: {
    type: Object,
  },
});
let context = postProps.post.body;
context = context.substring(0, 90) + "...";
</script>

<template>
  <RouterLink :to="`/post/${post.id}`">
    <div class="flex justify-center">
      <article class="border-2 rounded-2xl flex flex-col justify-between  p-2 h-[320px] max-w-[450px] border-[#8b5cf6] bg-[#252930] ">
      <div class="post-header">
        <h2 class="text-white text-2xl h-[96px]">{{ post.title }}</h2>
        <div class="flex w-[200px] justify-between">
          <div class=" flex gap-1 p-2 text-blue-400  rounded-2xl border-[1px] border-white"><User :size="24" color="white"/>{{ post.userId }}</div>
          <div class="flex gap-1 text-white"><View :size="24" color="white"/>{{ post.views }}</div>
        </div>
        <div class="post-content">
          <div class="my-2.5 flex w-[200px] gap-2">
            <span v-for="tag in post.tags" :key="tag">
              <p class="text-green-500">#{{ tag }}</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p class="text-gray-300 ">{{ context }}</p>
        <a href="/post" class="text-green-600 hover:text-green-300"
          >Show more</a
        >
      </div>

      <div class=" self-end flex w-[200px] justify-between">
        <button class="flex gap-1 text-white"><Heart :size="24" color="red"/>  {{ post.reactions.likes }}</button>
        <button class="flex gap-1 text-white"><ThumbsDown :size="24" color="white"/> {{ post.reactions.dislikes }}</button>
        <button class="flex"><Bookmark :size="24" color="green"/> </button>
      </div>
    </article>
    </div>
  </RouterLink>
</template>
