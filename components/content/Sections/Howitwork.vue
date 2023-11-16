<template>
    <div class="image-container">
        <div class="section-title">How it works</div>
        <img src="/Howiw4.png" class="howiw4-image" />
    </div>  
<br>
<br>
<br>
<br>
<br>

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
          image: "/iconwd.png"
        },
        {
          color: "rgba(51, 255, 251, 0.929)",
          title: "Peace of mind",
          description: "Experience peace of mind with security and automation firmly in your control.",
          image: "/iconpom.png"
        },
        {
          color: "rgba(51, 255, 251, 0.929)",
          title: "Institutions",
          description: "Wag3s bridges the traditional and crypto worlds, ensuring mass adoption by complying with crypto regulations. It empowers traditional businesses to leverage crypto technology seamlessly.",
          image: "/iconIns.png"
        }
      ]
    };
  }
};
</script>

