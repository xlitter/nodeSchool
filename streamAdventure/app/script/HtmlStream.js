'use strict';

const through2 = require('through2');
const trumpet = require('trumpet');
const tr = trumpet();

const loud = tr.select('.loud').createStream();

loud.pipe(through2(
  (buf, encoding, next) => {
    next(null, buf.toString().toUpperCase());
  },
  (done) => {
    done();
  })).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
