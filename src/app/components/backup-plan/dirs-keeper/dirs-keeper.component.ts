import { Component, Input, OnInit } from '@angular/core';
import { BackupPlanService } from 'src/app/services/backup-plan.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-dirs-keeper',
  templateUrl: './dirs-keeper.component.html',
  styleUrls: ['./dirs-keeper.component.scss']
})
export class DirsKeeperComponent {

  @Input() name: string
  @Input() dirs: string[]
  @Input() simple: boolean = false

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

    })
  }

}
