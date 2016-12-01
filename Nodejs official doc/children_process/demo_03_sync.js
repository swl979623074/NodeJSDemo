var spawnSync = require('child_process').spawnSync;
var bb = spawnSync('cmd.exe', ['/c', 'my.bat'])
// console.log(bb)

var execSync = require('child_process').execSync;
var aa = execSync("node --version")
console.log(aa.toString())

// console.log(process.env)