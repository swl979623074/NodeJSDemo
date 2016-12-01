// 'use strict';
// var vm = require("vm");
// var codes = 
// `(function(require,console,setInterval){
	// date = nowDate+5*1000;
	// console.log(nowDate,date)
	
	// while(true){
		// nowDate = new Date().getTime();
		// console.log(nowDate,date)
		// if(date == nowDate){
			// console.log("5 seconds")
			// return;
		// }		
		// var fs = require("fs");
		// fs.readFileSync("./console.log");
	// }
	
// });`
// var code = "";
// var sandBox = {nowDate:new Date().getTime(),date:5*1000,n:0};
// var script = new vm.Script(codes);
// script.runInNewContext(sandBox)(require,console,setInterval);
// script.runInNewContext(sandBox);
// console.log(sandBox.n)

// for(var i=0;i<10;i++){
	// sandBox.push({});
	// script.runInNewContext(sandBox[i])(require,console);
// }
// delete sandBox;
// console.log(sandBox)
// gc();
// setInterval(function(){},60000)


(function(){
	var nowDate = new Date().getTime();
	var date = nowDate+5*1000;
	console.log(nowDate,date)

	while(true){
		nowDate = new Date().getTime();
		console.log(nowDate,date)
		if(date == nowDate){
			console.log("5 seconds")
			return;
		}		
		var fs = require("fs");
		fs.readFileSync("./console.log");
	}
})();
gc()
console.log("5 secondsdfhggfhdfgjdfs")
setInterval(function(){},60000)