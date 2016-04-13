const filesFilter = require('./FileListFilterModule');
const args = process.argv;

filesFilter(args[2], args[3], (err, files) => {
  if (err) {
    console.log('err', err);
    return;
  }

  files.forEach(file => console.log(file));
});
