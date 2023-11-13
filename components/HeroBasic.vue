<template>
  <section class="hero-basic" style="background-image: url('@/assets/images/bg.png');">
    <div class="content">
      <h1>Votre Titre Impactant</h1>
      <p class="subtitle">Une courte description qui supporte votre titre.</p>
      <button class="cta">En savoir plus</button>
    </div>
  </section>
</template>

<script setup>
// Script setup pour les props ou la logique du composant.
</script>

<style scoped>
.hero-basic {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-size: cover;
  background-position: center;
  text-align: center;
}

.content {
  max-width: 600px;
}

h1 {
  font-size: 3rem;
  color: #fff;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #ddd;
}

.cta {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0066cc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
