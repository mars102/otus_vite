<template>
  <div class="flex items-top justify-center p-10">
    <div class="bg-white shadow rounded-lg p-5">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">Оформление заказа</h1>
        <button class="text-gray-600 hover:text-gray-900 focus:outline-none" @click="closeOrder" aria-label="Закрыть">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div v-if="props.tovar.length">
        <div class="container">
          <div :class="level==1||level==2||level==3?'circle blue':'circle gray' ">1</div>
          <div :class="level==1||level==2||level==3?'line line-blue':'line line-gray' " class=""></div>
          <div :class="level==2||level==3?'circle blue':'circle gray'">2</div>
          <div :class="level==2||level==3?'line line-blue':'line line-gray' "></div>
          <div :class="level==3?'circle blue':'circle gray' ">3</div>
        </div>
        <br>
        <hr>
        <br>
        <Loader v-if="load"></Loader>
        <div v-if="level==1" style="min-width: 600px">
          <b>Список товаров:</b>
          <p v-for="product in props.tovar" class="mt-3 text-gray-700 " style="display: flex; justify-content: space-between;">
            <span >{{product.title}}</span> <b style="padding-left: 30px;">{{product.price}} руб </b>
          </p>
          <br>
          <hr>
          <br>
          <div style="display: flex; justify-content: space-between;">
            <div style="padding-right: 20px;">
              <b style="font-size: 25px;"> Итого: {{ props.tovar.reduce((sum, product) => sum + product.price, 0).toFixed(2)}}  руб</b>
            </div>
            <div>
              <button @click="next" class="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span>Далее</span>
              </button>
            </div>
          </div>
        </div>
        <div v-if="level==2" style="min-width: 600px">

          <FormOrder @sendOrder="sendOrder"></FormOrder>
        </div>
        <div v-if="level==3" style="min-width: 600px">
          <SendOrder></SendOrder>
        </div>
      </div>
      <div v-else style="width: 500px; height: 300px; padding: 20px;">=( Корзина пуста. Нажмите крестик чтоб вернутся к списку товаров.</div>
  </div>
  </div>
</template>

<script setup>
import SendOrder from "../components/SendOrder.vue";
import Loader from "../components/Loader.vue";

const level = ref(1) // 1, 2, 3

import {defineEmits, defineProps, ref} from "vue";
import FormOrder from "../components/FormOrder.vue";
import axios from "axios";
import {useRouter} from "vue-router";
const router =useRouter();
const props = defineProps(["tovar"]);
const closeOrder = () => {
  router.push("/")
};

const load = ref(false)
const sendOrder = async (data) => {
  load.value= true
  let order = {
    info: data,
    order: props.tovar
  }

  const response = await axios.post('https://httpbin.org/post', order);
  if (response.status == 200) {
    level.value = 3
    setTimeout(() => {
      router.push("/")
    }, 5000); // 5000 миллисекунд = 5 секунд

  }
  load.value= false


};


const next = () => {

  level.value = level.value+1
};

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
  }
  .blue {
    background-color: blue;
  }
  .gray {
    background-color: gray;
    opacity: 0.5; /* Чтобы сделать круги "дизаблед" */
  }
  .line {
    height: 5px;
    flex-grow: 1;
    margin: 0 5px;
  }
  .line-blue {
    margin-top: 15px;
    background-color: blue;
  }
  .line-gray {
    margin-top: 15px;
    background-color: gray;
    opacity: 0.5; /* Серую линию также делаем "дизаблед" */
  }
</style>