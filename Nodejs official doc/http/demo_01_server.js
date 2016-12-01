"use strict"
var http = require("http");

var hostname = "127.0.0.1";
var port = 3000;
var server = http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader("Content-Type","text/plain");
	res.end("hello world");
});

server.listen(port,hostname,function(){
	console.log("Server running at 127.0.0.1:3030,and it will be closed after 3 seconds")
	// var ti = 3;
	// console.log(ti);	
	// setInterval(()=>{	
		// ti--;
		// console.log(ti);		
		// if(ti == 0){
			// process.exit(1);
		// }
	// },1000)
})