'use strict';

const stream = require('stream');

class TransformFromStdin extends stream.Transform {
  _transform(buf, encoding, next) {
    next(null, buf.toString().toUpperCase());
  }
}

process.stdin.pipe(new TransformFromStdin()).pipe(process.stdout);
