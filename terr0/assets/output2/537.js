export default function default(t, o) {
  var s = o.inputRange,
      T = o.outputRange,
      E = o.extrapolate,
      R = undefined === E ? c.EXTEND : E,
      A = o.extrapolateLeft,
      C = o.extrapolateRight;
  p('inputRange', s);
  v('inputRange', s);
  p('outputRange', T);
  v('outputRange', T);
  h('inputRange', s);
  module191.default(s.length === T.length, 'inputRange and outputRange must be the same length.');
  var N = A || R,
      b = C || R,
      D = f(t, s, T);
  if (!(N === c.EXTEND)) N === c.CLAMP ? D = module525.createAnimatedCond(module538.lessThan(t, s[0]), T[0], D) : N === c.IDENTITY && (D = module525.createAnimatedCond(module538.lessThan(t, s[0]), t, D));
  if (!(b === c.EXTEND)) b === c.CLAMP ? D = module525.createAnimatedCond(module538.greaterThan(t, s[s.length - 1]), T[T.length - 1], D) : b === c.IDENTITY && (D = module525.createAnimatedCond(module538.greaterThan(t, s[s.length - 1]), t, D));
  return D;
}

var module538 = require("./538"),
    module525 = require("./525"),
    module191 = require("./191"),
    module527 = require("./527");

function s(t, u, l, o) {
  var s = u[o],
      f = u[o + 1],
      c = l[o],
      h = l[o + 1],
      p = module538.divide(module538.sub(t, s), module538.sub(f, s));
  return module538.add(c, module538.multiply(p, module538.sub(h, c)));
}

function f(t, l, o) {
  var c = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0;
  return l.length - c == 2 ? s(t, l, o, c) : module525.createAnimatedCond(module538.lessThan(t, l[c + 1]), s(t, l, o, c), f(t, l, o, c + 1));
}

var c = {
  EXTEND: 'extend',
  CLAMP: 'clamp',
  IDENTITY: 'identity'
};

function h(t, n) {
  for (var u = 1; u < n.length; ++u) n[u] instanceof module527.default || n[u - 1] instanceof module527.default || module191.default(n[u] >= n[u - 1], '%s must be monotonically non-decreasing. (%s)', t, n);
}

function p(t, n) {
  module191.default(n.length >= 2, '%s must have at least 2 elements. (%s)', t, n);
}

function v(t, n) {
  for (var u = 0; u < n.length; u++) n[u] instanceof module527.default || module191.default(Number.isFinite(n[u]), '%s cannot include %s. (%s)', t, n[u], n);
}

exports.Extrapolate = c;