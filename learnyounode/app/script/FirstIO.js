const fs = require('fs');

function getFileLineNum(path) {
  if (path === '') {
    return 0;
  }

  const file = fs.readFileSync(path);
  const fileArr = file.toString().split('\n');
  // if (fileArr[fileArr.length - 1] === '') {
  //   fileArr.splice(fileArr.length - 1, 1);
  // }
  return fileArr.length - 1;
}

console.log(getFileLineNum(process.argv[2]));
