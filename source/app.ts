/// <reference path="../lib.d.ts/node/node.d.ts" />

process.env.ROOT_DIR_ENV = __dirname;

var app = require('app');

var path = require('path');

var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        'width': 601,
        'height': 600,
        'min-width': 601,
        'min-height': 600,
        frame: false
    });

    mainWindow.loadUrl(`file://${__dirname}/windows/index.html`);
    // mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});