const isItInstalled = require("./");

isItInstalled("stegam").then(result => {
  if (result) {
    console.log(result);
  } else {
    console.warn(result);
  }
});
