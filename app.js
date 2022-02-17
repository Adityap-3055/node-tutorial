// npm = node pacakage manager

// npm - global command, comes with node
// npm --version

// 1) local dependency - install and use it only in this particular project:
// npm i <pacakageName>


// 2) global dependency - install and use it in any project
// npm install -g <pacakageName>
// sudo npm install -g <pacakageName> (mac)

// pacakage.json - manifest file (stores important info about our project/pacakage)
// manual approach (create pacakage.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) //lodash has a method flattenDeep
console.log(newItems);