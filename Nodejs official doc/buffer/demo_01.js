"use strict"
var log = console.log;
const buf = Buffer.from('buffer','utf8');  //the size cannot be resized,fixed-sized
log(buf)
log(buf.toString('utf8'))
// const buf2 = Buffer.alloc(10, 1024);
// log(buf2)
const buf4 = Buffer.from([1,2,3]);

// var buffff = Buffer.concat([buf,buf2,buf4])
// log(buffff.byteLength)
const buf5 = Buffer.from(['a',2,3,4,5])
// log(buf5.toString("utf8"))
// for(var i of buf5)
	// log(i)

const buf6 = new Buffer(10)
// buf6.fill(0)
// log(buf6)

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0 ; i < 26 ; i++) {
  buf1[i] = i + 97; // 97 is ASCII a
}

buf1.copy(buf2, 8, 0, 8);
console.log(buf2.toString('ascii', 0, 25),buf2.length);
log(buf2.entries().toString())