const {app, BrowserWindow} = require('electron');
const path                 = require('path');

const updater = require('electron-simple-updater');
updater.init('https://raw.githubusercontent.com/megahertz/electron-simple-updater/master/example/updates.json');


function createWindow()
{
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width         : 800,
		height        : 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true
		}
	});
	
	mainWindow.loadFile('index.html')
 
 
}


app.on('ready', createWindow);
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
});
app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
});

