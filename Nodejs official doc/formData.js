function encodeFormData(data){
	if(!data) return "";
	var paris = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)) continue;
		if(typeof data[name] === "function") continue;
		var value = data[name].toString();
		name = encodeURIComponent(name.replace("%20","+"));   //decodeURIComponent 解码
		value = encodeURIComponent(value.replace("%20","+"));
		paris.push(name +"="+ value);
		//paris.push(name +"="+ data[name]);
	}
	return paris.join("&");
}


var a = {name:"swl swl"}

console.log(encodeFormData(a))

console.log("swl swl".replace("%20","+"))