<template>
  <header class="bg-orange-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <a  class="hover:text-blue-300">Главная</a>
          </li>
          <li>
            <a  class="hover:text-blue-300">О нас</a>
          </li>
          <li>
            <a  class="hover:text-blue-300">Услуги</a>
          </li>
          <li>
            <a  class="hover:text-blue-300">Контакты</a>
          </li>
        </ul>
      </nav>
      <div class="text-lg font-bold flex space-x-4">
        <slot></slot>
      </div>

    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>