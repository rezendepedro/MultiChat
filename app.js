
const app = require('./config/server');
const io = require('socket.io');

const server = app.listen(80, function(){
    console.log('Servidor rodando')
});

io.listen(server);

