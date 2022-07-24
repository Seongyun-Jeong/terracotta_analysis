var module404 = require('./404');

var module405 = require('./405'),
  module409 = module404(require('./409')),
  module378 = require('./378'),
  module375 = require('./375');

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
      s(t, n, o[n]);
    });
  }

  return t;
}

function s(t, n, o) {
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

var module411 = require('./411'),
  v = function (t, n, o) {
    return n.slice(1).reduce(function (t, n, u) {
      var c = o[u];
      if (!c || c.asterisk) return t;
      var l,
        f = c.name;
      if (n)
        try {
          l = decodeURIComponent(n);
        } catch (t) {}
      t[f] = l || n;
      return t;
    }, f({}, t));
  };

exports.getParamsFromPath = v;

var P = function (t, n) {
  return t[
    n.findIndex(function (t) {
      return t.asterisk;
    }) + 1
  ];
};

exports.urlToPathAndParams = function (t, n) {
  var o = t.match(/^(.*)\?(.*)$/),
    u = o ? module411.parse(o[2]) : {},
    c = o ? o[1] : t,
    l = n || '://',
    f = c.split(l)[1];
  if (undefined === f) f = c;
  if ('/' === f) f = '';
  if ('/' === f[f.length - 1]) f = f.slice(0, -1);
  return {
    path: f,
    params: u,
  };
};

exports.createPathParser = function (t, n, s) {
  var h,
    p = s.paths,
    y = undefined === p ? {} : p,
    b = s.disableRouteNamePaths,
    x = {};
  Object.keys(t).forEach(function (t) {
    var o;
    if (undefined === (o = undefined !== y[t] ? y[t] : n[t].path)) o = b ? null : t;
    module375.default(null === o || 'string' == typeof o, 'Route path for ' + t + ' must be specified as a string, or null.');
    var c = null !== o,
      f = [],
      s = c ? module409.default(o, f) : null,
      h = [],
      v = '' === o || !c,
      P = module409.default(v ? '*' : o + '/*', h);
    x[t] = {
      exactRe: s,
      exactReKeys: f,
      extendedPathRe: P,
      extendedPathReKeys: h,
      isWildcard: v,
      toPath:
        null === o
          ? function () {
              return '';
            }
          : module409.compile(o),
    };
  });
  h = Object.entries(x);
  return {
    getActionForPathAndParams: function () {
      var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
        u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
        l = h,
        f = Array.isArray(l),
        s = 0;

      for (l = f ? l : l['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var p;

        if (f) {
          if (s >= l.length) break;
          p = l[s++];
        } else {
          if ((s = l.next()).done) break;
          p = s.value;
        }

        var y = p,
          b = module405.default(y, 2),
          x = b[0],
          R = b[1],
          A = R.exactRe,
          O = R.exactReKeys,
          j = R.extendedPathRe,
          k = R.extendedPathReKeys,
          F = t[x],
          S = A && A.exec(n);

        if (S && S.length) {
          var K = j && j.exec(n),
            w = null;

          if (K && F) {
            var N = P(K, k);
            w = F.getActionForPathAndParams(N, u);
          }

          return module378.default.navigate({
            routeName: x,
            params: v(u, S, O),
            action: w,
          });
        }
      }

      var _ = h,
        E = Array.isArray(_),
        I = 0;

      for (_ = E ? _ : _['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var T;

        if (E) {
          if (I >= _.length) break;
          T = _[I++];
        } else {
          if ((I = _.next()).done) break;
          T = I.value;
        }

        var C = T,
          D = module405.default(C, 2),
          M = D[0],
          U = D[1],
          W = U.extendedPathRe,
          $ = U.extendedPathReKeys,
          q = t[M],
          z = W && W.exec(n);

        if (z && z.length) {
          var B = P(z, $),
            G = null;
          if ((q && (G = q.getActionForPathAndParams(B, u)), !G)) continue;
          return module378.default.navigate({
            routeName: M,
            params: v(u, z, $),
            action: G,
          });
        }
      }

      return null;
    },
    getPathAndParamsForRoute: function (n) {
      var o = n.routeName,
        u = n.params,
        c = t[o],
        l = x[o],
        s = l.toPath,
        h = l.exactReKeys,
        v = s(u),
        P = {};

      if (
        (u &&
          Object.keys(u)
            .filter(function (t) {
              return !h.find(function (n) {
                return n.name === t;
              });
            })
            .forEach(function (t) {
              P[t] = u[t];
            }),
        c)
      ) {
        var p = c.getPathAndParamsForState(n);
        return {
          path: v ? v + '/' + p.path : p.path,
          params: p.params ? f({}, P, p.params) : P,
        };
      }

      return {
        path: v,
        params: P,
      };
    },
  };
};
