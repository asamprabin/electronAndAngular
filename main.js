const { app, BrowserWindow } = require('electron')

let window;

function createWindow () {
    // Create the browser window
    window = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        // icon: `file://${__dirname}/favicon.ico`
    })

    // window.loadURL(`file://${__dirname}/dist/index.html`)
    window.loadURL(`file://${__dirname}/dist/electronAngular/index.html`)

    // uncomment below to open the DevTools.
    // window.webContents.openDevTools()

    window.on('closed', function () {
        window = null 
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    // On macOS apps run on background when closed
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (window === null) {
        createWindow()
    }
})
