<template>
    <div class="section-header">
        <img src="/img/ledgericon1.png" alt="WageLedger Icon" class="icon" />
        <h1 class="title">WageLedger - Crypto Accounting Simplified</h1>
    </div>

    <div class="image-section">
        <div class="ellipse right-ellipse"></div>
        <img src="/img/cardwl.png" class="image-left" />
        <img src="/img/Accountinglegder.png" class="image-right" />
    </div>
    <p class="bold-text">Say goodbye to accounting headaches with Wage Ledger!</p>
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
.light .title {
  color: #333; /* Une couleur plus foncée pour le titre en mode clair */
}

.light .bold-text {
  color: #555; /* Une couleur plus douce pour le texte en mode clair */
}

.light .ellipse {
  background-color: #e0e0e0; /* Une couleur d'ellipse plus claire en mode clair */
}
</style>
