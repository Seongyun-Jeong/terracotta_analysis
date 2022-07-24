var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module46 = require('./46');

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

function h(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(o), true).forEach(function (n) {
        module46(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      f(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

require('./207');

var module209 = require('./209'),
  module208 = require('./208'),
  module3 = require('./3'),
  module59 = require('./59'),
  b = function (t) {
    return t;
  };

function R(t) {
  if (t.outputRange && 'string' == typeof t.outputRange[0]) return k(t);
  var n = t.outputRange;
  C('outputRange', n);
  var o = t.inputRange;
  C('inputRange', o);
  D(o);
  module3(o.length === n.length, 'inputRange (' + o.length + ') and outputRange (' + n.length + ') must have the same length');
  var u = t.easing || b,
    p = 'extend';
  if (undefined !== t.extrapolateLeft) p = t.extrapolateLeft;
  else if (undefined !== t.extrapolate) p = t.extrapolate;
  var c = 'extend';
  if (undefined !== t.extrapolateRight) c = t.extrapolateRight;
  else if (undefined !== t.extrapolate) c = t.extrapolate;
  return function (t) {
    module3('number' == typeof t, 'Cannot interpolation an input which is not a number');
    var l = P(t, o);
    return x(t, o[l], o[l + 1], n[l], n[l + 1], u, p, c);
  };
}

function x(t, n, o, u, p, c, l, f) {
  var h = t;

  if (h < n) {
    if ('identity' === l) return h;
    if ('clamp' === l) h = n;
  }

  if (h > o) {
    if ('identity' === f) return h;
    if ('clamp' === f) h = o;
  }

  return u === p
    ? u
    : n === o
    ? t <= n
      ? u
      : p
    : (n === -1 / 0 ? (h = -h) : o === 1 / 0 ? (h -= n) : (h = (h - n) / (o - n)), (h = c(h)), u === -1 / 0 ? (h = -h) : p === 1 / 0 ? (h += u) : (h = h * (p - u) + u), h);
}

function O(t) {
  var n = module59(t);
  return null === n ? t : 'rgba(' + ((4278190080 & (n = n || 0)) >>> 24) + ', ' + ((16711680 & n) >>> 16) + ', ' + ((65280 & n) >>> 8) + ', ' + (255 & n) / 255 + ')';
}

var j = /[0-9\.-]+/g;

function k(t) {
  var n = t.outputRange;
  module3(n.length >= 2, 'Bad output range');
  w((n = n.map(O)));
  var o = n[0].match(j).map(function () {
    return [];
  });
  n.forEach(function (t) {
    t.match(j).forEach(function (t, n) {
      o[n].push(+t);
    });
  });
  var u,
    p = n[0].match(j).map(function (n, u) {
      return R(
        h({}, t, {
          outputRange: o[u],
        })
      );
    }),
    c = 'string' == typeof (u = n[0]) && u.startsWith('rgb');
  return function (t) {
    var o = 0;
    return n[0].replace(j, function () {
      var n = +p[o++](t),
        u = c && o < 4 ? Math.round(n) : Math.round(1e3 * n) / 1e3;
      return String(u);
    });
  };
}

function w(t) {
  for (var n = t[0].replace(j, ''), o = 1; o < t.length; ++o) module3(n === t[o].replace(j, ''), 'invalid pattern ' + t[0] + ' and ' + t[o]);
}

function P(t, n) {
  var o;

  for (o = 1; o < n.length - 1 && !(n[o] >= t); ++o);

  return o - 1;
}

function D(t) {
  module3(t.length >= 2, 'inputRange must have at least 2 elements');

  for (var n = 1; n < t.length; ++n) module3(t[n] >= t[n - 1], 'inputRange must be monotonically non-decreasing ' + t);
}

function C(t, n) {
  module3(n.length >= 2, t + ' must have at least 2 elements');
  module3(2 !== n.length || n[0] !== -1 / 0 || n[1] !== 1 / 0, t + 'cannot be ]-infinity;+infinity[ ' + n);
}

class E {
  constructor(n, p) {
    var c;
    module22(this, f);
    (c = module30(this, module33(f).call(this)))._parent = n;
    c._config = p;
    c._interpolation = R(p);
    return c;
  }

  __makeNative() {
    this._parent.__makeNative();

    module34(module33(f.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    var t = this._parent.__getValue();

    module3('number' == typeof t, 'Cannot interpolate an input which is not a number.');
    return this._interpolation(t);
  }

  interpolate(t) {
    return new f(this, t);
  }

  __attach() {
    this._parent.__addChild(this);
  }

  __detach() {
    this._parent.__removeChild(this);

    module34(module33(f.prototype), '__detach', this).call(this);
  }

  __transformDataType(t) {
    return t.map(module208.transformDataType);
  }

  __getNativeConfig() {
    return {
      inputRange: this._config.inputRange,
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
      type: 'interpolation',
    };
  }
}

E.__createInterpolation = R;
module.exports = E;
