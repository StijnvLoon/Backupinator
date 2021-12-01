import { Injectable } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor() { }

  makeBackup(plan: BackupPlan) {
    electron.ipcRenderer.send('backup', JSON.stringify(plan));
  }
}
