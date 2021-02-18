import { app, BrowserWindow, Menu, ipcMain, dialog } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    frame: false,
    minHeight: 5 * 100,
    minWidth: 5 *100,
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
  ipcMain.on('maximize-main', () => win.isMaximized() ? win.unmaximize() : win.maximize())
  ipcMain.on('trigger-context-menu', () => {
    const menu = Menu.buildFromTemplate([
      {
        label: 'Studio',
        submenu: [
          {
            label: 'About Studio',
            click () {
              dialog.showMessageBox(win, {
                title: app.getName(),
                buttons: ['OK'],
                message: 'An IDE for you',
                detail: 'c) gaetgu and dragonDScript 2021',
                type: 'info'
              })
            }
          },
          {
            role: 'close'
          }
        ]
      },
      {
        label: 'File',
        submenu: [
          {
            label: 'Save'
          },
          {
            label: 'Duplicate'
          },
          {
            label: 'Close'
          }
        ]
      },
      {
        label: 'Edit'
      }
    ])
    menu.popup({
      window: win,
      x: 12,
      y: 12
    })
  })
})

const menu = Menu.buildFromTemplate([{
  role: process.platform === 'darwin' ? 'quit' : 'close'
}, {
  role: 'toggleDevTools'
}, {
  role: 'togglefullscreen'
}])

Menu.setApplicationMenu(menu)
