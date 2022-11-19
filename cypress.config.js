const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: "./cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    viewportWith: 1000,
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
