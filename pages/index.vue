<template>
  <HeroBasic title="Bienvenue sur Notre Site" description="Découvrez nos services et produits." ctaText="En savoir plus" />
  <HeroCard>

  </HeroCard>
  <GridCustom>
    <CardCustom color="rgba(255, 208, 0, 0.929)" title="Hello World" description="Welcome to the grid" mode="light" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
    <CardCustom color="rgba(0, 208, 255, 0.929)" title="Another Card" description="More content here" mode="dark" />
  </GridCustom>
</template>

<script setup>
import GridCustom from '@/components/GridCustom.vue';
import CardCustom from '@/components/CardCustom.vue';
import HeroBasic from '@/components/HeroBasic.vue';
import HeroCard from '@/components/HeroCard.vue';
</script>

<style>
:root {
  --light-bg: #fff;
  --light-text: #000;
  --dark-bg: rgba(0, 0, 0, 0.935);
  --dark-text: #fff;
}
</style>
