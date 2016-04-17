'use strict';

const webSocket = require('websocket-stream');


function client() {
  const ws = webSocket('ws://localhost:8099');
  // const socket = ws.socket;
  // socket.onopen = () => {
  //   socket.send('hello');
  // };
  ws.write('hello');
}

client();
