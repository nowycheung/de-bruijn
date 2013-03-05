var test = require('tape');
var debruijn = require('../');

test(function (t) {
    t.equal(debruijn(2,3).join(''), '00010111');
    t.equal(
        debruijn(2,5).join(''),
        '00000100011001010011101011011111'
    );
    t.end();
});
