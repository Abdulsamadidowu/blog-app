<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Loadspinner from '../components/Loadspinner.vue';
import Postlist from '../components/Postlist.vue';
import { useScreenSize } from '../resolution';
import { User,Heart,ThumbsDown,Bookmark,View } from "lucide-vue-next";
import { useToast } from 'vue-toastification';


const route = useRoute()
const postsdata = ref({posts:[]});
const post = ref({})
const loading = ref(true)
const errorMsg = ref(null)

const {isDesktop} = useScreenSize();
const toast = useToast()
const blockade = ()=>{
  toast.error("Log in to like or comment")
}

onMounted(async () => {
  const postId = route.params.id

  try {
    const postRes = await fetch(`https://dummyjson.com/posts/${postId}`);
    post.value = await postRes.json();
    console.log(post.value)

    const res = await fetch("https://dummyjson.com/posts");
    postsdata.value = await res.json();
    console.log(postsdata.value)

  } catch (error) {
    console.log("problem fetching posts",error)
    errorMsg.value= "Couldnt load it man,im sorry"
  }finally{
    loading.value=false
  }
});

</script>
<template>
  <div class="mx-auto my-20 " v-if="loading"><loadspinner/></div>
  <h1 class="mx-auto my-20 " v-else-if="errorMsg">{{ errorMsg }}</h1>
  <div v-else class="flex justify-between" >
    <main class="flex-1 p-2 lg:w-[800px]  ">
      <article class=" flex flex-col gap-5" >
    <h1 class="text-2xl text-center text-white">{{ post.title }}</h1>
  <section class="border-2 border-[#8b5cf6] rounded-2xl w-full p-2 h-[600px] md:w-700px md:h-[800px] ">
    <div class="flex w-full justify-center mb-5">
      <img src="/blog post top.png" class="w-full md:w-[500px] h-[300px] rounded-2xl border-2 border-[#8b5cf6]" />
    </div>
   <div class="flex flex-col gap-5 lg:items-center ">
     <div class="flex w-[250px] justify-between items-center ">
      <div class=" flex gap-1 p-2 text-blue-400  rounded-2xl border-[1px] border-white"><User :size="24" color="white"/>{{ post.userId }}</div>
      <div class="flex gap-1 text-white"><View :size="24" color="white"/>{{ post.views }}</div>
    </div>
    <div class="flex w-[200px] gap-2 mb-5">
      <span v-for="tag in post.tags" :key="tag">
        <p class="text-green-500">#{{ tag }}</p>
      </span>
    </div>
   </div>
    <div class="lg:flex lg:justify-center   ">
      <p class="text-white lg:w-[750px] ">{{ post.body }}</p>
    </div>
  </section>
  <div class="flex flex-col items-center gap-4 my-2.5 ">
    <div class="flex w-[200px] justify-between">
      <router-link to="/signup"><button @click="blockade" class="flex gap-1 text-white"><Heart :size="24" color="red"/>  {{ post.reactions.likes }}</button></router-link>
       <router-link to="/signup"><button @click="blockade" class="flex gap-1 text-white"><ThumbsDown :size="24" color="white"/> {{ post.reactions.dislikes }}</button></router-link>
        <router-link to="/signup"><button @click="blockade" class="flex"><Bookmark :size="24" color="green"/></button></router-link>
    </div>
    <router-link to="/"><button class="w-[150px] h-[60px] border-2 rounded-2xl border-green-300 text-white ">Go Home</button></router-link>
  <router-link to="/signup"><a class="text-white">Report an issue</a></router-link>
  </div>
  </article>
    </main>
    <aside v-if="isDesktop" class="w-[400px] flex justify-center max-h-screen overflow-y-auto">
      <div class="mx-auto my-5 " v-if="loading"><loadspinner/></div>
      <h1 class="mx-auto my-5 " v-else-if="errorMsg">{{ errorMsg }}</h1>
      <Postlist v-else :posts="postsdata.posts" />
    </aside>
  </div>
</template>

