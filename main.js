const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function onReady() {
	win = new BrowserWindow({
		width: 550,
		height: 615,
		// transparent: true,
		// frame: false
	})

	win.loadURL(url.format({
		pathname: path.join(
			__dirname,
			// D:\ElectronApp\first-angular-electron-app\dist\first-angular-electron-app\index.html
			'/dist/first-angular-electron-app/index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', onReady);