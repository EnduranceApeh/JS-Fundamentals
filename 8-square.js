// This script print a square bse on the number passed as arg

const { argv } = require('node:process');
const num = parseInt(argv[2]);

if (Number.isNaN(num)) {
	console.log('Missing size');
}else{
	for (let i = 1; i <= num; i++) {
		console.log("X".repeat(num));
	}
}
