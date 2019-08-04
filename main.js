const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
    // 隐藏菜单栏
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {"nodeIntegration":true}
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})

