var module375 = require('./375'),
  module396 = require('./396'),
  module400 = require('./400');

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {},
      u = Object.keys(o);
    if ('function' == typeof Object.getOwnPropertySymbols)
      u = u.concat(
        Object.getOwnPropertySymbols(o).filter(function (t) {
          return Object.getOwnPropertyDescriptor(o, t).enumerable;
        })
      );
    u.forEach(function (n) {
      c(t, n, o[n]);
    });
  }

  return t;
}

function c(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

function l(t, n, o) {
  return 'function' == typeof t
    ? f(
        {},
        n,
        t(
          f({}, o, {
            navigationOptions: n,
          })
        )
      )
    : 'object' == typeof t
    ? f({}, n, t)
    : n;
}

exports.default = function (t, f) {
  return function (c, b) {
    var p = c.state;
    module375.default(p.routeName && 'string' == typeof p.routeName, 'Cannot get config because the route does not have a routeName.');
    var s = module396.default(t, p.routeName),
      v = t[p.routeName],
      y = v === s ? null : v.navigationOptions,
      O = s.navigationOptions,
      j = {
        navigation: c,
        screenProps: b || {},
      },
      P = l(f, {}, j);
    P = l(y, (P = l(O, P, j)), j);
    module400.default(P, p);
    return P;
  };
};
