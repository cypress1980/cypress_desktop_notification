const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bmor8q',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
