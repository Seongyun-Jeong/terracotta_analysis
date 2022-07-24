var module3 = require('./3'),
  n = {},
  s = {},
  o = {};

exports.customBubblingEventTypes = n;
exports.customDirectEventTypes = s;
exports.eventTypes = o;
var u = new Map(),
  f = new Map();

function l(t) {
  var u = t.bubblingEventTypes,
    f = t.directEventTypes;
  if (null != u) for (var l in u) null == n[l] && (o[l] = n[l] = u[l]);
  if (null != f) for (var c in f) null == s[c] && (o[c] = s[c] = f[c]);
}

exports.register = function (n, s) {
  module3(!u.has(n), 'Tried to register two views with the same name %s', n);
  u.set(n, s);
  return n;
};

exports.get = function (n) {
  var s;
  if (f.has(n)) s = f.get(n);
  else {
    var o = u.get(n);
    if ('function' != typeof o)
      module3(false, 'View config not found for name %s.%s', n, 'string' == typeof n[0] && /[a-z]/.test(n[0]) ? ' Make sure to start component names with a capital letter.' : '');
    u.set(n, null);
    l((s = o()));
    f.set(n, s);
  }
  module3(s, 'View config not found for name %s', n);
  return s;
};
