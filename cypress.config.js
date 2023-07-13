const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2u1nve',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});