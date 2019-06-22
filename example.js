const isItInstalled = require("./index");

isItInstalled().then(result => {
  if (result) {
    console.log("true");
  } else {
    console.warn("false");
  }
});
