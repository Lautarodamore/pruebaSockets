const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');

    });

    //Escuchar el cliente

    client.on('enviarMensaje', (info, callback) => {
        console.log(info);

        client.broadcast.emit('enviarMensaje', info);
        /*
        if ( info.usuario ) {
            callback({
                resp: 'Todo salio Bien!'
            })
        }else{
            callback({
                resp: 'Todo salio mal!!!!!'
            });
        }
        */
    });
    
});
