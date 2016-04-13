'use strict';

const fs = require('fs');

/**
 * @param dir {String} 文件目录
 * @param suffix {String} 过滤后缀
 * @param cb {Function} 回调函数
 */
module.exports = function filelistFilter(dir, suffix, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      cb(err);
      return;
    }
    let ret = files;
    if (suffix) {
      ret = files.filter(v => v.endsWith(`.${suffix}`));
    }
    cb(null, ret);
  });
};
