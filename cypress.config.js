const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rc1rfq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});