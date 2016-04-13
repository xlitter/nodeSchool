const result = process.argv.slice(2).reduce((r, v) => r + Number(v), 0);
console.log(result);
