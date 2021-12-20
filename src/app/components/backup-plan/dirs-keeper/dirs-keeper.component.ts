import { Component, Input, OnInit, Output } from '@angular/core';
import { BackupPlanService } from 'src/app/services/backup-plan.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FolderService } from 'src/app/services/folder.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dirs-keeper',
  templateUrl: './dirs-keeper.component.html',
  styleUrls: ['./dirs-keeper.component.scss']
})
export class DirsKeeperComponent {

  @Input() name: string
  @Input() dirs: string[]
  @Input() simple: boolean = false
  @Output() onDirsUploaded: EventEmitter<string[]> = new EventEmitter()

  constructor(
    private folderService: FolderService,
    private backupPlanService: BackupPlanService,
    private dialogService: DialogService
  ) { }

  openFolder(folder: string) {
    this.folderService.openFolder(folder)
  }

  removeDir(dir: string) {
    this.dirs.splice(this.dirs.indexOf(dir), 1)
    this.backupPlanService.saveBackupPlans()
  }

  openSelector() {
    this.dialogService.showDirsPickerDialog((data) => {
      if (data) {
        this.onDirsUploaded.emit(data)
      }
    })
  }
}
