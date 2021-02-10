import { app, BrowserWindow, Menu } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({

  })
  win.loadURL(app.isPackaged ? 'file://' + join(process.cwd(), 'index.html') : 'http://localhost:3000')
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
