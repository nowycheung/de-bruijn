var debruijn = require('../');

var a = Number(process.argv[2]);
var b = Number(process.argv[3]);

var xs = debruijn(a, b);
console.log(xs.join(''));
