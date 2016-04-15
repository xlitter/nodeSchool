'use strict';

const fs = require('fs');

function read(filePath) {
  return fs.createReadStream(filePath);
}

read(process.argv[2]).pipe(process.stdout);
