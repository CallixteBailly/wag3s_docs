<template>
    <div class="hero-container">
      <div class="ellipse-background"></div> <!-- Ajout de l'ellipse en arrière-plan -->
      <div class="text-block">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-description">{{ description }}</p>
        <slot name="button"></slot>
      </div>
      <div class="image-block">
        <img src="/img/largeLogo.png" class="hero-image" alt="Hero image" />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hero-container {
    /* Vos styles existants */
    position: relative;
    overflow: hidden; /* Empêche l'ellipse de déborder */
  }
  
  .ellipse-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%; /* Largeur de l'ellipse */
    height: 200%; /* Hauteur de l'ellipse */
    background: radial-gradient(ellipse at center, #7b1fa2 0%, #4a0072 50%, transparent 50.5%);
    animation: moveEllipse 10s linear infinite;
    transform: translate(-50%, -50%) scale(0); /* Centre l'ellipse et la réduit à 0 pour commencer */
  }
  
  
  @keyframes moveEllipse {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
  </style>
  