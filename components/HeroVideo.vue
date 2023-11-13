<template>
  <section class="hero-video">
    <video class="background-video" autoplay muted loop>
      <source src="path-to-your-video.mp4" type="video/mp4">
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
    <div class="content">
      <h1>Votre Titre Impressionnant</h1>
      <p>Une sous-titre accrocheur</p>
      <!-- Ajoutez plus de contenu ou des boutons si nécessaire -->
    </div>
  </section>
</template>

<script setup>
// Importez et définissez les props si nécessaire
</script>

<style scoped>
.hero-video {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 30vh; /* Centrer le contenu verticalement */
  color: white;
}
</style>
