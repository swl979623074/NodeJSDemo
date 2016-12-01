/**
* Ĭ�ϲ�����
	{
	  flags: 'w',
	  defaultEncoding: 'utf8',
	  fd: null,
	  mode: 0o666,
	  autoClose: true
	}
*/
"use strict"


/***********************************************************/

/**
* demo one : copy big file through stram,include file��video and redio.
*/
var fs = require('fs');
var readStream = fs.createReadStream('/path/to/source');
var writeStream = fs.createWriteStream('/path/to/dest');

readStream.on('data', function(chunk) { // ������������ʱ��д������
    if (writeStream.write(chunk) === false) { // ���û��д�꣬��ͣ��ȡ��
        readStream.pause();
    }
});

writeStream.on('drain', function() { // д��󣬼�����ȡ
    readStream.resume();
});

readStream.on('end', function() { // ��û������ʱ���ر�������
    writeStream.end();
});




/***********************************************************/

/**
* demo two : copy big file through stram,include file��video and redio.
*/
// pipe�Զ�������data,end���¼�
var sourcePath = "";
var targetPath = "";
fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));




/***********************************************************/

/**
* demo three : copy big file through stram,include file��video and redio.
*/
var fs = require('fs'),
    path = require('path'),
    out = process.stdout;

var filePath = 'E:\\PersonalFiles\\CompanyFiles\\SystemFiles\\SUSE\\suse11sp2\\64\\SLES-11-SP2-DVD-x86_64-GM-DVD1.iso';

var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream('./video/file_copy.mp4');

var stat = fs.statSync(filePath);

var totalSize = stat.size;
var passedLength = 0;
var lastSize = 0;
var startTime = Date.now();

readStream.on('data', function(chunk) {

    passedLength += chunk.length;

    if (writeStream.write(chunk) === false) {
        readStream.pause();
    }
});

readStream.on('end', function() {
    writeStream.end();
});

writeStream.on('drain', function() {
    readStream.resume();
});

setTimeout(function show() {
    var percent = Math.ceil((passedLength / totalSize) * 100);
    var size = Math.ceil(passedLength / 1000000);
    var diff = size - lastSize;
    lastSize = size;
    out.clearLine();
    out.cursorTo(0);
    out.write('finished ' + size + 'MB, ' + percent + '%, speed: ' + diff * 2 + 'MB/s');
    if (passedLength < totalSize) {
        setTimeout(show, 500);
    } else {
        var endTime = Date.now();
        console.log();
        console.log('����ʱ��' + (endTime - startTime) / 1000 + '�롣');
    }
}, 50);
