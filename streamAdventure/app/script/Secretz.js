'use strict';

const zlib = require('zlib');
const crypto = require('crypto');
const parse = require('tar').Parse();
const argvs = process.argv;
const decipher = crypto.createDecipher(argvs[2], argvs[3]);
const concat = require('concat-stream');

parse.on('entry', e => {
  // console.log('--------type====', e.type);
  if (e.type === 'File') {
    e.pipe(crypto.createHash('md5', { encoding: 'hex' }))
      .pipe(concat(hash => console.log(`${hash} ${e.path}`)));
  }
});

process.stdin.pipe(decipher).pipe(zlib.createGunzip()).pipe(parse);

