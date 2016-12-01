

// process.on("exit",()=>{
	// console.log("a exit\n")
// })

// process.on("beforeExit",()=>{
	// console.log("a beforeExit\n")
// })
process.env.swl = "swl"

var data = JSON.stringify({name:"swl"})
process.send(data)