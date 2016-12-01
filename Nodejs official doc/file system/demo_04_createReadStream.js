/**
* 默认参数：
	{
		flags: 'r',
		encoding: null,
		fd: null,
		mode: 0o666,
		autoClose: true
	}
	
	start和end可以设置读取文件的其实位置，以字节为单位
*/

"use strict"

const fs = require("fs")
var data = "";
var readStream= fs.createReadStream('./temp/testfile.txt', {start: 0, end: 23});

readStream.on("data",(chunk)=>{
	data += chunk;
})

readStream.on("end",(chunk)=>{
	console.log(data)
})	
