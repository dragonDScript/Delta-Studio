const { contextBridge, ipcRenderer } = require('electron')
const uuid = require('uuid')
const { basename } = require('path')
contextBridge.exposeInMainWorld('api', {
  minimizeWindow: () => ipcRenderer.send('minimize-main'),
  maximizeWindow: () => ipcRenderer.send('maximize-main'),
  triggerContextMenu: () => ipcRenderer.send('trigger-context-menu'),
  generateUUID: () => uuid.v1(),
  onOpenFolder: (func) => ipcRenderer.on('open-folder', func),
  basename: (str) => basename(str)
})
