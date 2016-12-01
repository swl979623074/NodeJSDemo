var fs = require("fs");

fs.readlink("./video",(err,data)=>{
	console.log(err,data)
})