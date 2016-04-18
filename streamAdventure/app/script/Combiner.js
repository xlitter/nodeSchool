'use strict';

const zlib = require('zlib');
const through2 = require('through2');
const combine = require('stream-combiner');
const split = require('split');


/**
 * 最初版本
 */
module.exports = function c() {
  const ret = [];
  const write = through2((chunk, encoding, next) => {
    next(null, chunk.toString());
  });
  let currentBooks;

  return combine(split(), through2((chunk, encoding, next) => {
    if (chunk.length === 0) {
      next();
      return;
    }

    const item = JSON.parse(chunk.toString());
    if (item.type === 'genre') {
      currentBooks = [];
      ret.push({ name: item.name, books: currentBooks });
    } else if (item.type === 'book') {
      currentBooks.push(item.name);
    }

    next();
  }, done => {
    write.write(ret.map(JSON.stringify).join('\n'));
    write.end();
    done();
  }), write, zlib.createGzip());
};
