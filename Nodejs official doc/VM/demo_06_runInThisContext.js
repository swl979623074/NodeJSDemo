'use strict';
const vm = require('vm');

global.globalVar = 0;
let code =
`
	globalVar += 1;var a = "swl";
`

const script = new vm.Script(code,{ filename: 'myfile.vm' ,lineOffset:5,columnOffset:3,timeout:10});

for (var i = 0; i < 1000; ++i) {
  var con = script.runInThisContext();
  console.log("console: "+con)
}

console.log(globalVar);
