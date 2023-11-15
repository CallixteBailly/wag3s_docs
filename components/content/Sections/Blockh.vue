<template>
    <div class="section-content">
        <div class="section-left">
            <div class="Btitle">Wag3s</div>
            <h2 class="subtitle">
                Streamline Your Finances and HR Management with Ease.
            </h2>
            <p class="description">
                Join the Future with Wag3s! Are you ready to take your startup or retail business to the next level in
                the Web3 world? Wag3s is here to support your journey. Explore our powerful modules, embrace the
                decentralized future, and experience seamless growth. Join Wag3s today and stay ahead of the curve.
            </p>
            <div class="decorative-ellipse"></div>
        </div>
        <div class="section-right">
            <br>
            <img class="logo-image" src="/LogoWw.png" alt="Image Description">
        </div>
    </div>

    <div class="button-container">
        <button class="custom-button">
            <span class="hover-text">Get Started</span>
            <span class="hover-text-alternative">Coming Soon</span>
        </button>
        <a href="/documentation/introduction/why" class="docs-link">
            <button class="custom-button">
                Read our docs
            </button>
        </a>
    </div>
    <div class="image-container">
        <div class="Gtitle">How it works</div>
        <img src="/Howiw4.png" class="howiw4-image" />
    </div>
</template>

<style scoped>
.Btitle {
    color: #33fffb;
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 50px;
}

.Gtitle {
    color: #4da8a2;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
}

.section-content {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.section-left {
    flex-grow: 1;
    text-align: left;
    margin-right: 100px;
}

.section-title {
    color: #33fffb;
    font-size: 80px;
    font-weight: 600;
}

.subtitle {
    font-size: 45px;
    line-height: 1.2;
    margin-bottom: 20px;
}

.description {
    color: #4DA8A2;
    font-weight: bold;
    font-size: 15px;
    text-align: justify;
}

.decorative-ellipse {
    width: 500px;
    height: 80px;
    background-color: #33fffb;
    border-radius: 50%;
    filter: blur(120px);
    position: absolute;
    top: 80px;
    right: 0;
    z-index: -1;
}

.section-right {
    flex-grow: 1;
    text-align: right;
    display: flex;
    align-items: center;
}

.logo-image {
    width: 1000px;
    max-width: 100%;
}

.button-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.custom-button {
    padding: 10px 20px;
    background: #33fffb;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.custom-button:hover {
    background: #4DA8A2;
}

.custom-button:hover .hover-text {
    display: none;
}

.custom-button:hover .hover-text-alternative {
    display: inline;
}

.hover-text-alternative {
    display: none;
}

.docs-link {
    text-decoration: none;
    margin-left: 10px;
}

.image-container {
    text-align: center;
    margin-top: 200px;
}

.howiw4-image {
    max-width: 100%;
    height: auto;
}

/* Styles spécifiques au mode blanc */

.light .Btitle {
    color: #4DA8A2;
    /* titre en secondaire */
}

.light .decorative-ellipse {
    filter: blur(60px);
    height: 200px;
}

.light .subtitle {
    color: #777;
    /* Un gris encore plus clair pour les détails supplémentaires */
}</style>
