<template>
  <header class="custom-header">
    <div class="logo-container">
      <NuxtLink to="/">
        <LogoIcon />
      </NuxtLink>
    </div>

    <div class="social-links">
      <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener">
        <TwitterIcon class="social-icon" />
      </a>
      <a href="https://github.com/CallixteBailly/wag3s_docs" target="_blank" rel="noopener">
        <GitHubIcon class="social-icon" />
      </a>
      <!-- Ajoutez d'autres liens sociaux au besoin -->
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #34495e; /* Couleur de fond bleu foncé */
  color: #ecf0f1; /* Couleur du texte clair */
  border-bottom: 1px solid #2c3e50; /* Couleur de la bordure plus foncée */
}

.logo-container {
  margin-right: 20px;
}

.logo {
  max-width: 80px;
  height: auto;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 30px;
  height: 30px;
}
</style>
