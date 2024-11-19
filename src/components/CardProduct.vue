<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
    <img :src="product.image" alt="Product Image" class="rounded-t-lg w-full h-48 object-cover" />
    <div class="p-4 flex flex-col flex-grow">
      <h2 class="text-lg font-semibold text-gray-800">{{ product.title }}</h2>
      <p class="text-gray-600 my-2 flex-grow">{{ product.description }}</p>
      <p class="font-bold text-xl text-gray-900">Цена: {{ product.price.toFixed(2) }} Руб</p>
      <div class="flex items-center mt-2">
        <span class="text-yellow-500">{{ product.rating.rate }} ★</span>
        <span class="text-gray-600 ml-2">({{ product.rating.count }} reviews)</span>
      </div>
    </div>
    <button @click="addToCart" class="mt-4 mb-4 mx-2 bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
      В корзину
    </button>
  </div>
</template>

<script setup>


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Функция добавления товара в корзину (например)
const addToCart = () => {
  console.log(`${props.product.title} добавлен в корзину`);
};
</script>

<style scoped>
/* Добавьте стили здесь при необходимости */
</style>