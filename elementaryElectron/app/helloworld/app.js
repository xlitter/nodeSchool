'use strict';

const electron = require('electron');
const app = electron.app;

app.on('ready', () => {
  const mainWin = new electron.BrowserWindow({ width: 400, height: 500 });
  // mainWin.loadURL(`file://${path.resolve(__dirname, '../html')}/index.html`);
  mainWin.loadURL(`file://${__dirname}/index.html`);
});

