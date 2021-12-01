const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const contextMenu = require('electron-context-menu')
const url = require("url");
const path = require("path");
const fs = require("fs");
const BackupHandler = require('./electron/backupHandler');

let mainWindow

contextMenu({
    prepend: (defaultActions, params, browserWindow) => [
        {
            label: 'Open console',
            click: () => {
                browserWindow.openDevTools()
            }
        }
    ]
});

function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true,
        spellcheck: true,
        contextIsolation: false
    },
    show: false,
  })

  mainWindow.maximize()
  mainWindow.menuBarVisible = false

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  const backupHandler = new BackupHandler()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})