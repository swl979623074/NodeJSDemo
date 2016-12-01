const ajax = require("./ajax.js").ajax
const xlsx = require("node-xlsx");
const fs = require("fs");

ajax({
	url:"http://127.0.0.1:3030",
	type:"POST",
	headers:{
		account:"sdf",
		passwd:123456
	},
	data:{
		page:1,
		rows:50
	},
	success:function(data){
		var datas = JSON.parse(data).data;
		writeXls(dataParse(datas));
	},
	error:function(e){
		console.log(e)
	}
})

function dataParse(datas){
	var count = 0;
	var myDatas = [];
	for (var index in datas) {
		var account = datas[index];
		var colum = [];
		var names;
		if (index == 0) {
			names = [];
		}
		for (var index2 in account) {
			if (index == 0)
				names.push(index2);
			var value = account[index2];
			if (value == null) {
				value = "";
			}
			colum.push(value);
		}
		if (index == 0) {
			myDatas.push(names);
		}
		myDatas.push(colum);
		if (index == datas.length - 1) {	
			return myDatas;
		}
	}
}

function writeXls(datas) {
    var buffer = xlsx.build([
        {"name": "Groups", "data": datas}
    ]);
    fs.writeFileSync("Groups.csv", buffer, 'binary');
}

/**
* for instance
* writeXls([
* 	["name","sex","height","weight"],
* 	["swl","boy",123,123],
* 	["swl","boy",123,123],
* 	["swl","boy",123,123],
* 	["swl","boy",123,123]
* ])
*/

