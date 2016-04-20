'use strict';

const electron = require('electron');
const app = electron.app;

app.on('ready', () => {
  const mainWin = new electron.BrowserWindow();
  mainWin.loadURL(`file://${__dirname}/index.html`);

  mainWin.openDevTools();
});

