<template>
  <div class="snap-container">
    <section class="snap-section" id="blockh">
      <div class="content-center">
        <Blockh />
      </div>
    </section>
    <br>
    <section class="snap-section" id="howitwork">
      <div class="content-center">
        <Howitwork />
      </div>
    </section>
    <br>
    <section class="snap-section" id="principles">
      <div class="content-center">
        <Principles />
      </div>
    </section>
    <br>
    <section class="snap-section" id="wagesfolio">
      <div class="content-center">
        <Wagesfolio />
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageledger">
      <div class="content-center">
        <Wageledger />
      </div>
    </section>
    <br>
    <section class="snap-section" id="wageshr">
      <div class="content-center">
        <Wageshr />
      </div>
    </section>
    <br>
    <section class="snap-section" id="upcoming">
      <div class="content-center">
        <Upcoming />
      </div>
    </section>
  </div>
</template>

<style>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.section-title {
  color: #33fffb;
  font-weight: bold;
  font-size: 25px;
}

.section-icon {
  width: 40px;
  margin-right: 10px;
}

.section-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
}

.section-right {
  flex-grow: 1;
  text-align: right;
  display: flex;
  align-items: center;
}

.section-left {
  flex-grow: 1;
  text-align: left;
  margin-right: 100px;
  align-items: center;
}

.snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.bold-text {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #4DA8A2;
  font-size: 22px;
}

.snap-section {
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-center {
  text-align: center;
  /* pour le centrage horizontal du texte et des éléments en ligne */
}

 /* ******mode light******** */


.light .title {
  color: #4DA8A2;
}

.light .section-title {
  color: #4DA8A2;
}

</style>