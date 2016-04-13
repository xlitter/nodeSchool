const http = require('http');

function get(path, cb) {
  http.get(path, rsp => {
    rsp.setEncoding('utf8');
    rsp.on('data', chunk => cb(null, chunk));
    rsp.on('err', err => cb(err));
  }).on('error', (e) => {
    cb(e);
  });
}

get(process.argv[2], (e, data) => {
  if (e) {
    console.log(`Got error: ${e.message}`);
    return;
  }

  console.log(data);
});

