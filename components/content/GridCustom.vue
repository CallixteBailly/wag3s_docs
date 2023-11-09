<template>
    <div class="grid-custom">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .grid-custom {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
  }
  </style>