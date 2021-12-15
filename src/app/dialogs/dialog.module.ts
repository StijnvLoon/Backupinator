import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DirsPickerDialog } from './dirs-picker/dirs-picker.dialog';
;

@NgModule({
  declarations: [
    DirsPickerDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DialogModule { }