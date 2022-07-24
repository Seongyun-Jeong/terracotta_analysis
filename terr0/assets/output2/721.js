var module405 = require('./405'),
  module284 = require('./284'),
  module712 = require('./712'),
  module672 = require('./672');

function f(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(u), true).forEach(function (n) {
        module284.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      f(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var c = function t(n, u) {
    return 1 === n.length ? module284.default({}, n[0], u) : module284.default({}, n[0], t(n.slice(1), u));
  },
  p = function t(n, u, l) {
    return 1 === u.length
      ? s({}, n, module284.default({}, u[0], l))
      : n[u[0]]
      ? s({}, n, module284.default({}, u[0], t(n[u[0]], u.slice(1), l)))
      : s({}, n, module284.default({}, u[0], c(u.slice(1), l)));
  };

exports.mergeFieldPathData = p;
export function parseUpdateArgs(t, o) {
  var f = {};

  if (1 === t.length) {
    if (!module672.isObject(t[0])) throw new Error(o + ' failed: If using a single update argument, it must be an object.');
    f = module405.default(t, 1)[0];
  } else {
    if (t.length % 2 == 1) throw new Error(o + ' failed: The update arguments must be either a single object argument, or equal numbers of key/value pairs.');

    for (var s = 0; s < t.length; s += 2) {
      var c = t[s],
        b = t[s + 1];
      if (module672.isString(c)) f[c] = b;
      else {
        if (!(c instanceof module712.default)) throw new Error(o + ' failed: Argument at index ' + s + ' must be a string or FieldPath');
        f = p(f, c._segments, b);
      }
    }
  }

  return f;
}
