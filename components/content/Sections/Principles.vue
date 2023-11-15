<template>
  <div class="section-header">
    <h1 class="title">Principles</h1>
  </div>

  <div class="content-container">
    <div class="text-container">
      <p class="description">
        A trio of indispensable modules for streamlined administration and seamless operations.
      </p>
      <br>
      <p class="details">
        Wag3s extends beyond startups, offering tailored features like Wagesfolio and the trading module for individuals. Its capabilities benefit everyone.
      </p>
    </div>
    <img src="/public/expl3.png" alt="Explanation" class="centered-image" />
    <div class="moving-ellipse"></div>
  </div>

  <GridCustom>
    <CustomCard v-for="card in cards" :key="card.title" :color="card.color" :title="card.title"
      :description="card.description" :image="card.image" />
  </GridCustom>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          color: "rgba(51, 255, 251, 0.929)",
          title: "Web3 & decentralized",
          description: "Wag3s is not just web3 friendly but aims to be completely secure and decentralized. Our features will evolve until they are in the hands of everyone.",
          image: "/public/iconwd.png"
        },
        {
          color: "rgba(51, 255, 251, 0.929)",
          title: "Peace of mind",
          description: "Experience peace of mind with security and automation firmly in your control.",
          image: "/public/iconpom.png"
        },
        {
          color: "rgba(51, 255, 251, 0.929)",
          title: "Institutions",
          description: "Wag3s bridges the traditional and crypto worlds, ensuring mass adoption by complying with crypto regulations. It empowers traditional businesses to leverage crypto technology seamlessly.",
          image: "/public/iconIns.png"
        }
      ]
    };
  }
};
</script>


<style scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.icon {
  margin-right: 10px;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
}

.text-container {
  max-width: 40%;
}

.description {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.details {
  font-size: 16px;
  text-align: justify;
}

.centered-image {
  max-width: 50%;
  height: auto;
}

.moving-ellipse {
    width: 500px;
    height: 80px;
    margin-right: 70px;
    background-color: #33fffb;
    border-radius: 50%;
    filter: blur(70px);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%) rotate(0deg);
    z-index: -1;
    animation: rotateEllipse 5s linear infinite;
    /* Ajustez la durée de l'animation selon vos besoins */
}

@keyframes rotateEllipse {
    to {
        transform: translate(0, -50%) rotate(360deg);
        /* Fait tourner l'ellipse de 360 degrés */
    }
}

/* Styles spécifiques au mode blanc */

.light .description {
  font-weight: normal; /* Optionnel : réduire le poids de la police si nécessaire */
}

.light .details {
  color: #777; /* Un gris encore plus clair pour les détails supplémentaires */
}

.light .moving-ellipse {
  filter: blur(30px);
}

</style>
