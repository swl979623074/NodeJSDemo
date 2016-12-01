/**
http.request(options[, callback])#
Node.js maintains several connections per server to make HTTP requests. This function allows one to transparently issue requests.

options can be an object or a string. If options is a string, it is automatically parsed with url.parse().

Options:
	protocol: Protocol to use. Defaults to 'http:'.
	host: A domain name or IP address of the server to issue the request to. Defaults to 'localhost'.
	hostname: Alias for host. To support url.parse() hostname is preferred over host.
	family: IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
	port: Port of remote server. Defaults to 80.
	localAddress: Local interface to bind for network connections.
	socketPath: Unix Domain Socket (use one of host:port or socketPath).
	method: A string specifying the HTTP request method. Defaults to 'GET'.
	path: Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future.
	headers: An object containing request headers.
	auth: Basic authentication i.e. 'user:password' to compute an Authorization header.
	agent: Controls Agent behavior. When an Agent is used request will default to Connection: keep-alive. Possible values:
		undefined (default): use http.globalAgent for this host and port.
		Agent object: explicitly use the passed in Agent.
		false: opts out of connection pooling with an Agent, defaults request to Connection: close.
	createConnection: A function that produces a socket/stream to use for the request when the agent option is not used. This can be used to avoid creating a custom Agent class just to override the default createConnection function. See agent.createConnection() for more details.
	The optional callback parameter will be added as a one time listener for the 'response' event.

http.request() returns an instance of the http.ClientRequest class. The ClientRequest instance is a writable stream. If one needs to upload a file with a POST request, then write to the ClientRequest object.
*/

//Example:
var postData = querystring.stringify({
	'msg' : 'Hello World!'
});

var options = {
	hostname: 'www.google.com',
	port: 80,
	path: '/upload',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var req = http.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.')
	})
});

req.on('error', (e) => {
	console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();