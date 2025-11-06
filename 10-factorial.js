// A script that compute and print factorial

const { argv } = require('node:process');
const num = parseInt(argv[2]);

function factorial(n) {
	if(Number.isNaN(n) || n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

//funtion call
console.log(factorial(num));
