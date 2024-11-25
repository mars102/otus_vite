<script setup>
import {ref, onMounted, computed} from 'vue';
import ListProduct from "./components/ListProduct.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import SearchComponent from "./components/SearchComponent.vue";
const loading = ref(false);

import axios from "axios";

import PageOrder from "./components/PageOrder.vue";

const products = ref([]);
const basket  = ref([]);
const isOrder = ref(false)



const filteredItems = computed(() => {
  if (!searchTerm.value) return products.value;
  return products.value.filter(item =>
      item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});


const fetchProducts = async () => {
  try {
    console.log("ghbdtn vbh")
    loading.value = true;
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;

    loading.value = false;

  } catch (error) {
    console.error('Error fetching products:', error);
    loading.value = false;
  }
};


const addBasket = (tovar) => { // принимаем данные о добавлении в корзину
  basket.value.push(tovar);
};

const closeOrder = () => {
  isOrder.value = false
};


const openFormOrder = () => {
  isOrder.value = true
};



onMounted(() => {

  fetchProducts();

});
const onSearch = (term) => {
  searchTerm.value = term;
};
const searchTerm = ref('');
</script>

<template>

  <Loader v-if="loading"></Loader>
  <div v-if="!loading">
    <Header >

      <SearchComponent  v-model="searchTerm" @search="onSearch"></SearchComponent>
      <ShoppingCart :tovar="basket" @click="openFormOrder"></ShoppingCart>
    </Header>
    <ListProduct @addBasket="addBasket" v-if="!isOrder" :products="filteredItems" ></ListProduct>
    <PageOrder :tovar="basket" v-if="isOrder" @closeOrder = "closeOrder"></PageOrder>
  </div>
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
