// This script print the first argument passed to it.
const { argv } = require('node:process');
const arg = argv[2];

if(arg === undefined) {
	console.log('No argument');
}else{
	console.log(arg);
}
