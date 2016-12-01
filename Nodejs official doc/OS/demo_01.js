"use strict"
const os = require("os")
const log = console.log;

var data = [
	os.EOL,
	os.arch(),	//system CPU architecture.Return the value of process.arch.
	os.cpus(),
	os.endianness(),	//Returns the endianness of the CPU. Possible values are 'BE' for big endian or 'LE' for little endian.
	os.freemem(),	//Returns the amount of free system memory in bytes.
	os.homedir(),	//Returns the home directory of the current user.
	os.hostname(),	//Returns the hostname of the operating system.
	os.loadavg(),	//Returns an array containing the 1, 5, and 15 minute load averages.The load average is a measure of system activity, calculated by the operating system and expressed as a fractional number. 
	os.networkInterfaces(),	//Get a list of network interfaces:
	os.platform(),
	os.release(),	//Returns the operating system's default directory for temporary files.
	os.tmpdir(),
	os.totalmem(),	//Returns the total amount of system memory in bytes.
	os.type(),	//Returns the operating system name. For example 'Linux' on Linux, 'Darwin' on OS X and 'Windows_NT' on Windows.
	os.uptime(),	//Returns the system uptime in seconds.
	os.userInfo(/*[options]*/)	
]
log(JSON.parse(JSON.stringify(data)))	

// log(os.networkInterfaces())

/**
os.userInfo([options])
	Added in: v6.0.0
		options <Object>
			encoding <String> Character encoding used to interpret resulting strings. If encoding is set to 'buffer', the username, shell, and homedir values will be Buffer instances. (Default: 'utf8')
	Returns a subset of the password file entry for the current effective user. The returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid and gid fields are -1, and shell is null.

	The value of homedir returned by userInfo() comes directly from the operating system. This differs from the result of os.homedir(), which queries several environment variables for the home directory before falling back to the operating system response.
*/