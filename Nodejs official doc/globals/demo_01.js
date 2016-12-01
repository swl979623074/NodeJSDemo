const out = process.stdout;

out.clearLine();
out.cursorTo(0);
out.write(`_dirname: ${__dirname}\n`)
out.write(`_dirname: ${__filename}\n`)

// console.log(`_dirname ${__dirname}`)
var fs = require("fs").cache;
console.log(fs)