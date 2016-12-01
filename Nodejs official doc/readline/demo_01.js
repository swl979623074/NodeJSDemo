const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	
	console.log('Thank you for your valuable feedback:', answer);

	rl.close();
});

rl.on('line', (cmd) => {
  console.log(`You just typed: ${cmd}`);
  rl.close();
});

rl.on('SIGCONT', () => {
  
  rl.prompt();
  rl.close();
});

//Note that once you've invoked this module, your Node.js program will not terminate until you've closed the interface. Here's how to allow your program to gracefully exit: