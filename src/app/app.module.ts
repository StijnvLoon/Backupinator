import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackupPlansListComponent } from './components/backup-plans-list/backup-plans-list.component';
import { BackupPlanComponent } from './components/backup-plan/backup-plan.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/backup-plan/loader/loader.component';
import { DirsKeeperComponent } from './components/backup-plan/dirs-keeper/dirs-keeper.component';
import { MaterialModule } from './material.module';
import { DialogModule } from './dialogs/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    BackupPlansListComponent,
    BackupPlanComponent,
    LoaderComponent,
    DirsKeeperComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
