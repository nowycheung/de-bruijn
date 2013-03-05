// from https://en.wikipedia.org/wiki/De_Bruijn_sequence#Algorithm

module.exports = function deBruijn (k, n) {
    var a = [];
    for (var i = 0; i < k * n; i++) a.push(0);
    
    var sequence = [];
    (function db (t, p) {
        if (t > n) {
            if (n % p !== 0) return;
            for (var j = 1; j <= p; j++) {
                sequence.push(a[j]);
            }
            return;
        }
        
        a[t] = a[t-p];
        db(t + 1, p);
        for (var j = a[t-p] + 1; j < k; j++) {
            a[t] = j;
            db(t + 1, t);
        }
    })(1,1);
    return sequence
};
