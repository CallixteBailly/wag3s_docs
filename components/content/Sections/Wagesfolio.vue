<template>
    <div class="section-header">
        <img src="/iconWagefolio.png" alt="WageFolio Icon" class="section-icon" />
        <h1 class="section-title">Wagesfolio - Your Personalized Crypto Dashboard</h1>
    </div>
    <div class="section-content">
        <div class="section-left">
            <img :src="colorMode.value === 'light' ? '/Wagesfolio_light.png' : '/Wagesfolio.png'" />
        </div>
        <div class="section-right">
            <img :src="colorMode.value === 'light' ? '/cardwf_light.png' : '/cardwf.png'"  />
        </div>
    </div>

    <p class="bold-text">But that's just the tip of the iceberg. Wagesfolio offers a plethora of additional features</p>

    <GridCustom>
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Panic Sell"
            description="Sell your cryptocurrencies in just a few clicks when needed." image="/logoZen.png" />
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="NFTbook"
            description="Organize and manage your assets seamlessly." image="/iconNFTb.png" />
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Backup"
            description="Safeguard your precious tokens with ease, ensuring they're protected against unexpected events"
            image="/iconbacup.png" />
    </GridCustom>
</template>
<script setup>
const colorMode = useColorMode()
</script>
<style scoped>

.greenellipse {
    width: 500px;
    height: 80px;
    background-color: #33fffb;
    border-radius: 50%;
    filter: blur(120px);
    position: absolute;
    top: 0;
    z-index: -1;
}

.right-ellipse {
    right: -120px;
}

</style>
