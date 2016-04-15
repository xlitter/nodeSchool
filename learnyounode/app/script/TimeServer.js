'use strict';

const net = require('net');

const fnTable = {
  f(all, date) {
    return all.length > 1 && date < 10 ? `0${date}` : date;
  },
  Y(all, date) {
    return String(date.getFullYear()).substring(4 - all.length);
  },
  M(all, date) {
    return this.f(all, date.getMonth() + 1);
  },
  D(all, date) {
    return this.f(all, date.getDate());
  },
  h(all, date) {
    return this.f(all, date.getHours());
  },
  m(all, date) {
    return this.f(all, date.getMinutes());
  }
};

function strfmtdate(fmt) {
  const date = new Date();
  return fmt.replace(/([YMDhm])+/g, (all, c) => fnTable[c](all, date));
}

function server(port) {
  net.createServer((socket) => {
    socket.end(`${strfmtdate('YYYY-MM-DD hh:mm')}\n`);
  }).listen(port);
}

server(process.argv[2]);