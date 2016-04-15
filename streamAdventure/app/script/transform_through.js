'use strict';

const through2 = require('through2');
process.stdin.pipe(
  through2((buf, encoding, next) => {
    next(null, buf.toString().toUpperCase());
  }, (done) => {
    done();
  })).pipe(process.stdout);
