import { app, BrowserWindow } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({

  })
  win.loadURL(app.isPackaged ? 'file://' + join(process.cwd(), 'index.html') : 'http://localhost:3000')
})
