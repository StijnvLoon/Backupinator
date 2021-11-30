import { Component, OnInit } from '@angular/core';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { BackupPlanService } from 'src/app/services/backup-plan.service';

@Component({
  selector: 'app-backup-plan',
  templateUrl: './backup-plan.component.html',
  styleUrls: ['./backup-plan.component.scss']
})
export class BackupPlanComponent {

  constructor(private backupPlanService: BackupPlanService) { }

  getSelectedPlan(): BackupPlan {
    return this.backupPlanService.selectedBackupPlan
  }

  updateSelectedPlan() {
    console.log('updated!')
  }
}
