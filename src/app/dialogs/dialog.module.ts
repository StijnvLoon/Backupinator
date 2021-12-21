import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DirsPickerDialog } from './dirs-picker/dirs-picker.dialog';
import { SettingsDialog } from './settings/settings.dialog';
;

@NgModule({
  declarations: [
    DirsPickerDialog,
    SettingsDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DialogModule { }