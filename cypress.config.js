const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      apiUrl: 'https://serverest.dev/',
    },

    apiUrl: 'https://serverest.dev/',
    specPattern: 'cypress/tests/**/*.test.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {},
  },
});