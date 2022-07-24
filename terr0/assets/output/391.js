var module392 = require('./392'),
  module375 = require('./375'),
  module396 = require('./396'),
  module399 = require('./399'),
  module378 = require('./378'),
  module401 = require('./401'),
  module402 = require('./402'),
  module403 = require('./403');

function y(t) {
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
      p(t, n, o[n]);
    });
  }

  return t;
}

function p(t, n, o) {
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

var x = function () {
  return {};
};

exports.default = function (t) {
  var p = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  module402.default(t);
  var h = p.order || Object.keys(t),
    A = p.getCustomActionCreators || x,
    O = p.initialRouteParams,
    P = p.initialRouteName || h[0],
    S = p.backBehavior || 'none',
    b = !p.hasOwnProperty('resetOnBlur') || p.resetOnBlur,
    N = h.indexOf(P);
  if (-1 === N)
    throw new Error(
      "Invalid initialRouteName '" +
        P +
        "'.Should be one of " +
        h
          .map(function (t) {
            return '"' + t + '"';
          })
          .join(', ')
    );
  var k = {};

  function F(n, o) {
    var u = t[n];
    return u && u.params ? y({}, u.params, o) : o;
  }

  h.forEach(function (n) {
    k[n] = null;
    var o = module396.default(t, n);
    if (o.router) k[n] = o.router;
  });
  var C = module403.createPathParser(k, t, p),
    K = C.getPathAndParamsForRoute,
    R = C.getActionForPathAndParams;

  function T(t) {
    var n = F(t, t === P ? O : undefined),
      o = k[t];

    if (o) {
      var u = module378.default.init();
      return y({}, o.getStateForAction(u), {
        key: t,
        routeName: t,
        params: n,
      });
    }

    return {
      key: t,
      routeName: t,
      params: n,
    };
  }

  function E(t, o, u) {
    var f = u;

    if (o && o.index !== u.index && b) {
      var l = o.routes[o.index].routeName,
        c = module392.default(u.routes);
      c[o.index] = T(l);
      f = y({}, u, {
        routes: c,
      });
    }

    return (function (u) {
      if ('history' !== S) return u;
      var f = o.routeKeyHistory;

      if (t.type === module378.default.NAVIGATE) {
        f = module392.default(o.routeKeyHistory);
        var l = u.routes[u.index].key;
        (f = f.filter(function (t) {
          return t !== l;
        })).push(l);
      } else t.type === module378.default.BACK && (f = module392.default(o.routeKeyHistory)).pop();

      return y({}, u, {
        routeKeyHistory: f,
      });
    })(f);
  }

  function j() {
    var t = h.map(T),
      n = {
        routes: t,
        index: N,
        isTransitioning: false,
      };

    if ('history' === S) {
      var o = t[N].key;
      n.routeKeyHistory = [o];
    }

    return n;
  }

  return {
    childRouters: k,
    getActionCreators: function (t, n) {
      return A(t, n);
    },
    getStateForAction: function (t, o) {
      var u = o ? y({}, o) : o,
        f = o || j(),
        c = f.index;

      if (t.type === module378.default.INIT) {
        var v = t.params;
        if (v)
          f.routes = f.routes.map(function (t) {
            return y({}, t, {
              params: y({}, t.params, v, t.routeName === P ? O : null),
            });
          });
      }

      var p = f.routes[f.index],
        x = k[h[f.index]];

      if (x) {
        var A = x.getStateForAction(t, p);
        if (!A && o) return null;

        if (A && A !== p) {
          var b = module392.default(f.routes);
          b[f.index] = A;
          return E(
            t,
            u,
            y({}, f, {
              routes: b,
            })
          );
        }
      }

      var F = null == t.key || t.key === p.key;
      if (t.type === module378.default.BACK)
        if (F && 'initialRoute' === S) c = N;
        else if (F && 'order' === S) c = 0 ** (c - 1);
        else {
          if (!(F && 'history' === S && f.routeKeyHistory.length > 1)) return f;
          var C = f.routeKeyHistory[f.routeKeyHistory.length - 2];
          c = h.indexOf(C);
        }
      var K = false;

      if (
        t.type === module378.default.NAVIGATE &&
        (K = !!h.find(function (n, o) {
          return n === t.routeName && ((c = o), true);
        }))
      ) {
        var R = f.routes[c],
          T = k[t.routeName],
          w = R;

        if (t.action && T) {
          var H = T.getStateForAction(t.action, R);
          if (H) w = H;
        }

        if (
          (t.params &&
            (w = y({}, w, {
              params: y({}, w.params || {}, t.params),
            })),
          w !== R)
        ) {
          var I = module392.default(f.routes);
          I[c] = w;

          var _ = y({}, f, {
            routes: I,
            index: c,
          });

          return E(t, u, _);
        }

        if (w === R && f.index === c && u) return null;
      }

      if (t.type === module378.default.SET_PARAMS) {
        var B = t.key,
          M = f.routes.find(function (t) {
            return t.key === B;
          });

        if (M) {
          var G = y({}, M.params, t.params),
            V = module392.default(f.routes);
          V[f.routes.indexOf(M)] = y({}, M, {
            params: G,
          });
          return E(
            t,
            u,
            y({}, f, {
              routes: V,
            })
          );
        }
      }

      if (c !== f.index)
        return E(
          t,
          u,
          y({}, f, {
            index: c,
          })
        );
      if (K && !o) return f;
      if (K) return y({}, f);
      var D,
        L = f.index,
        q = f.routes;
      h.find(function (o, u) {
        var f = k[o];
        if (u === L) return false;
        var s = q[u];
        if (f) s = f.getStateForAction(t, s);
        if (s) return s !== q[u] && (((q = module392.default(q))[u] = s), (L = u), true);
        else {
          L = u;
          return true;
        }
      });
      D = t.type;
      if ([module378.default.SET_PARAMS, module401.default.COMPLETE_TRANSITION].includes(D)) L = f.index;
      return L !== f.index || q !== f.routes
        ? E(
            t,
            u,
            y({}, f, {
              index: L,
              routes: q,
            })
          )
        : f;
    },
    getComponentForState: function (n) {
      var f = n.routes[n.index].routeName;
      module375.default(f, 'There is no route defined for index ' + n.index + '. Check that\n        that you passed in a navigation state with a valid tab/screen index.');
      var s = k[f];
      return s ? s.getComponentForState(n.routes[n.index]) : module396.default(t, f);
    },
    getComponentForRouteName: function (n) {
      return module396.default(t, n);
    },
    getPathAndParamsForState: function (t) {
      var n = t.routes[t.index];
      return K(n);
    },
    getActionForPathAndParams: function (t, n) {
      return R(t, n);
    },
    getScreenOptions: module399.default(t, p.defaultNavigationOptions),
  };
};
