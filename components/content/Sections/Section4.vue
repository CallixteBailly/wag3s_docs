<template>
  <div class="section-header">
    <img src="/img/logo HR.png" alt="WagesHR Icon" class="icon" />
    <h1 class="title">WagesHR - Streamlined HR Management</h1>
  </div>

  <div class="image-section">
    <div class="ellipse left-ellipse"></div>
    <img src="/img/WagHR.png" class="image-left" />
    <img src="/img/CardHR1.png" class="image-right" />
  </div>
  <p class="bold-text">Managing your team has never been easier than with WagesHR!</p>
</template>

<style>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.icon {
  width: 40px;
  margin-right: 10px;
}

.title {
  color: #4DA8A2;
  font-weight: bold;
  font-size: 25px;
}

.image-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around; /* Ajusté pour une meilleure répartition de l'espace */
}

.ellipse {
  width: 500px;
  height: 80px;
  background-color: #33fffb;
  border-radius: 50%;
  filter: blur(120px);
  position: absolute;
  top: 0;
  z-index: -1;
}

.left-ellipse {
  left: -120px;
}

.image-left, .image-right {
  width: auto; /* Ajusté pour la taille de l'image */
  max-width: 45%; /* Ajusté pour une meilleure visibilité */
  height: auto; /* Assure que l'image garde ses proportions */
}

.bold-text {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #4DA8A2;
}
</style>
