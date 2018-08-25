const WebSocket = require('ws').Server;

const wss = new WebSocket({
    port: 9000
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`On message ${message}`);
        if (message === 'exit') {
            console.log(message);
            ws.close();
        } else {
            wss.clients.forEach(client => {
                console.log('client', client);
                console.log('message client:', message);
                client.send(message);
            });
        }
    });
    ws.send("Welcome to cyber chat:Server");
});