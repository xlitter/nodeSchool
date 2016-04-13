'use strict';

const http = require('http');

/**
 * @param urls {Array|String}
 * @param callback {Function} 回调函数
 */
function get() {
  const newUrls = [];
  let callback = () => { };
  const ret = [];
  let callbackCall = false;
  const rest = [].slice.call(arguments);

  for (let i = 0, len = rest.length; i < len; i++) {
    const p = rest[i];
    if (typeof p === 'function') {
      callback = p;
      break;
    } else {
      newUrls.push(p);
    }
  }

  let cnt = newUrls.length;
  function cb(err, data, idx) {
    if (err) {
      if (!callbackCall) {
        callbackCall = true;
        callback(err);
      }
      return;
    }

    ret[idx] = data;
    if (--cnt === 0) {
      if (!callbackCall) {
        callback(null, ret);
      }
    }
  }


  newUrls.forEach((url, idx) => {
    http.get(url, (rsp) => {
      let rst = '';

      rsp.on('data', chunk => (rst = rst + chunk));
      rsp.on('end', () => cb(null, rst, idx));
      rsp.on('error', err => cb(err));
    });
  });
}

get(process.argv[2], process.argv[3], process.argv[4], (err, datas) => {
  if (err) {
    console.log(`GOT Error:${err}`);
    return;
  }
  datas.forEach(data => console.log(data));
});
