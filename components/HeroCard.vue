<template>
  <section class="hero-card">
    <div class="card" v-for="feature in features" :key="feature.title">
      <img :src="feature.icon" :alt="feature.title">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
      <button @click="moreDetails(feature)">Plus de Détails</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        // Array of feature objects with title, description, and icon
      ]
    };
  },
  methods: {
    moreDetails(feature) {
      // Logique pour afficher plus de détails
    }
  }
}
</script>

<style scoped>
.hero-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* Autres styles */
}
.card {
  /* Styles des cartes */
}
</style>
