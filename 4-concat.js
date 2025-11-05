// A script that prints two argument passed to it.
const { argv } = require('node:process');
const args = argv.slice(2, 4);

console.log(`${args[0]} is ${args[1]}`);
