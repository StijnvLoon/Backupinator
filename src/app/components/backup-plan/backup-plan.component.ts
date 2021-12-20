import { Component } from '@angular/core';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { BackupPlanService } from 'src/app/services/backup-plan.service';

@Component({
  selector: 'app-backup-plan',
  templateUrl: './backup-plan.component.html',
  styleUrls: ['./backup-plan.component.scss']
})
export class BackupPlanComponent {

  constructor(
    private backupPlanService: BackupPlanService,
  ) { }

  getSelectedPlan(): BackupPlan {
    return this.backupPlanService.selectedBackupPlan
  }

  updateSelectedPlan() {
    this.backupPlanService.saveBackupPlans()
  }

  deleteSelectedPlan() {
    this.backupPlanService.removeBackupPlan(this.getSelectedPlan())
  }

  onSourceDirsUploaded(dirs: string[]) {
    this.getSelectedPlan().sourceDirs = this.getSelectedPlan().sourceDirs.concat(dirs)
    this.backupPlanService.saveBackupPlans()
  }

  onTargetDirsUploaded(dirs: string[]) {
    this.getSelectedPlan().targetDirs = this.getSelectedPlan().targetDirs.concat(dirs)
    this.backupPlanService.saveBackupPlans()
  }
}