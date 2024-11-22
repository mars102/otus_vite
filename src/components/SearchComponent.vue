<template>
  <div style="color: black;">

    <input
        type="text"
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