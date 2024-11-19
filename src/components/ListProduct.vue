<template>
  <div class="product-grid">

    <CardProduct v-for="product in products" :product="product"></CardProduct>
  </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardProduct from "./CardProduct.vue";
import productsData from './product.json';

// Создаем реактивную переменную для хранения продуктов
const products = ref(productsData);

// Функция для получения продуктов из API работает не стабильно по этому скачал просто json
// const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     products.value = response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };



</script>


<style scoped>
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px;
  }

  .product-grid > div {
    flex: 0 0 calc(33% - 40px); /* 4 карточки в ряд с учетом отступов */
    margin: 10px; /* Отступы между карточками */
  }
</style>
