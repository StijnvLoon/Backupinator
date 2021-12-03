import { Injectable, NgZone } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
import { Progress } from '../models/Progress';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  progress: Progress

  constructor(private zone: NgZone) {
    electron.ipcRenderer.on('progress-update', (event, progress) => {
      this.zone.run(() => {
        this.progress = progress

        if(this.progress.index >= this.progress.total) {
          this.progress = undefined
        }
      })
    })
  }

  makeBackup(plan: BackupPlan) {
    electron.ipcRenderer.send('backup', JSON.stringify(plan));
  }
}
