<template>
  <div class="flex items-center justify-center  p-5 ">
    <div v-if="orderSubmitted" >
      <div class="flex justify-center mb-4">
        <img
            src="../assets/success.png"
            alt="Успех"
            class="w-12 h-12"
        />
      </div>
      <h2 class="text-2xl font-semibold text-center text-gray-800">Заказ успешно отправлен!</h2>
      <p class="mt-2 text-gray-600 text-center">Мы получили ваш заказ и приступаем к его обработке.</p>
      <p class="mt-4 text-gray-500 text-center">Ожидайте подтверждение на вашу почту.</p>
      <div class="mt-6">
        <a href="/" class="block w-full text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2">Вернуться на главную</a>
      </div>
    </div>
    <div v-else>
      <!-- Здесь может быть ваш код для отображения формы или другой контент -->
      <p class="text-gray-500">Ваш заказ ещё не отправлен.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderSubmitted: true, // Измените на false, если нужно показать другую часть
    };
  },
};
</script>

<style scoped>
/* Вы можете добавить дополнительный стиль здесь, если нужно */
</style>