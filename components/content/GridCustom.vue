<template>
  <div class="grid-custom">
    <div class="ellipse"></div>
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
  position: relative; /* Make the parent container relative */
}

.ellipse {
  width: 500px;
  height: 80px;
  background-color: #33fffb;
  border-radius: 50%;
  filter: blur(120px);
  position: absolute;
  top: 0;
  left: 0; /* Adjust left to place it behind the first card */
  z-index: -1;
}
</style>
