<template>
  <div class="grid-custom">
    <slot></slot>
  </div>
</template>

<script setup>
// Pas de logique nécessaire ici
</script>

<style scoped>
.grid-custom {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
