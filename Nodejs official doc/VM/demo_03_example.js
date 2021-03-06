'use strict';
const vm = require('vm');
var sandbox = [{port:8124},{port:8125},{port:8126}]
let code =
`(function(require,console) {

   const http = require('http');

   http.createServer( (request, response) => {
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.end('Hello World\\n');
   }).listen(port);

   console.log('Server running at http://127.0.0.1:'+port+'/');
 })`;

 
var a = vm.runInNewContext(code,sandbox[0])(require,console);
console.log(a);
 vm.runInNewContext(code,sandbox[1])(require,console);
 // vm.runInNewContext(code,sandbox[2])(require,console);
