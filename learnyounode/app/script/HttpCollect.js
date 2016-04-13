'use strict';

const http = require('http');

function get(url, cb) {
  http.get(url, rsp => {
    let ret = '';
    rsp.setEncoding('utf8');
    rsp.on('data', chunk => (ret = ret + chunk));
    rsp.on('end', () => {
      cb(null, ret);
    });
    rsp.on('error', err => cb(err));
  });
}

get(process.argv[2], (err, data) => {
  if (err) {
    console.log(`Got Error: ${err}`);
    return;
  }
  console.log(data.length);
  console.log(data);
});
