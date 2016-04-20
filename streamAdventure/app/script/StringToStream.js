'use strict';

const stream = require('stream');

function createStringStream(input) {
  const read = new stream.Readable();
  read.push(input);
  read.push(null);
  return read;
}



const stringStream = createStringStream(process.argv[2]);
const stringWrite = new stream.Writable({
  write(chunk, encoding, next) {
    // process.stdout.write(chunk.toString());
    next();
  }
});

stringStream.pipe(stringWrite);

stringStream.on('data', (data) => {
  console.log('data---->', data.toString());
});

stringStream.on('end', () => {
  console.log('end----');
});


stringStream.on('readable', () => {
  console.log('readable');
});

stringStream.on('error', () => {
  console.log('error');
});

stringStream.on('close', () => {
  console.log('close');
});

stringWrite.on('pipe', () => {
  console.log('write pipe');
});

stringWrite.on('unpipe', () => {
  console.log('write unpipe');
});

stringWrite.on('error', () => {
  console.log('write error');
});

stringWrite.on('drain', () => {
  console.log('write drain');
});


stringWrite.on('finish', () => {
  console.log('write finish');
});


