var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module526 = require('./526'),
  module527 = require('./527'),
  _ = 4,
  h = 0.001,
  s = 1e-7,
  y = 10,
  b = 11,
  p = 0.1,
  w = 'function' == typeof Float32Array;

function z(t, n) {
  return 1 - 3 * n + 3 * t;
}

function A(t, n) {
  return 3 * n - 6 * t;
}

function F(t) {
  return 3 * t;
}

function M(t, n, u) {
  return ((z(n, u) * t + A(n, u)) * t + F(n)) * t;
}

function X(t, n, u) {
  return 3 * z(n, u) * t * t + 2 * A(n, u) * t + F(n);
}

function Y(t, n, u, f, o) {
  var l = 0,
    v = 0,
    c = 0;

  do {
    if ((l = M((v = n + (u - n) / 2), f, o) - t) > 0) u = v;
    else n = v;
  } while (Math.abs(l) > s && ++c < y);

  return v;
}

function j(t, n, u, f) {
  for (var o = 0; o < _; ++o) {
    var l = X(n, u, f);
    if (0 === l) return n;
    n -= (M(n, u, f) - t) / l;
  }

  return n;
}

function k(t, n, u, f) {
  var o = w ? new Float32Array(b) : new Array(b);
  if (t !== n || u !== f) for (var l = 0; l < b; ++l) o[l] = M(l * p, t, u);

  function v(n) {
    for (var f = 0, l = 1; 10 !== l && o[l] <= n; ++l) f += p;

    var v = f + ((n - o[--l]) / (o[l + 1] - o[l])) * p,
      c = X(v, t, u);
    return c >= h ? j(n, v, t, u) : 0 === c ? v : Y(n, f, f + p, t, u);
  }

  return function (o) {
    return t === n && u === f ? o : 0 === o ? 0 : 1 === o ? 1 : M(v(o), n, f);
  };
}

class D {
  constructor(t, u, l, v, _) {
    var h;
    module356.default(this, c);
    (h = module358.default(
      this,
      module361.default(c).call(
        this,
        {
          type: 'bezier',
          mX1: u,
          mY1: l,
          mX2: v,
          mY2: _,
          input: t.__nodeID,
        },
        [t]
      )
    ))._value = t;
    h._bezier = k(u, l, v, _);
    return h;
  }

  __onEvaluate() {
    return this._bezier(module526.val(this._value));
  }
}

export default D;
