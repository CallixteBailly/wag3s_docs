<template>
  <header class="custom-header">
    <div class="logo-container">
      <NuxtLink to="/">
        <LogoIcon />
      </NuxtLink>
    </div>

    <Navbar />

    <div class="social-links">
      <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener">
        <TwitterIcon class="social-icon" />
      </a>
      <a href="https://github.com/CallixteBailly/wag3s_docs" target="_blank" rel="noopener">
        <GitHubIcon class="social-icon" />
      </a>
      <!-- Add more social links as needed -->
    </div>

    <!-- Add your custom button -->
    <button @click="redirectToAnotherWebsite" class="custom-button">
      Visit Another Website
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    redirectToAnotherWebsite() {
      window.location.href = 'https://example.com';
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the header */
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #34495e; /* Dark blue background color */
  color: #ecf0f1; /* Light text color */
  border-bottom: 1px solid #2c3e50; /* Darker border color */
}

.logo-container {
  margin-right: 20px;
}

.logo {
  max-width: 80px;
  height: auto;
}

.navbar {
  display: flex;
  gap: 20px;
}

.router-link {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
  font-size: 18px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 30px;
  height: 30px;
}

.custom-button {
  background-color: #e74c3c; /* Red button background color */
  color: #ecf0f1; /* Light text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.custom-button:hover {
  background-color: #c0392b; /* Darker red on hover */
}
</style>
