var socket = io();

socket.on('connect', function() {
    console.log(`Se establecio conexion con el servidor`);
});

socket.on('disconnect', function() {
    console.log(`Se perdio conexion con el servidor`);
});

socket.emit('sendMessage', {
    user: 'Federico',
    message: 'Hola socket'
}, function(response) {
    console.log('Se disparo el callback del server: ', response);
});

socket.on('sendMessage', function(message) {
    console.log(message);
});