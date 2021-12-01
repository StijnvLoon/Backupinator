import { Injectable } from '@angular/core';
import { BackupPlan } from '../models/BackupPlan';
// const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupPlanService {

  plans: BackupPlan[] = [
    new BackupPlan('General', ['F:\\backups'], []),
    new BackupPlan('Test', [], []),
    new BackupPlan('Special', [], []),
    new BackupPlan('Downloads', ['F:\\backups'], ['C:\\Users\\Stijn van Loon\\Downloads'])
  ]
  
  selectedBackupPlan: BackupPlan = this.plans[0]

  constructor() { }

  getBackupPlans(): BackupPlan[] {
    return this.plans
  }
}
