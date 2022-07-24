var module46 = require('./46');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function n(n) {
  for (var c = 1; c < arguments.length; c++) {
    var l = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(l), true).forEach(function (o) {
        module46(n, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(l));
    else
      o(Object(l)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
      });
  }

  return n;
}

require('./73');

var module53 = require('./53'),
  module56 = require('./56'),
  module74 = require('./74'),
  u = module53.roundToNearestPixel(0.4);

if (0 === u) u = 1 / module53.get();
var b = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
module.exports = {
  hairlineWidth: u,
  absoluteFill: b,
  absoluteFillObject: b,
  compose: function (t, o) {
    return null != t && null != o ? [t, o] : null != t ? t : o;
  },
  flatten: module74,
  setStyleAttributePreprocessor: function (t, o) {
    var c;
    if (true === module56[t]) c = {};
    else {
      if ('object' != typeof module56[t]) return void console.error(t + ' is not a valid style attribute');
      c = module56[t];
    }
    module56[t] = n({}, c, {
      process: o,
    });
  },
  create: function (t) {
    return t;
  },
};
