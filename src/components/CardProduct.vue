<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
    <img :src="product.image" alt="Product Image" class="rounded-t-lg w-full h-48 object-cover" @click="goToProduct(product.id)" />
    <div class="p-4 flex flex-col flex-grow" @click="goToProduct(product.id)">
      <h2 class="text-lg font-semibold text-gray-800" style="cursor: pointer;" >{{ product.title }}</h2>

      <p class="text-gray-600 my-2 flex-grow">{{ product.description }}</p>
      <p class="font-bold text-xl text-gray-900">Цена: {{ product.price.toFixed(2) }} Руб</p>
      <div class="flex items-center mt-2">
        <span class="text-yellow-500">{{ product.rating.rate }} ★</span>
        <span class="text-gray-600 ml-2">({{ product.rating.count }} reviews)</span>
      </div>
    </div>
    <button @click="addToCart(product)" class="mt-4 mb-4 mx-2 bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
      В корзину
    </button>
  </div>
</template>

<script setup>


import {defineEmits} from "vue";
import {useRouter} from "vue-router";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['addCard']);
const onInput = () => {

};

// Функция добавления товара в корзину
const addToCart = (item) => {
  emit('addCard', item);
};
const router =useRouter();
const goToProduct = (id) => {

  router.push({name:'product', params:{id:id}})
}
</script>

<style scoped>
/* Добавьте стили здесь при необходимости */
</style>