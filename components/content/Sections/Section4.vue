<template>
  <div class="section-header">
    <img src="/img/ledgericon1.png" alt="WageLedger Icon" class="icon" />
    <h1 class="title">WageLedger - Crypto Accounting Simplified</h1>
  </div>

  <div class="image-section">
    <div class="ellipse right"></div>
    <img src="/img/cardwl.png" class="image-left" />
    <img src="/img/Accountinglegder.png" class="image-right" />
  </div>
  <p class="bold-text">Say goodbye to accounting headaches with Wage Ledger!</p>

  <div class="section-header">
    <img src="/img/logo HR.png" alt="WagesHR Icon" class="icon" />
    <h1 class="title">WagesHR - Streamlined HR Management</h1>
  </div>

  <div class="image-section">
    <div class="ellipse left"></div>
    <img src="/img/WagHR.png" class="image-left" />
    <img src="/img/CardHR1.png" class="image-right" />
  </div>
  <p class="bold-text">Managing your team has never been easier than with WagesHR!</p>
</template>

<style>
.section-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  justify-content: flex-start;
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

.image-left {
  margin-right: 120px;
}

.bold-text {
  /* Votre style pour bold-text */
}
</style>
