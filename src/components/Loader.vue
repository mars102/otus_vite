<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Занимает всю высоту экрана */
  background-color: rgba(255, 255, 255, 0.8); /* Полупрозрачный фон */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* Слой над остальными элементами */
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid blue; /* Цвет верхней части спиннера */
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>