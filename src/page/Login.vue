<template>
  <div class="flex items-center justify-center py-16 ">
    <form @submit.prevent="submitForm" class="bg-white p-6 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Вход</h2>

      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Логин</label>
        <input
            id="username"
            v-model="username"
            type="text"
            class="mt-1 block w-full border rounded-md shadow-sm p-2"
            :class="{'border-red-500': isSubmitted && errors.username, 'border-gray-300': !errors.username}"
            @input="validateForm('username')"
        />
        <span v-if="isSubmitted && errors.username" class="text-red-600 text-sm">{{ errors.username }}</span>
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
        <input
            id="password"
            v-model="password"
            type="password"
            class="mt-1 block w-full border rounded-md shadow-sm p-2"
            :class="{'border-red-500': isSubmitted && errors.password, 'border-gray-300': !errors.password}"
            @input="validateForm('password')"
        />
        <span v-if="isSubmitted && errors.password" class="text-red-600 text-sm">{{ errors.password }}</span>
      </div>

      <button
          type="submit"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script setup>
import {ref, reactive, defineEmits} from 'vue';
import {useRouter} from "vue-router";

const emit = defineEmits(['login']);
const username = ref('');
const password = ref('');
const errors = reactive({
  username: null,
  password: null
});
let isSubmitted = false;

function validateForm() {
  errors.username = !username.value ? 'Поле Логин обязательно.' : null;
  errors.password = !password.value ? 'Поле Пароль обязательно.' : null;
}
const router =useRouter();

function submitForm() {
  console.log("z nenn")
  isSubmitted = true;
  validateForm();
  if (!errors.username && !errors.password) {
    if(username.value == 'admin'&&password.value == 'admin'){
      emit('login', 1);
      localStorage.setItem('isAuth', 1);
      router.push({name:"home"});
    } else {
      username.value="";
      password.value="";
      alert("Не верные логин или пароль! Правильные логин пароль admin/admin")

    }
  } else {
    console.log("z nenn")
    localStorage.setItem('isAuth', 0);

  }
}

function clearError(field) {
  if (isSubmitted) {
    errors[field] = null;
  }
}
</script>

<style scoped>
/* Вы можете добавить стили здесь, если это необходимо */
</style>