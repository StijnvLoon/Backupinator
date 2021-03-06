import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'settings-dialog',
    templateUrl: './settings.dialog.html',
    styleUrls: ['../dialog.scss', './settings.dialog.scss'],
})
export class SettingsDialog {

    selectedCategory: number = 0

    constructor(
        private dialogRef: MatDialogRef<SettingsDialog>
    ) { }

    cancel() {
        this.dialogRef.close()
    }

    setSelectedCategory(index: number) {
        this.selectedCategory = index
    }
}