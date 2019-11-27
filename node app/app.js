function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Shashhh');

console.log(module);

//loading modules
const log = require('./logger');
log('message');


const path = require ('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var totalMemory =  os.totalmem();
var freeMemory =  os.freemem();

console.log( 'Total Memory = ' + totalMemory);

//template string 
// ES6 / ES 2015 : ECMAScript 6
// OS module
console.log (`Total Memory: ${totalMemory} `);

console.log (`Free Memory: ${freeMemory} `);
 



// Filesystem 

const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./',function(err,files) {
    if (err) console.log('Error',err);
    else console.log('Result',files)
})

