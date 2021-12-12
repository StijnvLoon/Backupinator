const { ipcMain } = require('electron')
const fs = require("fs")

class FolderHandler {

    constructor() {
        ipcMain.on('open-folder', (event, data) => {
            this.openFolder(data)
        })
    }

    openFolder(folder) {
        require('child_process').exec(`start "" ${folder}`);
    }
}

module.exports = FolderHandler