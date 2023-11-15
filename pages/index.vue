<template>
  <div class="snap-container">
    <section class="snap-section" id="blockh">
      <div class="content-center">
        <Blockh/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="principles">
      <div class="content-center">
        <Principles/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wagesfolio">
      <div class="content-center">
        <Wagesfolio/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageledger">
      <div class="content-center">
        <Wageledger/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageshr">
      <div class="content-center">
        <Wageshr/>
      </div>
    </section>
    <br>
    <section class="snap-section" id="upcoming">
      <div class="content-center">
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
    justify-content: center;
    align-items: center;
}

.content-center {
    text-align: center; /* pour le centrage horizontal du texte et des éléments en ligne */
}
</style>