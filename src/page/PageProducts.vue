<template>
  <div class=" router-container  flex items-center justify-center h-screen">
  <div class="flex rounded overflow-hidden  bg-white m-4 card-product" v-if="product">

    <div class="w-1/2 h-full object-cover px-6 py-4 shadow-lg">
      <img :src="product.image" :alt="product.title"  />
    </div>

    <div class="px-6 py-4 w-1/2">
      <div class="font-bold text-xl mb-2">{{ product.title }}</div>

      <div class="flex items-center mb-2">
        <span class="text-sm text-gray-600">Категория:</span>
        <span class="ml-2 text-sm font-semibold text-blue-600">{{ product.category }}</span>
      </div>

      <div class="flex items-center mb-4">
        <span class="text-sm text-gray-600">Рейтинг:</span>
        <div class="flex ml-2">
                <span v-for="star in 5" :key="star" class="text-yellow-500">
                    <i class="fas fa-star" :class="{'fa-solid': star <= product.rating.rate, 'fa-regular': star > product.rating.rate}"></i>
                </span>
        </div>
        <span class="ml-2 text-sm font-semibold">{{ product.rating.rate }}/5</span>
      </div>

      <p class="text-gray-700 text-base">{{ product.description }}</p>
      <h2 class="text-lg font-semibold mt-4">Цена: {{ product.price }}</h2>
      <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Купить
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
  import axios from "axios";
  import {useRoute} from "vue-router";
  import {onMounted, ref} from "vue";
  const route = useRoute();
  const loading = ref(false);
  const product = ref(null)
  const fetchProduct = async () => {
    try {
      loading.value = true;
      const response = await axios.get('https://fakestoreapi.com/products/'+route.params.id);

      product.value = response.data;
      loading.value = false;
    } catch (error) {
      console.error('Error fetching products:', error);
      loading.value = false;
    }
  };
  onMounted(() => {

    fetchProduct();

  });
</script>

<style scoped>
.card-product{
  height: calc(100vh - 134px); /* Учитываем реальную высоту вашего заголовка */
  width: calc(100% - 300px);
}
.router-container {
  height: calc(100vh - 84px); /* Учитываем реальную высоту вашего заголовка */
  overflow-y: auto;
}
</style>