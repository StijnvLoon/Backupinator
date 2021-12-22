import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DirsPickerDialog } from './dirs-picker/dirs-picker.dialog';
import { SettingsVersionComponent } from './settings/settings-version/settings-version.component';
import { SettingsDialog } from './settings/settings.dialog';
;

@NgModule({
  declarations: [
    DirsPickerDialog,
    SettingsDialog,
    SettingsVersionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class DialogModule { }