<script setup>
import { ref, onMounted } from 'vue';
import ListProduct from "./components/ListProduct.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
const loading = ref(true);

// Устанавливаем таймер, чтобы имитировать загрузку так как плохо работает апи то грузит то не грузит
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>

  <Loader v-if="loading"></Loader>
  <Header v-if="!loading" ></Header>
  <ListProduct v-if="!loading" ></ListProduct>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
