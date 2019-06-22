const Shell = require("node-powershell");
const path = require("path");

const ps = new Shell({
  executionPolicy: "Bypass",
  noProfile: true
});

const file = "./checkProgram.ps1";

const isItInstalled = function() {
  return new Promise(function(resolve, reject) {
    ps.addCommand(file);

    ps.invoke()
      .then(output => {
        const x = JSON.parse(output);
        if (x === true) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
      .catch(err => {
        return reject(err);
      });
  });
};

module.exports = isItInstalled;
