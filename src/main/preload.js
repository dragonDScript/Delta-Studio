const { contextBridge, ipcRenderer } = require('electron')
const uuid = require('uuid')
const { basename } = require('path')
const { readFile, writeFile } = require('fs')

contextBridge.exposeInMainWorld('api', {
  minimizeWindow: () => ipcRenderer.send('minimize-main'),
  maximizeWindow: () => ipcRenderer.send('maximize-main'),
  triggerContextMenu: () => ipcRenderer.send('trigger-context-menu'),
  generateUUID: () => uuid.v1(),
  onOpenFolder: (func) => ipcRenderer.on('open-folder', func),
  onSaveFile: (func) => ipcRenderer.on('file.save', func),
  basename: (str) => basename(str),
  readFile: (path, func) => readFile(path, { encoding: 'utf-8' }, func),
  writeFileSecure: (relativePath, content, func) => writeFile(relativePath, content, { encoding: 'utf-8' }, func)
})
