import { Component, OnInit } from '@angular/core';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { BackupPlanService } from 'src/app/services/backup-plan.service';

@Component({
  selector: 'app-backup-plans-list',
  templateUrl: './backup-plans-list.component.html',
  styleUrls: ['./backup-plans-list.component.scss']
})
export class BackupPlansListComponent {

  constructor(private backupPlanService: BackupPlanService) { }

  getPlans(): BackupPlan[] {
    return this.backupPlanService.getBackupPlans()
  }

  setSelectedPlan(plan: BackupPlan): void {
    this.backupPlanService.selectedBackupPlan = plan
  }

  isSelectedPlan(plan: BackupPlan): boolean {
    return this.backupPlanService.selectedBackupPlan == plan
  }

}
