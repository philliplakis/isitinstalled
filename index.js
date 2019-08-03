const Shell = require("node-powershell");

const ps = new Shell({
  executionPolicy: "Bypass",
  noProfile: true
});

const file = `"${__dirname}\\lib\\checkProgram.ps1"`;

const isItInstalled = function(program) {
  return new Promise(function(resolve, reject) {
    ps.addCommand(`& ${file} -Name ${program}`);

    ps.invoke()
      .then(output => {
        const x = JSON.parse(output);
        if (x) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
      .catch(err => {
        console.log(err);
        return reject(err);
      });
  });
};

module.exports = isItInstalled;
