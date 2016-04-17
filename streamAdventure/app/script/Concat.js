'use strict';

const concat = require('concat-stream');

process.stdin.pipe(concat({ encoding: 'string' }, (data) => {
  process.stdout.write(data.split('').reverse().join(''));
}));
