/**
* �鿴�ļ���Ȩ�ޣ����ڣ��ɶ�����д����ִ�У�
*/

'use strict'
var fs = require("fs")

//�����Ӧ��ͬ��������fs.accessSync
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