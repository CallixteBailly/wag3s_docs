<template>
  <h1 class="gtitle">
    Upcoming features - some hints
  </h1>

  <div class="feature-row">
    <div class="greenellipse left-ellipse"></div>
    <img src="/public/Tradw2.png" alt="Feature 1" class="feature-image" />
    <img src="/public/tokeng2.png" alt="Feature 2" class="feature-image" />
    <img src="/public/watchw2.png" alt="Feature 3" class="feature-image" />
  </div>

  <div class="feature-row">
    <img src="/public/cart2.png" alt="Feature 4" class="feature-image" />
    <img src="/public/multiw2.png" alt="Feature 5" class="feature-image" />
    <div class="greenellipse right-ellipse"></div>
  </div>
</template>

<style>
.gtitle {
  color: #4DA8A2;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
}

.feature-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-image {
  margin: 0 35px; /* Ajusté pour un meilleur espacement */
  width: auto; /* Assure que l'image garde ses proportions */
  max-width: 20%; /* Ajusté pour une meilleure visibilité */
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

</style>
