'use strict';

const split = require('split');
const through2 = require('through2');
let lineCnt = 1;

function parse(line) {
  return (lineCnt++) % 2 === 0 ? line.toUpperCase() : line.toLowerCase();
}

process.stdin.pipe(split()).pipe(
  through2((buf, encoding, next) => {
    next(null, `${parse(buf.toString())}\n`);
  }, (done) => {
    done();
  })
).pipe(process.stdout);
