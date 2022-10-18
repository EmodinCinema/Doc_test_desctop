const {app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 900,
        height:  900,
        icon: __dirname + "./img/icon_doc.png",
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./basis/home.html');
   
    //Для разработчиков
   // win.webContents.openDevTools(); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform != 'darwin'){
        app.quit();
    }
});

app.off('activate', ()=> {
    if(BrowserWindow.getAllWindow().length == 0){
        createWindow();
    }
});