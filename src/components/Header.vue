<template>
  <header class="bg-orange-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/">Главная</router-link>
          </li>

        </ul>
      </nav>
      <div class="text-lg font-bold flex space-x-4">
        <slot></slot>
      </div>
      <ul class="flex space-x-4" style="cursor:pointer;">
        <li v-if="storedData==0" >
          <router-link to="/login">Войти</router-link>
        </li>
        <li v-if="storedData==1" @click="Oute">
          <span>Выйти</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useRouter} from "vue-router";

const storedData = computed(() => {
  return localStorage.getItem('isAuth')==0?Number(0):Number(1)
});
const router =useRouter();
const Oute = () => {
  localStorage.setItem('isAuth', 0);
  window.location.reload();
};




</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>