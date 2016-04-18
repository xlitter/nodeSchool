'use strict';

const zlib = require('zlib');
const combine = require('stream-combiner');
const through2 = require('through2');
const split = require('split');

module.exports = function c() {
  let current = null;
  const merge = through2(
    (line, encoding, next) => {
      if (line.length === 0) {
        next();
        return;
      }
      const row = JSON.parse(line.toString());
      if (row.type === 'genre') {
        if (current) {
          merge.push(`${JSON.stringify(current)}\n`);
        }
        current = { name: row.name, books: [] };
      } else if (row.type === 'book') {
        current.books.push(row.name);
      }
      next();
    },
    done => {
      if (current) {
        merge.push(`${JSON.stringify(current)}\n`);
      }
      done();
    });

  return combine(split(), merge, zlib.createGzip());
};
