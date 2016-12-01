/**
* 查看文件的权限，存在？可读？可写？可执行？
*/

'use strict'
var fs = require("fs")

//有相对应的同步方法，fs.accessSync
fs.access("./temp/vf.txt",fs.F_OK,(err)=>{
	if(!err)
		console.log("exit")
	else
		console.log("not exit")
})

fs.access("./temp/vf.txt",fs.R_OK,(err)=>{
	if(!err)
		console.log("reaable")
	else
		console.log("cannot read")
})

fs.access("./temp/vf.txt",fs.W_OK,(err)=>{
	if(!err)
		console.log("writeable")
	else
		console.log("cannot write")
})

fs.access("./temp/vf.txt",fs.X_OK,(err)=>{
	if(!err)
		console.log("can be executed")
	else
		console.log("cannot be executed")
})