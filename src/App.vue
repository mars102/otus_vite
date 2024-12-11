<script setup>
import {ref, onMounted, computed} from 'vue';
import ListProduct from "./page/ListProduct.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import SearchComponent from "./components/SearchComponent.vue";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useRouter} from "vue-router";
import { useOrderStore } from "./stores/order.js";
import {storeToRefs} from "pinia";
import {useProductsStore} from "./stores/products.js";
import {useAuthStore} from "./stores/auth.js";
import {useLoadStore} from "./stores/load.js"

const orderStore = useOrderStore();  // подключаем стор корзины
const { basket  } = storeToRefs(orderStore)

const loadStore = useLoadStore(); // подключаем стор загрузки
const { loading } = storeToRefs(loadStore)

const productsStore = useProductsStore(); // подключаем стор со списком продуктов
const { searchTerm } = storeToRefs(productsStore); // список продуктов и переменная обозначения закгрузки

const authStore = useAuthStore(); // стор авторизации
const { storedData } = storeToRefs(authStore); // переменная авторизации/ не авторизован

const router = useRouter();

const openFormOrder = () => {
   router.push("/basket")
};

onMounted(() => {
  productsStore.fetchProducts();
  authStore.initAuth()
});

</script>

<template>
  <Loader v-if="loading"></Loader>
  <div>
    <Header  class="sticky-header" v-if="storedData==1">
      <SearchComponent  v-model="searchTerm" @search="productsStore.onSearch"></SearchComponent>
      <ShoppingCart :tovar="basket" @click="openFormOrder"></ShoppingCart>
    </Header>
    <div class="router-container ">
      <router-view @login="authStore.onLogin"  @addBasket="orderStore.addBasket" @delBascket="orderStore.removeBascket" :products="productsStore.filteredItems" :tovar="basket" ></router-view>
    </div>
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
