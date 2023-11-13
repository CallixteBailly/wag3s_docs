<template>
  <div class="card-container">
    <div class="glass">
      <div class="icon-container"> <!-- Replace this with your actual icon -->
        <!-- Icon goes here -->
      </div>
      <h2 class="reports">{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 195px;
  margin: auto; /* Center the card in the parent */
  position: relative; /* Allows absolute positioning relative to this container */
  background: #000000;
  border-radius: 10px;
}

.glass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(104.25deg, rgba(148, 236, 178, 0.2) 0%, rgba(0, 187, 204, 0.2) 100%);
  box-shadow: inset 0px 4.5977px 6.89655px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6.89655px);
  border-radius: 10px; /* Match the parent's border-radius */
}

.icon-container {
  /* Style your icon here */
  width: 50px; /* Example size, adjust as needed */
  height: 50px;
  margin-bottom: 10px;
}

.reports {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
}

.subtitle {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: #7D7D7D;
  margin: 0;
}
</style>
