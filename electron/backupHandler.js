const { ipcMain } = require('electron')
const fs = require("fs")

class BackupHandler {
    constructor() {
        ipcMain.on('backup', (event, data) => {
            this.makeBackup(JSON.parse(data))
        })
    }

    makeBackup(backupPlan) {
        const content = this.getAllContent(backupPlan.sourceDirs)

        backupPlan.targetDirs.forEach(targetDir => {
            //create main folder
            const fullPath = targetDir + '\\' + this.generateBackupFolderName(backupPlan)
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath, { recursive: true });
            }
            
            this.copyContent(content, fullPath)
        })
    }

    copyContent(content, targetDir) {
        content.forEach(sourceDir => {
            if(typeof sourceDir == 'string') {
                //file
                const fileName = sourceDir.split('\\').pop()
                const fullPath = targetDir + '\\' + fileName

                //copy content
                fs.copyFileSync(sourceDir, fullPath)
            } else {
                //folder
                const folderName = sourceDir.folder.split('\\').pop()
                const fullPath = targetDir + '\\' + folderName

                //creat folder
                fs.mkdirSync(fullPath, { recursive: true });

                //copy content
                this.copyContent(sourceDir.dirs, fullPath)
            }
        })
    }

    getAllContent(sourceDirs) {
        let folders = [];

        sourceDirs.forEach(sourceDir => {
            folders = folders.concat(this.getDirs(sourceDir))
        })

        return folders
    }

    getDirs(dir) {
        const results = fs.readdirSync(dir).map((name) => {
            return dir + '\\' + name
        })

        const resultsCopy = JSON.parse(JSON.stringify(results))
        resultsCopy.forEach((dir) => {
            if (fs.lstatSync(dir).isDirectory()) {
                results.splice(results.indexOf(dir), 1)

                results.push({
                    "folder": dir,
                    "dirs": this.getDirs(dir)
                })
            }
        })

        return results
    }

    generateBackupFolderName(backupPlan) {
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        const hours = currentDate.getHours()
        const minutes = currentDate.getMinutes()
        const seconds = currentDate.getSeconds()

        return `${backupPlan.name} ${day}-${month}-${year} ${hours}${minutes}${seconds}`
    }
}

module.exports = BackupHandler