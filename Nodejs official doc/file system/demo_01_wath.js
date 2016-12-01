'use strict'
const fs = require("fs");

//monitor directories and files changes
var watcher = fs.watch("./temp",{encoding:"utf8"},function(event,filename){
	console.log(event)
	console.log(filename)
	// watcher.close()  //close watch
})

console.log(watcher)