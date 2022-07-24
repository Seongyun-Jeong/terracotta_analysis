exports.default = function (t, o, f) {
  var p = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1;
  p = p instanceof module527.default ? module524.round(module524.multiply(p, 255)) : Math.round(255 * p);
  var v = module524.add(module524.multiply(p, 16777216), module524.multiply(t, 65536), module524.multiply(o, 256), f);
  if ('android' === module2.Platform.OS) return module524.cond(module524.lessThan(v, 2147483648), v, module524.sub(v, 2 ** 32));
  return v;
};

var module524 = require('./524'),
  module2 = require('./2'),
  module527 = require('./527');
