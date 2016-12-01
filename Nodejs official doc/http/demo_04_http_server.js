/**
Class: http.Server
	Event: 'checkContinue'
		function (request, response) { }
	Event: 'clientError'
		function (exception, socket) { }
	Event: 'close'
		function () { }
	Event: 'connect'
		function (request, socket, head) { }
	Event: 'connection'
		function (socket) { }
	Event: 'request'
		function (request, response) { }
	Event: 'upgrade'
		function (request, socket, head) { }
	server.close([callback])
	server.listen(handle[, callback])
	server.listen(path[, callback])
	server.listen(port[, hostname][, backlog][, callback])
	server.listening
		A Boolean indicating whether or not the server is listening for connections.
	server.maxHeadersCount
		Limits maximum incoming headers count, equal to 1000 by default. If set to 0 - no limit will be applied.
	server.setTimeout(msecs, callback)
	server.timeout
		<Number> Default = 120000 (2 minutes)
*/

const http = require('http');

const server = http.createServer((req, res) => {
	console.log("into server")
	if("/upgrade" == req.url)
		console.log("ss")
	// res.sendDate 
	res.setHeader("Content-Length", 11)
	res.write("hello world")
	res.end();
});

server.on('clientError', (err, socket) => {
	console.log("build server")
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);