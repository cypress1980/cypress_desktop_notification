const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd4ez3d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
