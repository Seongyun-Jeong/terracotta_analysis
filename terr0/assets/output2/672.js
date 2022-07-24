export function hop(n, t) {
  return c.call(n, t);
}
export function deepGet(n, t) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '/';
  if (!s(n) && !Array.isArray(n)) return;
  var u = t.split(o),
    f = 0,
    l = n,
    h = u.length;

  for (; f < h; ) {
    var v = u[f++];
    if (!l || !c.call(l, v)) return;
    l = l[v];
  }

  return l;
}
export function deepExists(n, t) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '/',
    u = t.split(o),
    f = 0,
    l = n,
    s = u.length;

  for (; f < s; ) {
    var h = u[f++];
    if (!l || !c.call(l, h)) return false;
    l = l[h];
  }

  return undefined !== l;
}
export function areObjectKeysContainedInOther(t, o) {
  if (!s(t) || !s(o)) return false;
  var u = Object.keys(t);
  var f = Object.keys(o);
  if (l(u, f))
    return u
      .filter(function (n) {
        return s(t[n]);
      })
      .reduce(function (u, f) {
        return u && n(t[f], o[f]);
      }, true);
  return false;
}
exports.isArrayContainedInOther = l;
exports.isObject = s;
exports.isFunction = h;
exports.isString = v;
export function isNumber(n) {
  return 'number' == typeof n;
}
export function isBoolean(n) {
  return 'boolean' == typeof n;
}
export function tryJSONParse(n) {
  try {
    return n && JSON.parse(n);
  } catch (t) {
    return n;
  }
}
export function tryJSONStringify(n) {
  try {
    return JSON.stringify(n);
  } catch (n) {
    return null;
  }
}
export function noop() {}
export function stripTrailingSlash(n) {
  return v(n) && n.endsWith('/') ? n.slice(0, -1) : n;
}
export function typeOf(n) {
  return null === n ? 'null' : Array.isArray(n) ? 'array' : typeof n;
}
export function generatePushID() {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
    t = new Array(8),
    o = new Date().getTime() + n,
    f = o === p;
  p = o;

  for (var c = 7; c >= 0; c -= 1) {
    t[c] = u.charAt(o % 64);
    o = Math.floor(o / 64);
  }

  if (0 !== o) throw new Error('We should have converted the entire timestamp.');
  var l = t.join('');

  if (f) {
    var s;

    for (s = 11; s >= 0 && 63 === A[s]; s -= 1) A[s] = 0;

    A[s] += 1;
  } else for (var h = 0; h < 12; h += 1) A[h] = Math.floor(64 * Math.random());

  for (var v = 0; v < 12; v++) l += u.charAt(A[v]);

  if (20 !== l.length) throw new Error('Length should be 20.');
  return l;
}
export function nativeToJSError(n, o) {
  var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    f = new Error(o);
  f.code = n;
  module51.default(f, u);
  var c = f.stack.split('\n');
  f.stack = c.splice(1, c.length).join('\n');
  return f;
}
export function objectToUniqueId(t) {
  if (!s(t) || null === t) return JSON.stringify(t);
  var o = Object.keys(t).sort();
  var u = '{';

  for (var f = 0; f < o.length; f++) {
    if (0 !== f) u += ',';
    u += JSON.stringify(o[f]);
    u += ':';
    u += n(t[o[f]]);
  }

  u += '}';
  return u;
}
export function promiseOrCallback(n, t) {
  return h(t)
    ? n
        .then(function (n) {
          if (t && 1 === t.length) t(null);
          else if (t) t(null, n);
          return Promise.resolve(n);
        })
        .catch(function (n) {
          if (t) t(n);
          return Promise.reject(n);
        })
    : n;
}
export function firestoreAutoId() {
  for (var n = '', t = 0; t < 20; t++) n += f.charAt(Math.floor(Math.random() * f.length));

  return n;
}
import module2 from './2';

var module51 = require('./51'),
  u = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
  f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  c = Object.hasOwnProperty;

function l(n, t) {
  return (
    !(!Array.isArray(n) || !Array.isArray(t)) &&
    n.reduce(function (n, o) {
      return n && t.includes(o);
    }, true)
  );
}

function s(n) {
  return !!n && 'object' == typeof n && !Array.isArray(n) && null !== n;
}

function h(n) {
  return !!n && 'function' == typeof n;
}

function v(n) {
  return 'string' == typeof n;
}

var y = 'ios' === module2.Platform.OS;
exports.isIOS = y;
var O = 'android' === module2.Platform.OS;
exports.isAndroid = O;
var p = 0,
  A = [];
