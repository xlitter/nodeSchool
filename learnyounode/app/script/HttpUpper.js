'use strict';

const Transform = require('stream').Transform;
const http = require('http');

class TransfromChunk extends Transform {
  _transform(buf, encoding, done) {
    this.push(buf.toString().toUpperCase());
    done();
  }
}

function server(port) {
  http.createServer((req, rsp) => {
    if (req.method === 'POST') {
      req.pipe(new TransfromChunk()).pipe(rsp);
    }
  }).listen(port);
}

server(process.argv[2]);
