import { Component } from '@angular/core';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { BackupPlanService } from 'src/app/services/backup-plan.service';
import { BackupService } from 'src/app/services/backup.service';

@Component({
  selector: 'app-backup-plan',
  templateUrl: './backup-plan.component.html',
  styleUrls: ['./backup-plan.component.scss']
})
export class BackupPlanComponent {

  private progress: Progress

  constructor(
    private backupPlanService: BackupPlanService,
    private backupService: BackupService
    ) { }

  getSelectedPlan(): BackupPlan {
    return this.backupPlanService.selectedBackupPlan
  }

  startBackup() {
    // this.progress = new Progress()
    // const interval = setInterval(() => {
    //   if(this.progress.index == this.progress.total) {
    //     this.progress = undefined
    //     clearInterval(interval)
    //   } else {
    //     this.progress.index += 1
    //   }
    // }, 2000)
    this.backupService.makeBackup(this.getSelectedPlan())
  }

  updateSelectedPlan() {
    console.log('updated!')
  }

  getLoaderText(): string {
    if(this.progress) {
      const percentage = Math.round((this.progress.index / this.progress.total * 100) * 1) / 1
      return `File ${this.progress.index}/${this.progress.total} (${percentage}%)`
    } else {
      return 'Make Backup'
    }
  }

  getLoaderStyle(): object {
    if(this.progress) {
      const width: string = (this.progress.index / this.progress.total * 100) + '%'

      return {
        'width': width
      }
    } else {
      return {'width': '0%'}
    }
  }
}

class Progress {
  public fileName: string = ''
  public index: number = 0
  public total: number = 3
}