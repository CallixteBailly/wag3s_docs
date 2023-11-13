<template>
  <h1 class="section-title">
    Principles
  </h1>
  <GridCustom>
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Panic Sell"
      description="Sell your cryptocurrencies in just a few clicks when needed." image="/img/logoZen.png" />
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="NFTbook"
      description="Organize and manage your assets seamlessly." image="/img/iconNFTb.png" />
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Backup"
      description="Safeguard your precious tokens with ease, ensuring they're protected against unexpected events"
      image="/img/iconbacup.png" />
  </GridCustom>

  <h1 class="section-title">
    Upcoming features - some hints
  </h1>

  <div class="feature-row">
    <div class="ellipse left-ellipse"></div>
    <img src="/img/Tradw2.png" alt="Feature 1" class="feature-image" />
    <img src="/img/tokeng2.png" alt="Feature 2" class="feature-image" />
    <img src="/img/watchw2.png" alt="Feature 3" class="feature-image" />
  </div>

  <div class="feature-row">
    <img src="/img/cart2.png" alt="Feature 4" class="feature-image" />
    <img src="/img/multiw2.png" alt="Feature 5" class="feature-image" />
    <div class="ellipse right-ellipse"></div>
  </div>
</template>

<style>
.section-title {
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

.ellipse {
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
