const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
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
      userEmail: process.env.USER_EMAIL,
      userPassword: process.env.USER_PASS,
    },

    apiUrl: 'https://serverest.dev/',
    specPattern: 'cypress/tests/**/*.test.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {},
  },
})
