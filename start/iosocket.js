const http= require('http');
const express = require('express');
const app = new express();

const server = http.createServer(app);

const io = require('socket.io')(server);
app.use(express.static('./public'));


io.on('connection',(socket)=>{

    socket.on('chat',(message)=>{
        console.log("message: %s",message);
        socket.broadcast.emit('message',message);
    })
    console.log("Connected");
    socket.emit('message','Welcome to cyber chat');
});

server.listen(9000);
console.log("listening on 9000");

