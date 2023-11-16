<template>
  <div class="section-header">
    <h1 class="section-title">Principles</h1>
  </div>

  <div class="section-content">
    <div class="section-left">
      <div class="description">
        <h3>
          A trio of indispensable modules for streamlined administration and seamless operations.
        </h3>
        <p class="details">
          Wag3s extends beyond startups, offering tailored features like Wagesfolio and the trading module for
          individuals. Its capabilities benefit everyone.
        </p>
      </div>

    </div>
    <div class="section-right">
      <img src="/expl3.png" alt="Explanation" class="centered-image" />
      <div class="moving-ellipse"></div>
    </div>
  </div>
</template>


<style scoped>
.description {
  width: 550px;
}

.description>h3 {
  color: #4da8a2;
  font-size: larger;
  font-weight: bold;
  margin-bottom: 50px;
}

.description>p {
  margin-bottom: 5px;
}

.details {
  font-weight: normal;
  font-size: 16px;
}

.centered-image {
  max-width: 130%;
  height: auto;
}

.moving-ellipse {
  width: 500px;
  height: 100px;
  background-color: #33fffb;
  border-radius: 50%;
  filter: blur(70px);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%) rotate(0deg);
  z-index: -1;
  animation: rotateEllipse-7811efa7 5s linear infinite;
}

@keyframes rotateEllipse {
  to {
    transform: translate(0, -50%) rotate(360deg);
  }
}

.light .description {
  font-weight: normal;
}

.light .details {
  color: #777;
}

.light .moving-ellipse {
  filter: blur(30px);
}
</style>
