var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
	var path = req.url;	
	if(path == "/validate.html"){
		path = "/html/validate.html";
	}else if(path == "/"){
		path = "/index.html";
	}
	sendFile(res,path);
}).listen(3000)

function sendFile(res,path){
	var path = process.cwd()+path;
	fs.readFile(path,function(err,stdout,stderr){		
		if(!err){
			var data = stdout;
			var type = path.substr(path.lastIndexOf(".")+1,path.length);
			res.writeHead(200,{'Content-type':"text/"+type});	//在这里设置文件类型，告诉浏览器解析方式
			res.write(data);
		}
		res.end();
	})
}