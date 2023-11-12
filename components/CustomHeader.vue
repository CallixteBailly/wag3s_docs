<template>
    <header class="custom-header">
      <div class="logo-container">
        <!-- Add your logo component here -->
        <img src="/img/smlogo.png" alt="Logo" class="logo" />
      </div>
  
      <div class="navbar">
        <!-- Add your navbar links or components here -->
        <router-link to="/">Home</router-link>
        <router-link to="/docs/">Docs</router-link>
        <!-- Add more links as needed -->
      </div>
  
      <div class="social-links">
        <!-- Add your social links components here -->
        <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener">
          <img src="/path/to/twitter-icon.png" alt="Twitter" class="social-icon" />
        </a>
        <a href="https://github.com/CallixteBailly/wag3s_docs" target="_blank" rel="noopener">
          <img src="/path/to/github-icon.png" alt="GitHub" class="social-icon" />
        </a>
        <!-- Add more social links as needed -->
      </div>
  
      <!-- Add your custom button -->
      <button @click="redirectToAnotherWebsite">Visit Another Website</button>
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
    padding: 10px;
    background-color: #f8f9fa; /* Add your desired background color */
    border-bottom: 1px solid #e9ecef; /* Add your desired border color */
  }
  
  .logo-container {
    /* Add styles for the logo container */
  }
  
  .logo {
    /* Add styles for the logo */
    max-width: 100px; /* Adjust the max-width as needed */
    height: auto;
  }
  
  .navbar {
    /* Add styles for the navbar links */
    display: flex;
    gap: 20px;
  }
  
  .router-link {
    /* Add styles for the router links */
    text-decoration: none;
    color: #007bff; /* Add your desired link color */
  }
  
  .social-links {
    /* Add styles for the social links */
    display: flex;
    gap: 10px;
  }
  
  .social-icon {
    /* Add styles for the social icons */
    width: 20px; /* Adjust the width as needed */
    height: 20px; /* Adjust the height as needed */
  }
  </style>
  