const electron = require('electron');
const {app} = electron;
const {BrowserWindow}  = electron;
const {ipcMain} = require('electron');

let consoleWindow, boardWindow;

function createWindows() {
    consoleWindow = new BrowserWindow({width: 500, height: 500});
    consoleWindow.loadURL(`file://${__dirname}/console.html`);
    boardWindow = new BrowserWindow({width: 1280, height: 720});
    boardWindow.loadURL(`file://${__dirname}/board.html`);
    consoleWindow.webContents.on('did-finish-load', () => {
        // mainWindow.webContents.openDevTools();
        ipcMain.on('render', (event, message) => {
            render(message);
        });
    });
    boardWindow.webContents.on('did-finish-load', () => {
        //boardWindow.webContents.openDevTools();
    });
}

function render(message) {
    console.log(`req: ${JSON.stringify(message)}`);
    boardWindow.webContents.send('render', message);
}

app.on('ready', createWindows);