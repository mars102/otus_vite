<template>
  <div class="relative inline-block py-1">
    <button class="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <span>Корзина </span>
      <span class="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-blue-600 bg-white rounded-full border border-blue-600">{{props.tovar.length}}</span>
    </button>
  </div>
</template>

<script setup >
import {defineEmits, defineProps} from "vue";

const props = defineProps(["tovar"]);
</script>

<style scoped>

</style>