'use strict';

const request = require('request');

function req(url, method) {
  const r = request[method || 'get'](url);
  process.stdin.pipe(r).pipe(process.stdout);
}

req(' http://localhost:8099', 'post');
