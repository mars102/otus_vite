<template>
  <div class="product-grid">
    <div v-if="products.length === 0">Ничего не найдено</div>
    <CardProduct @addCard="addCard" v-for="product in products" :product="product"></CardProduct>
  </div>
</template>

<script setup>
import {ref, onMounted, defineEmits} from 'vue';
import axios from 'axios';
import CardProduct from "../components/CardProduct.vue";
import { defineProps } from 'vue';
const emit = defineEmits(['addBasket']);
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});


const addCard = (tovar) => {
  emit('addBasket', tovar);

};


// Создаем реактивную переменную для хранения продуктов


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
