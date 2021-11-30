import { Injectable } from '@angular/core';
// const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class BackupPlanService {

  constructor() { }

  makeRequest() {
    // electron.ipcRenderer.send('test', 'kaas is een zoogdier');
  }
}
