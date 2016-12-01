const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
	console.log(`out: ${data.toString()}`);
});

bat.stderr.on('data', (data) => {
	console.log(`err: ${data.toString()}`);
});

bat.on('exit', (code) => {
	console.log(`exit: Child exited with code ${code}`);
});
// console.log(bat)
