'use strict';

const stream = require('stream');
const duplexer2 = require('duplexer2');

module.exports = function redux(counter) {
  const body = [];
  const writer = new stream.Writable({
    objectMode: true,
    write: (chunk, encoding, next) => {
      body.push(chunk);
      next();
    }
  });
  const duplexer = duplexer2({
    objectMode: true
  }, writer, counter);

  function handle() {
    return body.reduce((r, v) => {
      const ret = r;
      const country = v.country;
      ret[country] = (ret[country] || 0) + 1;
      return ret;
    }, {});
  }

  duplexer.on('finish', () => {
    counter.setCounts(handle());
  });

  duplexer.on('error', err => {
    console.log(err);
  });

  return duplexer;
};

