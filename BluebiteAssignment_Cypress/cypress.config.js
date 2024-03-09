const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  fixturesFolder: 'cypress/fixtures',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    testIsolation: true,
    specPattern: [
      'cypress/e2e/order.testCases.cy.js',
    ],
    baseUrl:
      'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca'
  },
});
