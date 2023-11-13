<template>
    <h1>
        Principles
    </h1>
    <div class="image-container">
        <div class="text-container">
            <div align-items="justify">
                <p class="title-text">
                <p style="font-weight: bold; font-size: 20px;">Wag3s - A trio of indispensable modules for streamlined
                    administration and seamless operations.</p>
                </p>
            </div>
        </div>
        <img width="600" src="/img/expl2.png" class="centered-image" />
        <div class="moving-ellipse"></div>
    </div>
    <div align-items="center">
        <img width="1100" src="/img/Howiw4.png" />
    </div>
    <GridCustom>
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Panic Sell"
            description="Sell your cryptocurrencies in just a few clicks when needed." 
            image="/img/logoZen.png" />
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="NFTbook"
            description="Organize and manage your assets seamlessly."
            image="/img/iconNFTb.png" />
        <CustomCard2 color="rgba(51, 255, 251, 0.929)" title="Backup"
            description="Safeguard your precious tokens with ease, ensuring they're protected against unexpected events"
            image="/img/iconbacup.png" />
    </GridCustom>
</template>

<style scoped>
.image-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
}

.text-container {
    margin-right: 200px;
    /* Ajustez la marge selon vos besoins */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.centered-image {
    /* Si nécessaire, ajoutez des styles supplémentaires pour l'image */
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
}</style>