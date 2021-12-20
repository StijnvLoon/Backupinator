import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dirs-picker-dialog',
    templateUrl: './dirs-picker.dialog.html',
    styleUrls: ['../dialog.scss', './dirs-picker.dialog.scss'],
})
export class DirsPickerDialog {

    directories: string[] = []
    isDragging: boolean = false

    constructor(
        private dialogRef: MatDialogRef<DirsPickerDialog>
    ) { }

    drop(event: DragEvent) {
        this.isDragging = false
        var fileList: FileList = event.dataTransfer.files;

        for (var i = 0, file; file = fileList[i]; i++) {
            if(!this.directories.includes(file.path)) {
                this.directories.push(file.path)
            }
        }
    }

    dragOver(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
    }

    dragEnter(event: DragEvent) {
        this.isDragging = true
    }

    dragLeave(event: DragEvent) {
        this.isDragging = false
    }

    submit() {
        this.dialogRef.close(this.directories)
    }

    cancel() {
        this.dialogRef.close()
    }
}