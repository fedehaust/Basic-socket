const { io } = require('../server');

io.on('connection', (client) => {
    console.log('cliente conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Bienvenido al servidor'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         response: 'Todo OK'
        //     });
        // } else {
        //     callback({
        //         response: 'Malio Sal'
        //     });
        // }
    });
});