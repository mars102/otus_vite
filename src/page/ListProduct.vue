<template>
  <div class="product-grid">
    <div v-if="products.length === 0">Ничего не найдено</div>
    <CardProduct @addCard="addCard" v-for="product in products" :product="product"></CardProduct>
  </div>
</template>

<script setup>
import {ref, onMounted, defineEmits} from 'vue';
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
