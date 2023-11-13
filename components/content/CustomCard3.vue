<template>
  <div class="card" @mousemove="moveBlob" @mouseleave="leaveBlob">
    <div class="blob" :style="{ background: color }"></div>
    <div class="inner">
      <img :src="image" alt="Card Image" class="card-image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  color: String,
  image: String,
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
  gap: 20px; /* Adjust the gap for more space between cards */
}

.card {
  background: rgb(0, 0, 0);
  width: 200px; /* Set the width and height to make the card a perfect circle */
  height: 200px; /* Set the width and height to make the card a perfect circle */
  border-radius: 50%; /* Make the card a perfect circle */
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.inner {
  border-radius: 50%; /* Make the inner part completely round */
  padding: 12px; /* Adjust padding for larger inner part */
  width: 100%; /* Make the inner part take up the full width of the card */
  height: 100%; /* Make the inner part take up the full height of the card */
  background: rgb(0, 0, 0);
  backdrop-filter: blur(50px);
  transition: all 300ms ease-in-out;
  position: relative;
}

.card:hover > .inner {
  background: transparent;
  backdrop-filter: blur(50px);
}

.blob {
  filter: blur(40px); /* Adjust blur for larger blob */
  position: absolute;
  width: 180px; /* Adjust the width for larger cards */
  height: 150px; /* Adjust the height for larger cards */
  border-radius: 50%; /* Make the blob completely round */
  transition: transform 1ms ease-in-out;
}

.card-image {
  max-width: 100%; /* Make the image take up the full width of the inner part */
  max-height: 100%; /* Make the image take up the full height of the inner part */
  display: block;
  margin: auto; /* Center the image horizontally */
  position: relative;
  top: 50%; /* Center the image vertically */
  transform: translateY(-50%); /* Adjust vertical centering */
}
</style>
