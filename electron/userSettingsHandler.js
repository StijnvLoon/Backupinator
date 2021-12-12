const { ipcMain } = require('electron')
const fs = require("fs")

class UserSettingsHandler {

    fileLocation = 'userSettings.json'

    constructor() {
        ipcMain.on('save-usersettings', (event, data) => {
            this.saveSettings(data)
        })
        ipcMain.on("retrieve-usersettings", (event) => {       
            event.sender.send('retrieve-usersettings-reply', this.retrieveSettings());
        });
    }

    saveSettings(data) {
        fs.writeFile(this.fileLocation, JSON.stringify(data), () => {});
    }

    retrieveSettings() {
        let settingsData = undefined
        try {
            settingsData = JSON.parse(fs.readFileSync(this.fileLocation))
        } catch(error) { }
        return settingsData
    }

}

module.exports = UserSettingsHandler