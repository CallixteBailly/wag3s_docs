<template>
  <div class="snap-container">
    <section class="snap-section" id="blockh">
      <div class="content-center-horizontal content-center-vertical">
        <Blockh/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="principles">
      <div class="content-center-horizontal content-center-vertical">
        <Principles/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wagesfolio">
      <div class="content-center-horizontal content-center-vertical">
        <Wagesfolio/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageledger">
      <div class="content-center-horizontal content-center-vertical">
        <Wageledger/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageshr">
      <div class="content-center-horizontal content-center-vertical">
        <Wageshr/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="upcoming">
      <div class="content-center-horizontal content-center-vertical">
        <Upcoming/>
      </div>
    </section>      
  </div>
</template>

<style scoped>
.snap-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
}

.snap-section {
    scroll-snap-align: start;
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Ajout de la direction de colonne pour garder l'alignement vertical */
    max-width: 1200px; /* Limite la largeur à 1200px */
    margin: 0 auto; /* Centre la section horizontalement */
}

.content-center-horizontal {
    text-align: center; /* pour le centrage horizontal du texte et des éléments en ligne */
}

.content-center-vertical {
    margin-top: 0; /* Ajustement pour garder l'alignement vertical en haut */
}
</style>
