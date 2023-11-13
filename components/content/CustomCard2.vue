<template>
  <div class="card" :class="{ 'light-mode': colorMode.value === 'light' }" @mousemove="moveBlob" @mouseleave="leaveBlob">
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
const colorMode = useColorMode()

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
  gap: 20px; /* Adjust the gap for more space between cards */
}

.card {
  background: rgb(0, 0, 0);
  padding: 3px;
  border-radius: 25px; /* Adjust the border-radius for more rounded corners */
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.inner {
  border-radius: 20px; /* Adjust the border-radius for more rounded corners */
  padding: 8px;
  width: 170px; /* Adjust the width for smaller cards */
  height: 150px; /* Adjust the height for smaller cards */
  background: rgb(0, 0, 0);
  backdrop-filter: blur(50px);
  transition: all 300ms ease-in-out;
  position: relative;
}

.card:hover > .inner {
  background: rgba(0, 0, 0, 0.735);
  backdrop-filter: blur(50px);
}

.blob {
  filter: blur(30px);
  position: absolute;
  width: 160px; /* Adjust the width for smaller cards */
  height: 130px; /* Adjust the height for smaller cards */
  border-radius: 50%;
  transition: transform 1ms ease-in-out;
}

.card-image {
  max-width: 30%;
  max-height: 30%;
  margin: auto;
  display: block;
}

.light-mode {
  background: rgb(83, 83, 83); /* Fond clair pour la carte */
  color: rgb(0, 0, 0); /* Texte foncé pour une meilleure lisibilité */
}

.light-mode .inner {
  background: rgba(134, 134, 134, 0.8); /* Fond légèrement transparent pour l'intérieur de la carte */
  color: rgb(0, 0, 0); /* Texte foncé */
}

.light-mode .card-image {
  /* Si nécessaire, ajoutez des styles spécifiques pour l'image en mode clair */
}
</style>
