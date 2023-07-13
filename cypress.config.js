const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dfdgf1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});