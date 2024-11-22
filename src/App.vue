<script setup>
import {ref, onMounted, computed} from 'vue';
import ListProduct from "./components/ListProduct.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";

import SearchComponent from "./components/SearchComponent.vue";
const loading = ref(true);
import productsData from './components/product.json';
import axios from "axios";
const products = ref([]);
// Устанавливаем таймер, чтобы имитировать загрузку так как плохо работает апи то грузит то не грузит
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});


const filteredItems = computed(() => {
  if (!searchTerm.value) return products.value;
  return products.value.filter(item =>
      item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});


const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const onSearch = (term) => {
  searchTerm.value = term;
};
const searchTerm = ref('');
</script>

<template>

  <Loader v-if="loading"></Loader>
  <Header v-if="!loading">
    <SearchComponent  v-model="searchTerm" @search="onSearch"></SearchComponent>
  </Header>
  <ListProduct v-if="!loading" :products="filteredItems" ></ListProduct>
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
