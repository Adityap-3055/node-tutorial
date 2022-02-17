// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./module1');
const sayHi = require('./module2');
const data = require('./module3');
require('./module4-grenade');

console.log(data);
sayHi(names.name1);
sayHi(names.name2);


//There are 4 buit-in modules:
// os, path, fs, http