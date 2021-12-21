import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DirsPickerDialog } from '../dialogs/dirs-picker/dirs-picker.dialog';
import { SettingsDialog } from '../dialogs/settings/settings.dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly dialogWidth: string = '80%'

  constructor(
    private dialog: MatDialog
  ) { }

  showDirsPickerDialog(onResult: (dirs: string[]) => void) {
    const dialogRef = this.dialog.open(DirsPickerDialog, {
      width: this.dialogWidth
    })

    dialogRef.afterClosed().subscribe(async data => {
      onResult(data)
    })
  }

  showSettingsDialog() {
    this.dialog.open(SettingsDialog, {
      width: this.dialogWidth,
      height: '80%'
    })
  }
}
