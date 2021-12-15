import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ListAnim, ListItemAnim } from 'src/app/animations/ListAnim';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { BackupPlanService } from 'src/app/services/backup-plan.service';

@Component({
  selector: 'app-backup-plans-list',
  templateUrl: './backup-plans-list.component.html',
  styleUrls: ['./backup-plans-list.component.scss'],
  animations: [ListAnim, ListItemAnim]
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

  addPlan() {
    this.backupPlanService.addBackupPlan()
  }

  onPlanDropped(event: CdkDragDrop<BackupPlan[]>) {
    moveItemInArray(this.getPlans(), event.previousIndex, event.currentIndex);
    this.backupPlanService.saveBackupPlans()
  }

  onPlanDeleted(event: CdkDragDrop<BackupPlan[]>) {
    this.backupPlanService.removeBackupPlan(event.previousIndex)
  }

}
