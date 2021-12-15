import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dirs-picker-dialog',
    templateUrl: './dirs-picker.dialog.html',
    styleUrls: ['./dirs-picker.dialog.scss', '../dialog.scss'],
})
export class DirsPickerDialog {

    constructor(
        public dialogRef: MatDialogRef<DirsPickerDialog>
    ) { }

    submit(downloadUrl: string) {
        // this.dialogRef.close(downloadUrl)
    }
}