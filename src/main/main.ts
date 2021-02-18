import { app, BrowserWindow, Menu, ipcMain } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    frame: false,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false
    }
  })
  win.loadURL(
    'file://' + join(__dirname, 'index.html')
  )
  win.setMenuBarVisibility(false)
  ipcMain.on('minimize-main', () => win.minimize())
  ipcMain.on('maximize-main', () => win.isMaximized ? win.unmaximize() : win.maximize())
})

const menu = Menu.buildFromTemplate([{
  role: process.platform === 'darwin' ? 'quit' : 'close'
}, {
  role: 'toggleDevTools'
}, {
  role: 'togglefullscreen'
}])

Menu.setApplicationMenu(menu)
