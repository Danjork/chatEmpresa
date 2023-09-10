 const{app, BrowserWindow , Notification} = require('electron')

 function createWindow(){
    //Se crea una nueva ventana (win) utilizando new BrowserWindow(). 
    //Esta ventana tendrá un ancho de 800 píxeles y una altura de 600 píxeles.
   const win = new BrowserWindow ({
        with: 800,
        height:600,
        webPreferences: {
        nodeInteration : false,  //nodeIntegration se establece en true. Esto habilita la integración de Node.js en el proceso de renderización de la ventana, lo que permite ejecutar código Node.js 
        worldsafeExecuteJavaScript: true,
        contextIsolation: true    
        }
    })

    win.loadFile('index.html') 
    //se carga un archivo llamado 'index.html' en la ventana utilizando win.loadFile(). 
    //Esto significa que la ventana mostrará el contenido del archivo HTML especificado.
 }

app.whenReady()
    .then(() => {
    createWindow();
    const notification = new Notification({title: 'hello world', body: 'Mensaje de Prueba G'});
    notification.show();
});
//app.whenReady(), que espera a que la aplicación Electron esté lista para abrir ventanas y luego ejecuta la función createWindow() cuando la aplicación está lista. 
//Esto asegura que la ventana se cree una vez que Electron haya inicializado completamente la aplicación.
//Notification show envia un mensaje en el escritorio

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', ()=> {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})

