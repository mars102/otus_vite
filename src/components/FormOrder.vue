<template>
  <div>
    <h1 class="text-xl" style="padding-bottom: 20px;">Форма ввода ФИО и контактной информации</h1>

    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
        <input
            v-model="name"
            id="name"
            type="text"
            :class="{'border-red-500': errors.name}"
            class="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-12 px-3"
            @blur="validateField('name')"
            @input="validateField('name')"
        />
        <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
            v-model="email"
            id="email"
            type="email"
            :class="{'border-red-500': errors.email}"
            class="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-12 px-3"
            @blur="validateField('email')"
            @input="validateField('email')"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
      </div>

      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
        <input
            v-model="phone"
            id="phone"
            type="tel"
            :class="{'border-red-500': errors.phone}"
            class="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-12 px-3"
            @blur="validateField('phone')"
            @input="validateField('phone')"
        />
        <span v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
      </div>

      <div class="mb-4">
        <label class="flex items-center">
          <input
              type="checkbox"
              v-model="consent"
              @change="validateField('consent')"
              :class="{'border-red-500': errors.consent}"
          />
          <span class="ml-2 text-sm">Согласен на обработку конфиденциальных данных </span>
        </label>
        <span v-if="errors.consent" class="text-red-500 text-sm">{{ errors.consent }}</span>
      </div>

      <button
          type="submit"
          class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script setup>
import {defineEmits, ref} from 'vue';
import axios from "axios";

const name = ref('');
const email = ref('');
const phone = ref('');
const consent = ref(false);
const errors = ref({});
const emit = defineEmits(['sendOrder']);

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = name.value.length < 3 ? 'Минимум 3 символа' : '';
      break;
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.value.email = !emailPattern.test(email.value) ? 'Неверный формат email' : '';
      break;
    case 'phone':
      const phonePattern = /^\+?[\d\s-]{7,15}$/; // измените при необходимости
      errors.value.phone = !phonePattern.test(phone.value) ? 'Неверный формат телефона' : '';
      break;
    case 'consent':
      errors.value.consent = !consent.value ? 'Необходимо согласие' : '';
      break;
  }
};

const  onSubmit = async () => {
  for (const field of ['name', 'email', 'phone', 'consent']) {
    validateField(field);
  }

  if (Object.values(errors.value).every((error) => !error)) {
    const formData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      consent: consent.value,
    };
    emit('sendOrder', formData);



    //alert('Форма успешно отправлена!');
    // Здесь добавить логику отправки данных
  }
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f44336;
}
</style>