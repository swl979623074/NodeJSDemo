'use strict'
var fs = require("fs")

//if file do not yet exist,it will create this file
fs.appendFile('./temp/appendFile.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});


//fs.appendFileSync