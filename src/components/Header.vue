<template>
  <header class="bg-orange-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:text-blue-300">Главная</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-blue-300">О нас</router-link>
          </li>
          <li>
            <router-link to="/services" class="hover:text-blue-300">Услуги</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-blue-300">Контакты</router-link>
          </li>
        </ul>
      </nav>
      <div class="text-lg font-bold">
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