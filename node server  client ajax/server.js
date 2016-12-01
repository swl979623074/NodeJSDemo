"use strict"
const http = require("http");

var hostname = "127.0.0.1";
var port = 3030;
var data = {
	data:[{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140},
		{name:"swl",age:22,height:170,weight:140}
	]
}
var server = http.createServer(function(req,res){
	console.log("requset successfully and return a Object")
	res.statusCode = 200;
	res.setHeader("Content-Type","text/plain");
	res.end(JSON.stringify(data));
});

server.listen(port,hostname,function(){
	console.log("Server running at 127.0.0.1:3030")
})