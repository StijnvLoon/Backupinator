import { Injectable, NgZone } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupPlanService {

  plans: BackupPlan[]
  // plans: BackupPlan[] = [
  //   new BackupPlan('General', ['F:\\backups'], []),
  //   new BackupPlan('Test', [], []),
  //   new BackupPlan('Special', [], []),
  //   new BackupPlan('Downloads', ['F:\\backups', 'F:\\backups2', 'F:\\backups3'], ['C:\\Users\\Stijn van Loon\\Downloads']),
  //   new BackupPlan('Downloads working', ['F:\\backups'], ['C:\\Users\\Stijn van Loon\\Downloads'])
  // ]
  
  selectedBackupPlan: BackupPlan

  constructor(private zone: NgZone) {
    electron.ipcRenderer.send('retrieve-usersettings', this.plans);
    electron.ipcRenderer.on('retrieve-usersettings-reply', (event, retrievedPlans) => {
      this.zone.run(() => {
        if(retrievedPlans == undefined) {
          this.plans = [
            new BackupPlan('Example plan', [], [])
          ]
          this.saveBackupPlans()
        } else {
          this.plans = retrievedPlans
          this.selectedBackupPlan = this.plans[0]
        }
      })
    })
  }

  getBackupPlans(): BackupPlan[] {
    return this.plans
  }

  saveBackupPlans(): void {
    electron.ipcRenderer.send('save-usersettings', this.plans);
  }
}
