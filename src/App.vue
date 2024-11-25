<script setup>
import {ref, onMounted, computed} from 'vue';
import ListProduct from "./page/ListProduct.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import SearchComponent from "./components/SearchComponent.vue";
const loading = ref(false);
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from "axios";

import PageOrder from "./page/PageOrder.vue";
import {useRouter} from "vue-router";

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



const router =useRouter();
const openFormOrder = () => {
   router.push("/basket")
};



onMounted(() => {

  fetchProducts();

});
const storedData = computed(() => {
  console.log("sdflksdl;kfl;sdkf")
  console.log(Number(localStorage.getItem('isAuth'))!=1&&Number(localStorage.getItem('isAuth'))!=0 ? 0:Number(localStorage.getItem('isAuth')))

 return Number(localStorage.getItem('isAuth'))!=1&&Number(localStorage.getItem('isAuth'))!=0 ? 0:Number(localStorage.getItem('isAuth'));
});
const onSearch = (term) => {
  searchTerm.value = term;
};
const searchTerm = ref('');


</script>

<template>

  <Loader v-if="loading"></Loader>
  <div v-if="!loading">
    <Header  class="sticky-header" v-if="storedData==1">
      <SearchComponent  v-model="searchTerm" @search="onSearch"></SearchComponent>
      <ShoppingCart :tovar="basket" @click="openFormOrder"></ShoppingCart>
    </Header>
    <div class="router-container ">
      <router-view  @addBasket="addBasket"  :products="filteredItems" :tovar="basket" ></router-view>
    </div>
<!--    <ListProduct @addBasket="addBasket" v-if="!isOrder" :products="filteredItems" ></ListProduct>-->
<!--    <PageOrder :tovar="basket" v-if="isOrder" @closeOrder = "closeOrder"></PageOrder>-->
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
.sticky-header {
  position: sticky; /* Устанавливаем фиксированное положение */
  top: 0; /* Привязываем к верхней части */
  z-index: 1000; /* Обеспечиваем, чтобы заголовок был на переднем плане */

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Добавляем тень для эффекта */
}

.router-container {
  height: calc(100vh - 84px); /* Учитываем реальную высоту вашего заголовка */
  overflow-y: auto;
}
</style>
