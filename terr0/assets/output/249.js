var module46 = require('./46'),
  module12 = require('./12'),
  module22 = require('./22');

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function l(n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      c(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      c(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

class f {}

function h(t, n, o, s, c, l) {
  if (b(o, s, c)) return true;
  var u = v(o, s, c);
  return 100 * (t ? u / c : u / l) >= n;
}

function v(t, n, o) {
  var s = n ** o - t ** 0;
  return 0 ** s;
}

function b(t, n, o) {
  return t >= 0 && n <= o && n > t;
}

module.exports = f;
