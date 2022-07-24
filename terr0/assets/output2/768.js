var o = 65536,
  n = 4294967295;

var module769 = require('./769').Buffer,
  s = globals.crypto || globals.msCrypto;

if (s && s.getRandomValues)
  module.exports = function (u, f) {
    if (u > n) throw new RangeError('requested too many random bytes');
    var c = module769.allocUnsafe(u);
    if (u > 0)
      if (u > o) for (var l = 0; l < u; l += o) s.getRandomValues(c.slice(l, l + o));
      else s.getRandomValues(c);
    if ('function' == typeof f)
      return process.nextTick(function () {
        f(null, c);
      });
    return c;
  };
else
  module.exports = function () {
    throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
  };
