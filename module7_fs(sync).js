// Built-in fs (sync)
const { readFileSync, writeFileSync } = require('fs')
// this could also be done using : 
//const fs = require('fs');
//fs.readFileSync(....);
//fs.writeFileSync(....);

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })// 'a' for append, to append file

console.log('Done with this task');
console.log('starting the next one');
