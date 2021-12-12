import { Component, Input, OnInit } from '@angular/core';
import { BackupPlan } from 'src/app/models/BackupPlan';
import { Progress } from 'src/app/models/Progress';
import { BackupPlanService } from 'src/app/services/backup-plan.service';
import { BackupService } from 'src/app/services/backup.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input() backupPlan: BackupPlan

  constructor(
    private backupService: BackupService
  ) { }

  startBackup() {
    if(!this.getProgress()) {
      this.backupService.makeBackup(this.backupPlan)
    }
  }

  getProgress(): Progress {
    return this.backupService.progress
  }

  getLoaderText(): string {
    if(this.getProgress()) {
      const percentage = Math.round((this.getProgress().index / this.getProgress().total * 100) * 1) / 1
      return `${this.getProgress().fileName} ${this.getProgress().index}/${this.getProgress().total} (${percentage}%)`
    } else {
      return 'Make Backup'
    }
  }

  getLoaderStyle(): object {
    if(this.getProgress()) {
      const width: string = (this.getProgress().index / this.getProgress().total * 100) + '%'

      return {
        'width': width
      }
    } else {
      return {'width': '0%'}
    }
  }

}
