/**
* Ĭ�ϲ�����
	{
		flags: 'r',
		encoding: null,
		fd: null,
		mode: 0o666,
		autoClose: true
	}
	
	start��end�������ö�ȡ�ļ�����ʵλ�ã����ֽ�Ϊ��λ
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
