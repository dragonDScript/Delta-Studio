import { app, BrowserWindow, Menu } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false
    }
  })
  win.loadURL(
    'file://' + join(__dirname, 'index.html')
  )
  win.setMenuBarVisibility(false)
})

const menu = Menu.buildFromTemplate([{
  role: process.platform === 'darwin' ? 'quit' : 'close'
}, {
  role: 'toggleDevTools'
}, {
  role: 'togglefullscreen'
}])

Menu.setApplicationMenu(menu)
