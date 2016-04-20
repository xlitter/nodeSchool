'use strict';

const electron = require('electron');
const app = electron.app;


app.on('ready', () => {
  const mainWin = new electron.BrowserWindow({
    width: 900,
    height: 700
  });
  mainWin.loadURL(`file://${__dirname}/index.html`);
  mainWin.openDevTools();
});
