const fs = require('fs');

function getFileLineNum(path, cb) {
  return fs.readFile(path, 'utf8', (err, file) => {
    if (err) {
      cb(0);
      return;
    }
    cb(file.split('\n').length - 1);
  });
}

getFileLineNum(process.argv[2], (v) => { console.log(v); });
