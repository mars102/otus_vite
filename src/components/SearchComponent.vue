<template>
  <div style="color: black; ">

    <input
        type="text"
        class="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-11 px-3"
        v-model="localSearchTerm"
        placeholder="Поиск по названию или описанию..."
        @input="onInput"
    />
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';

const emit = defineEmits(['search']);
const localSearchTerm = ref('');

const onInput = () => {
  emit('search', localSearchTerm.value);
};

watch(localSearchTerm, (newValue) => {
  emit('search', newValue);
});

</script>