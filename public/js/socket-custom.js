var socket = io();

        socket.on('connect', function(){
            console.log('Conectado al servidor');
            
        });

        socket.on('disconnect', function () {
            console.log('Perdimos conexion con el servidor');
            
        });

        //Enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Lautaro',
            mensaje: 'Hola Mundo'
        }, function( resp ){
            console.log(resp);
            
        });

        socket.on('enviarMensaje', function(data){
            console.log('Servidor: ', data);
            
        });
        