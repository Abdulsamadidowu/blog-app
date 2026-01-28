<script setup>
import { computed, onMounted, ref } from "vue";
import Postlist from "../components/Postlist.vue";
import Loadspinner from "../components/Loadspinner.vue";
import Pagination from "../components/Pagination.vue";

const postsdata = ref([]);
const limit = ref(30);
const totalPosts = ref(0);
const currentPage = ref(1);
const loading = ref(true);
const errorMsg = ref(null);

const totalPages = computed(() => {
  return Math.ceil(totalPosts.value / limit.value);
});
const nextPage = () => {
  if(currentPage.value < totalPages.value){
  fetchingData(currentPage.value + 1);
  }
};
const prevPage = () => {
  if(currentPage.value > 1 ){
  fetchingData(currentPage.value - 1);
  }
};

const fetchingData = async (pageNumber) => {
  try {
    const skip = (pageNumber - 1) * limit.value;
    const res = await fetch(
      `https://dummyjson.com/posts?limit=${limit.value}&skip=${skip}`,
    );
    const data = await res.json();
    postsdata.value = data.posts;
    console.log(postsdata.value);
    limit.value = data.limit;
    totalPosts.value = data.total;
    currentPage.value = pageNumber
  } catch (error) {
    console.log("problem fetching posts broski", error);
    errorMsg.value = "Unable to connect at this moment";
  } finally {
    loading.value = false;
  }
};

onMounted(()=>{fetchingData(1)});
</script>

<template>
  <div class="mx-auto my-20" v-if="loading"><loadspinner /></div>
  <div
    class="mx-auto flex justify-center items-center h-dvh"
    v-else-if="errorMsg"
  >
    <h1 class="text-white text-3xl">{{ errorMsg }}</h1>
  </div>
  <div v-else>
    <Postlist :posts="postsdata" />
  <Pagination
    :current-page="currentPage"
    :total-pages="totalPages"
    :prevPage="prevPage"
    :nextPage="nextPage"
    :disabled="loading"
  />
  </div>
</template>
