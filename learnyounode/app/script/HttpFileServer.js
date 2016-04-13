'use strict';

const http = require('http');
const fs = require('fs');
const argvs = process.argv;

function server(port, path) {
  http.createServer((req, rsp) => {
    rsp.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(path).pipe(rsp);
  }).listen(port);
}

server(argvs[2], argvs[3]);
