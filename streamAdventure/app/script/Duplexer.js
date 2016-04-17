'use strict';

const spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function (cwd, args) {
  const ps = spawn(cwd, args);
  return duplexer2(ps.stdin, ps.stdout);
};
