require('./361');

var module532 = require('./532');

function n(c, f, o) {
  if ('undefined' != typeof Reflect && Reflect.get) module.exports = n = Reflect.get;
  else
    module.exports = n = function (n, c, f) {
      var o = module532(n, c);

      if (o) {
        var u = Object.getOwnPropertyDescriptor(o, c);
        return u.get ? u.get.call(f) : u.value;
      }
    };
  return n(c, f, o || c);
}

module.exports = n;
