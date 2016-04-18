'use strict';

const electron = require('electron');
const app = electron.app;

app.on('ready', () => {
  const mainWin = new electron.BrowserWindow({ width: 700, height: 900 });
  mainWin.loadURL(`file://${__dirname}/index.html`);

});