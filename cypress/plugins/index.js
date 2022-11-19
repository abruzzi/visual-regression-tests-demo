const fs = require("fs");
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");

module.exports = (on, config) => {
  getCompareSnapshotsPlugin(on, config);

  on("task", {
    doesExist: (path) => {
      return fs.existsSync(path);
    },
  });
};
