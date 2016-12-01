process.on("exit",()=>{
	console.log("demo exit\n")
	process.kill(process.pid);	//kill the process of specified pid 
	process.abort();
	process.exit(1);
	// process.chdir(directory)	//change current working dirctory of process
})

process.on("beforeExit",()=>{
	console.log("demo beforeExit\n")
})



var obj = {
	pid:process.pid,
	argv:process.argv,
	platform:process.platform,
	release:process.release,
	title:process.title,
	version:process.version,
	versions:process.versions,
	config:process.config,
	memoryUsage:process.memoryUsage(),
	uptime:process.uptime(),	//Number of seconds Node.js has been running.
	cwd:process.cwd(),
	hrtime:process.hrtime()
}

console.log(obj)