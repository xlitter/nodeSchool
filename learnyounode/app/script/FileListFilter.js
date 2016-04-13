'use strict';

const fs = require('fs');

function fileListFilter(dir, suffix, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      cb([]);
    }
    let ret = files;
    if (suffix) {
      ret = files.filter((v) => v.endsWith(`.${suffix}`));
    }
    cb(ret);
  });
}

fileListFilter(process.argv[2], process.argv[3] || '', (files) => {
  files.forEach((file) => console.log(file));
});
