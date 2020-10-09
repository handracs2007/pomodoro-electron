const { app, BrowserWindow } = require('electron')
var path = require('path')

function createWindow() {
    // Create the browser window
    const win = new BrowserWindow({
        width: 338,
        height: 94,
        icon: path.join(__dirname, "tomato.png"),
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
    win.setMenuBarVisibility(false)
    win.setTitle("Pomodoro")
    win.setResizable(false)
}

app.whenReady().then(createWindow)