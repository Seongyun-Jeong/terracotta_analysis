var n = function () {};

if ('production' !== process.env)
  n = function (n) {
    if (undefined === n) throw new Error('invariant requires an error message argument');
  };

module.exports = function (o, t, f, s, u, c, v, l) {
  if ((n(t), !o)) {
    var p;
    if (undefined === t) p = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
    else {
      var w = [f, s, u, c, v, l],
        h = 0;
      (p = new Error(
        t.replace(/%s/g, function () {
          return w[h++];
        })
      )).name = 'Invariant Violation';
    }
    throw ((p.framesToPop = 1), p);
  }
};
