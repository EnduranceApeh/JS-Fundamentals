/*
 * A script that prints My number: <first argument converted in integer>
 * If the argument can’t be converted to an integer, print “Not a number”
 */

const { argv } = require('node:process');
const num = parseInt(argv[2]);

if(Number.isNaN(num)) {
	console.log('Not a number')
}else{
	console.log(`My number: ${num}`);
}


