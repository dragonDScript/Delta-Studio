const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  minimizeWindow: () => ipcRenderer.send('minimize-main'),
  maximizeWindow: () => ipcRenderer.send('maximize-main'),
  triggerContextMenu: () => ipcRenderer.send('trigger-context-menu')
})
