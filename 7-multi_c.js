// A scipt that peints x times "C is fun"

const { argv } = require('node:process');
const count = argv[2]

for (let i = 1; i <= count; i++) {
	console.log('C is fun')
}
