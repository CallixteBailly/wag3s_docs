<template>
  <div class="card" @mousemove="moveBlob" @mouseleave="leaveBlob">
    <div class="blob" :style="{ background: color }"></div>
    <div class="inner">
      <img :src="image" alt="Card Image" class="card-image" style="margin-bottom: 6px;" />
      <h1 :style="{ color: 'white', textAlign: 'center' }">{{ title }}</h1>
      <div style="margin-top: 10px; text-align: justify;">
        <p :style="{ color: 'gray', fontSize: '10px' }">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  color: String,
  title: String,
  description: String,
  image: String,
  mode: String,
});

const moveBlob = (ev) => {
  const blob = ev.currentTarget.querySelector('.blob');
  const cardRect = ev.currentTarget.getBoundingClientRect();
  const x = ev.clientX - cardRect.left - cardRect.width / 2;
  const y = ev.clientY - cardRect.top - cardRect.height / 2;
  blob.style.transform = `translate(${x}px, ${y}px)`;
};

const leaveBlob = (ev) => {
  const blob = ev.currentTarget.querySelector('.blob');
  blob.style.transform = 'translate(0, 0)';
};
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.card {
  background: rgb(0, 0, 0);
  padding: 3px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.inner {
  border-radius: 7px;
  padding: 10px;
  width: 210px;
  height: 200px;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(80px);
  transition: all 300ms ease-in-out;
  position: relative;
}

.card:hover > .inner {
  background: rgba(0, 0, 0, 0.735);
  backdrop-filter: blur(80px);
}

.blob {
  filter: blur(40px);
  position: absolute;
  width: 250px;
  height: 200px;
  border-radius: 50%;
  transition: transform 1ms ease-in-out;
}

.card-image {
  max-width: 30%;
  max-height: 30%;
  margin: auto;
  display: block;
}
</style>
