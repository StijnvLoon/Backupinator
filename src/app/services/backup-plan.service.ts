import { Injectable } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
// const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupPlanService {

  plans: BackupPlan[] = [
    new BackupPlan('General', [], []),
    new BackupPlan('Test', [], []),
    new BackupPlan('Special', [], [])
  ]
  
  selectedBackupPlan: BackupPlan = this.plans[0]

  constructor() { }

  getBackupPlans(): BackupPlan[] {
    return this.plans
  }

  makeRequest() {
    // electron.ipcRenderer.send('test', 'kaas is een zoogdier');
  }
}
