import { app, BrowserWindow, Menu, ipcMain, dialog } from 'electron'
import { join } from 'path'

const template = (win: BrowserWindow) => Menu.buildFromTemplate([
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
        type: 'separator'
      },
      {
        role: 'quit',
        accelerator: 'CmdOrCtrl+Q'
      }
    ]
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S'
      },
      {
        label: 'Duplicate',
        accelerator: 'CmdOrCtrl+D'
      },
      {
        label: 'Close file',
        accelerator: 'CmdOrCtrl+W'
      }
    ]
  },
  {
    role: 'editMenu'
  },
  {
    role: 'viewMenu'
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        click: () => win.minimize()
      },
      {
        label: 'Close',
        click: () => win.close(),
        accelerator: 'Alt+Q'
      }
    ]
  }
])

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
    template(win).popup({
      window: win,
      x: 12,
      y: 12
    })
  })
  Menu.setApplicationMenu(template(win))
})
