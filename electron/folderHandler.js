const { ipcMain } = require('electron')
const { spawn } = require('child_process');

class FolderHandler {

    constructor() {
        ipcMain.on('open-folder', (event, data) => {
            this.openFolder(data)
        })
    }

    openFolder(folder) {
        const path = folder || '=';
        let p = spawn('explorer', [path]);
        p.on('error', (err) => {
            p.kill();
            return callback(err);
        });
    }
}

module.exports = FolderHandler