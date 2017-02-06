const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const config = require('./config')[process.env.NODE_ENV || 'develop'];

let win;

function enableChromeExtentions() {
  const CHROME_EXTENTIONS_HOME = 'Library/Application\ Support/Google/Chrome/Default/Extensions';
  const VUEDEVTOOS_ID = 'nhdogjmejiglipccpnnnanhbledajbpd';
  const VUEDEVTOOS_VERSION = '3.0.6_0';

  let vueDevtoolsPath = `${app.getPath('home')}/${CHROME_EXTENTIONS_HOME}/${VUEDEVTOOS_ID}/${VUEDEVTOOS_VERSION}`;

  BrowserWindow.addDevToolsExtension(vueDevtoolsPath);
}

function createWindow() {
  win = new BrowserWindow({
    width: config.window.width,
    height: config.window.height
  });

  enableChromeExtentions(win);

  win.loadURL(url.format({
    pathname: path.join(__dirname, config.html),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
