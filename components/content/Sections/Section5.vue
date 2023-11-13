<template>
  <h1 class="title">
    Upcoming features - some hints
  </h1>

  <div class="feature-row">
    <div class="ellipse left"></div>
    <div class="feature-image">
      <img src="/img/Tradw2.png" alt="Feature 1" />
    </div>
    <div class="feature-image">
      <img src="/img/tokeng2.png" alt="Feature 2" />
    </div>
    <div class="feature-image">
      <img src="/img/watchw2.png" alt="Feature 3" />
    </div>
  </div>

  <div class="feature-row">
    <div class="feature-image">
      <img src="/img/cart2.png" alt="Feature 4" />
    </div>
    <div class="feature-image">
      <img src="/img/multiw2.png" alt="Feature 5" />
    </div>
    <div class="ellipse right"></div>
  </div>
</template>

<style>
.title {
  color: #4DA8A2;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}

.feature-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image {
  margin: 0 70px;
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

.left {
  left: -120px;
}

.right {
  right: -120px;
}
</style>
