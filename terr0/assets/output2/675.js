import module2 from './2';

var module392 = require('./392'),
  module670 = require('./670'),
  module671 = require('./671'),
  p = {},
  s = function (t, u) {
    for (
      var o = {},
        l = Object.keys(t),
        p = function (p, s) {
          var v = l[p];
          if ('function' == typeof t[v])
            o[v] = function (...args) {
              return t[v](...module392.default(u));
            };
          else o[v] = t[v];
        },
        s = 0,
        v = l.length;
      s < v;
      s++
    )
      p(s);

    return o;
  },
  v = function (t) {
    return (t._customUrlOrRegion || t.app.name) + ':' + t.namespace;
  };

export function getNativeModule(t) {
  return p[v(t)];
}
export function initialiseNativeModule(t, n, c) {
  var f = n.moduleName,
    M = n.hasMultiAppSupport,
    h = n.hasCustomUrlSupport,
    N = n.hasRegionsSupport,
    S = n.namespace,
    _ = module2.NativeModules[f],
    R = v(t);
  if (!_ && 'utils' !== S) throw new Error(module671.default.STRINGS.ERROR_MISSING_MODULE(S, f));
  var y = [];
  if (M) y.push(t.app.name);
  if (h || N) y.push(c);
  if (y.length) p[R] = s(_, y);
  else p[R] = _;
  module670.initialiseNativeModuleEventEmitter(t, n);
  return p[R];
}
