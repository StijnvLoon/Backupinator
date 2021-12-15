import { Injectable, NgZone } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupPlanService {

  backupPlans: BackupPlan[]
  // plans: BackupPlan[] = [
  //   new BackupPlan('General', ['F:\\backups'], []),
  //   new BackupPlan('Test', [], []),
  //   new BackupPlan('Special', [], []),
  //   new BackupPlan('Downloads', ['F:\\backups', 'F:\\backups2', 'F:\\backups3'], ['C:\\Users\\Stijn van Loon\\Downloads']),
  //   new BackupPlan('Downloads working', ['F:\\backups'], ['C:\\Users\\Stijn van Loon\\Downloads'])
  // ]
  
  selectedBackupPlan: BackupPlan

  constructor(private zone: NgZone) {
    electron.ipcRenderer.send('retrieve-usersettings', this.backupPlans);
    electron.ipcRenderer.on('retrieve-usersettings-reply', (event, retrievedPlans) => {
      this.zone.run(() => {
        if(retrievedPlans == undefined) {
          this.backupPlans = [
            new BackupPlan('Example plan', [], [])
          ]
          this.saveBackupPlans()
        } else {
          this.backupPlans = retrievedPlans
          this.selectedBackupPlan = this.backupPlans[0]
        }
      })
    })
  }

  getBackupPlans(): BackupPlan[] {
    return this.backupPlans
  }

  saveBackupPlans(): void {
    electron.ipcRenderer.send('save-usersettings', this.backupPlans);
  }

  addBackupPlan(plan: BackupPlan = new BackupPlan('New backupplan')) {
    this.backupPlans.push(plan)
    this.selectedBackupPlan = this.backupPlans[this.backupPlans.indexOf(plan)]
    this.saveBackupPlans()
  }

  removeBackupPlan(plan: BackupPlan | number) {
    let index;

    if(typeof plan == 'number') {
      index = plan
      this.backupPlans.splice(plan, 1)
    } else {
      index = this.backupPlans.indexOf(plan)
      this.backupPlans.splice(index, 1)
    }

    if(index == 0) index++;

    this.selectedBackupPlan = this.backupPlans[index -= 1]
    this.saveBackupPlans()
  }
}
