'use strict'

/**
* get request
*/
const http = require('http');
http.get('http://127.0.0.1:3000', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  var data;
  res.on("data",function(chunk){
	  data += chunk;
  })
  res.on("end",function(){
	  console.log(data)
  })
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});