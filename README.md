# isItInstalled

isItInstalled is a promise Windows software check. Returns True or False.

## Install

```js
$ npm install isItInstalled
```

## API

##### isItInstalled([String])

String - Software name.

## Why?

This module was designed to be used with ElectronJS, If your desktop application has a Software dependacy you can use this to check if they software is installed.

##### Simple Example

```js
isItInstalled("Vs Code").then(result => {
  if (result) {
    console.log("true");
  } else {
    console.warn("false");
  }
});
```

##### Electron Example

```js
isItInstalled("Vs Code")
  .then(result => {
    if (result) {
      mainWindow.loadURL(`index.html`);
    } else {
      mainWindow.loadURL(`error.html`);
    }
  })
  .catch(err => {
    mainWindow.loadURL(`500.html`);
  });
```
You can use this example to load a different window based on the results.
