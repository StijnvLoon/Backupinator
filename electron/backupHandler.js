const { ipcMain } = require('electron')
const fs = require("fs")

class BackupHandler {

    onProgressUpdate
    progressCounter = 0

    constructor(onProgressUpdate) {
        this.onProgressUpdate = onProgressUpdate
        ipcMain.on('backup', (event, data) => {
            this.makeBackup(event, JSON.parse(data))
        })
    }

    async makeBackup(event, backupPlan) {

        const content = await this.getAllContent(backupPlan.sourceDirs)

        for (const targetDir of backupPlan.targetDirs) {
            //create main folder
            const fullPath = targetDir + '\\' + this.generateBackupFolderName(backupPlan)
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath, { recursive: true });
            }

            await this.copyContent(event, content, fullPath)
        }
    }

    async copyContent(event, content, targetDir, totalSize = this.getTotalContentSize(content)) {

        for (const sourceDir of content) {
             if (typeof sourceDir == 'string') {
                //file
                const fileName = sourceDir.split('\\').pop()
                const fullPath = targetDir + '\\' + fileName

                //copy content
                fs.copyFile(sourceDir, fullPath, () => {
                    this.progressCounter++
                    this.updateProgress(event, fileName, totalSize)
                })
            } else {
                //folder
                const folderName = sourceDir.folder.split('\\').pop()
                const fullPath = targetDir + '\\' + folderName

                //create folder
                fs.mkdir(fullPath, { recursive: true }, () => {
                    this.progressCounter++
                    this.updateProgress(event, folderName, totalSize)

                    //copy content
                    this.copyContent(event, sourceDir.dirs, fullPath, totalSize)
                });
            }
        }
    }

    async getAllContent(sourceDirs) {
        let folders = [];

        sourceDirs.forEach(sourceDir => {
            if (fs.lstatSync(sourceDir).isDirectory()) {
                folders = folders.concat({
                    "folder": sourceDir,
                    "dirs": this.getDirs(sourceDir)
                })
            } else {
                folders.push(sourceDir)
            }
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

        return `${backupPlan.name} ${year}-${month}-${day} ${hours}-${minutes}-${seconds}`
    }

    getTotalContentSize(content) {
        let counter = 0

        for (const sourceDir of content) {
            counter++

            if (typeof sourceDir !== 'string') {
                counter += this.getTotalContentSize(sourceDir.dirs)
            }
        }

        return counter
    }

    updateProgress(event, fileName, totalSize) {
        event.sender.send('progress-update', {
            "fileName": fileName,
            "index": this.progressCounter,
            "total": totalSize
        });

        this.onProgressUpdate(this.progressCounter, totalSize)

        if(this.progressCounter >= totalSize) {
            this.progressCounter = 0
        }
    }
}

module.exports = BackupHandler