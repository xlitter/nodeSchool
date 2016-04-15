'use strict';

const http = require('http');
const url = require('url');

function urlParse(href) {
  return url.parse(href, true);
}

function server(port) {
  http.createServer((req, rsp) => {
    rsp.writeHead(200, { 'Content-Type': 'application/json' });
    if (/\/api\/(parse|unix)time/.test(req.url)) {
      const pathname = RegExp.$1;
      const urlObj = urlParse(req.url);
      const time = urlObj.query.iso;
      if (time) {
        const date = new Date(time);

        if (pathname === 'parse') {
          rsp.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
          }));
        } else if (pathname === 'unix') {
          rsp.end(JSON.stringify({
            unixtime: date.getTime()
          }));
        }
      } else {
        rsp.writeHead(404);
        rsp.end();
      }
    } else {
      rsp.writeHead(404);
      rsp.end();
    }
  }).listen(port);
}

server(process.argv[2]);
