'use strict';

const http = require('http');
const through2 = require('through2');

function server(port) {
  http.createServer((req, rsp) => {
    if (req.method === 'POST') {
      req.pipe(through2((buf, encoding, next) => {
        next(null, buf.toString().toUpperCase());
      }, done => done()
      )).pipe(rsp);
    } else {
      rsp.end();
    }
  }).listen(port);
}

server(process.argv[2]);
