//'use strict'
const fs = require("fs");
const http = require("http");
var Url = require("url");
var querystring = require('querystring');

var defaultSetting = {
	url:null,	//request url
	data:null,	//parameters
	dataType:"JSON",	//JSON | string
	headers: {},	//Content-Type ...
	statusCode:{},	//500 | 404 | 200
	type:"GET",	// GET | POST
	timeout:10,	//request timeout threshold
	beforeSend: function (req) {},	//bofore send request
    complete: function (req) {},	//requset completely
	success: function (data) {console.log(data)},	//request successfully
	error:function(data){}	//request failed
}

function ajax(setting){
	var errCode = null;
	var settingType = {}.toString.call(setting).slice(8,-1);	//is similar to "Object.prototype.toString.cal(setting).slice(8,-1)"
	if(settingType != "Object"){
		console.log("the ajax's first argument must be a Object");
		return;
	}
	if(setting.url == null || setting.url == ""){
		console.log("the url cannot be null");
		return;
	}
	
	for (var key in defaultSetting) {
		if (setting[key] == null) {
			setting[key] = defaultSetting[key];
		}
	}
	var params = Url.parse(setting.url, true);
	
	var options = {
		host: params.hostname,
		port: params.port || 80,
		path: params.path,
		method: setting.type
	};
	
	if(setting.data != null){
		options.path += "?";
		for (var key in setting.data) {
            options.path = options.path + "&" + key + "=" + setting.data[key];
        }
	}
	
	var req = http.request(options,function(res){
		var data = "";
		res.on("data",function(chunk){
			data += chunk;
		})
		res.on("end",function(){
			setting.success(data);
			setting.complete(data);
		})
	}).on("error",function(e){
		setting.error(e)
	})
	
	if (setting.type === "POST") {
        var dataStr = querystring.stringify(setting.data);
        req.setHeader("Content-Length", dataStr.length);
		if(setting.headers != null){
			for(var key in setting.headers){
				req.setHeader(key,setting.headers[key]);
			}
		}
        req.write(dataStr);
    }
    req.setTimeout(setting.timeout);
    req.end();
}

module.exports = {ajax:ajax};

/**
* for instance
* ajax({url:"http://127.0.0.1:3030",type:"POST",data:{},success:function(data){},error:function(err){}})
*/

ajax({url:"http://192.168.4.10:8080/ShowView/web/js/homeStyle.js ",type:"POST",data:{},success:function(data){console.log(data)},error:function(err){}})