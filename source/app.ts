/// <reference path="../lib.d.ts/node/node.d.ts" />

// process.env.ROOT_DIR_ENV = __dirname;

const electron = require('electron');
// require('devtron').install();
const app = electron.app;

const path = require('path');

const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow(<any>{
        'width': 601,
        'height': 600,
        'min-width': 601,
        'min-height': 600,
        frame: false
    });

    mainWindow.loadURL(`file://${__dirname}/windows/index.html`);
    // mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.show();
});