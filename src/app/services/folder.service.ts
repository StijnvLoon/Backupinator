import { Injectable } from '@angular/core';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor() { }

  openFolder(folder: string) {
    electron.ipcRenderer.send('open-folder', folder);
  }

  getDirectoriesInForlder(folder: string) {
    console.log("TODO: getdirectories")
  }
}
