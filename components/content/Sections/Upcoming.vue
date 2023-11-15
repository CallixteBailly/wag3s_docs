<template>
  <h1 class="section-title">
    Upcoming features - some hints
  </h1>
  
  <div class="feature-row">
    <div class="greenellipse left-ellipse"></div>
    <img src="/Tradw2.png" alt="Feature 1" class="feature-image" />
    <img src="/tokeng2.png" alt="Feature 2" class="feature-image" />
    <img src="/watchw2.png" alt="Feature 3" class="feature-image" />
  </div>

  <div class="feature-row">
    <img src="/cart2.png" alt="Feature 4" class="feature-image" />
    <img src="/multiw2.png" alt="Feature 5" class="feature-image" />
    <div class="greenellipse right-ellipse"></div>
  </div>
 
</template>

<style scoped>
.feature-row {
  position: relative;
  display: flex;
  flex-wrap: wrap; /* Permet aux images de passer à la ligne sur les petits écrans */
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-image {
  margin: 0 20px; /* Ajustez l'espacement */
  width: auto;
  max-width: 100%; /* Les images prennent 100% de la largeur disponible */
  height: auto;
}

.greenellipse {
  width: 500px;
  height: 80px;
  background-color: #33fffb;
  border-radius: 50%;
  filter: blur(120px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* Centrer verticalement */
  z-index: -1;
}

.left-ellipse {
  left: -120px;
}

.right-ellipse {
  right: -120px;
}

/* Utiliser une media query pour ajuster l'espacement en fonction de la taille de l'écran */
@media (min-width: 768px) {
  .feature-image {
    margin: 0 35px; /* Ajustez l'espacement pour les écrans plus larges */
  }
}
</style>
