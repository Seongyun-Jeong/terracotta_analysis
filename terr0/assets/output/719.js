var module361 = require('./361'),
  module363 = require('./363'),
  module720 = require('./720'),
  module711 = require('./711');

function c(f) {
  var p = 'function' == typeof Map ? new Map() : undefined;

  module.exports = c = function (c) {
    if (null === c || !module720(c)) return c;
    if ('function' != typeof c) throw new TypeError('Super expression must either be null or a function');

    if (undefined !== p) {
      if (p.has(c)) return p.get(c);
      p.set(c, f);
    }

    function f() {
      return module711(c, arguments, module361(this).constructor);
    }

    f.prototype = Object.create(c.prototype, {
      constructor: {
        value: f,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return module363(f, c);
  };

  return c(f);
}

module.exports = c;
