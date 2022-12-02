require("update-electron-app")();

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.webContents.executeJavaScript(
    `document.getElementById("versionId").innerHTML = "${app.getVersion()}"`
  );

  win.loadFile("index.html")
};

app.on('window-all-closed', () => {
  app.quit()
});

app.whenReady().then(() => {
  createWindow()
});
