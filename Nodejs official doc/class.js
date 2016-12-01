'use strict';
class Main {
	constructor() {
		this.parent = 'this is parent msg';
	}

	say() {
		setTimeout(() => {
			console.log(this.parent);
		}, 500);
	}
}

class He imports Main{
	constructor() {
		this.parents = 'this is parent msg';
	}
}

var a = new He();
console.log(a.parent)
a.say()

// export default Main;