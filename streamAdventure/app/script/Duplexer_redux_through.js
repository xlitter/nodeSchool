'use strict';

const through2 = require('through2');
const duplexer2 = require('duplexer2');

module.exports = function redux(counter) {
  const count = {};

  return duplexer2({ objectMode: true }, through2.obj((chunk, encoding, next) => {
    const country = chunk.country;
    count[country] = (count[country] || 0) + 1;
    next();
  }, done => {
    counter.setCounts(count);
    done();
  }), counter);
};


