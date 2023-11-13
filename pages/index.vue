<template>
  <div class="snap-container">
    <section class="snap-section" id="section1">
      <div class="content-center">
        <Section1/>
      </div>
    </section>
    <section class="snap-section" id="section2">
      <div class="content-center">
        <Section2/>
      </div>
    </section>
    <section class="snap-section" id="section3">
      <div class="content-center">
        <Section3/>
      </div>
    </section>
    <section class="snap-section" id="section4">
      <div class="content-center">
        <Section4/>
      </div>
    </section>
    <section class="snap-section" id="section5">
      <div class="content-center">
        <Section5/>
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
