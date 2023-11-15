<template>
  <div class="section-header">
        <img src="/img/iconWagefolio.png" alt="WageFolio Icon" class="icon" />
        <div class="title-container">
            <h1 class="gtitle">Wagesfolio - Your Personalized Crypto Dashboard</h1>
        </div>
    </div>

    <div class="image-section">
        <div class="greenellipse left-ellipse"></div>
        <img src="/public/Wagesfolio.png" class="image-left" />
        <img src="/public/cardwf.png" class="image-right" />
    </div>
    <br>
    <p class="bold-text">But that's just the tip of the iceberg. Wagesfolio offers a plethora of additional features</p>
<br>
    <GridCustom>
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Panic Sell"
      description="Sell your cryptocurrencies in just a few clicks when needed." image="/img/logoZen.png" />
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="NFTbook"
      description="Organize and manage your assets seamlessly." image="/img/iconNFTb.png" />
    <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Backup"
      description="Safeguard your precious tokens with ease, ensuring they're protected against unexpected events"
      image="/img/iconbacup.png" />
  </GridCustom>

</template>
  
<style>
.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.title-container {
    flex: 1; /* Utilise le reste de l'espace disponible */
}
.icon {
    width: 40px;
    margin-right: 10px;
}

.gtitle {
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

.greenellipse {
    width: 500px;
    height: 80px;
    background-color: #33fffb;
    border-radius: 50%;
    filter: blur(120px);
    position: absolute;
    top: 0;
    z-index: -1;
}

.right-ellipse {
    right: -120px;
}

.image-left, .image-right {
    width: auto; /* Ajusté pour la taille de l'image */
    max-width: 100%; /* Ajusté pour une meilleure visibilité */
    height: auto; /* Assure que l'image garde ses proportions */
}

.bold-text {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    color: #4DA8A2;
}
/* Styles spécifiques au mode clair */

.light .bold-text {
  color: #555; /* Une couleur plus douce pour le texte en mode clair */
}

</style>
