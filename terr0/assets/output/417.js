var module392 = require('./392'),
  module378 = require('./378'),
  module401 = require('./401'),
  module399 = require('./399'),
  module396 = require('./396'),
  module374 = require('./374'),
  module402 = require('./402'),
  module375 = require('./375'),
  module418 = require('./418'),
  module403 = require('./403');

function k(t) {
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
      N(t, n, o[n]);
    });
  }

  return t;
}

function N(t, n, o) {
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

function A(t) {
  return t.type === module378.default.NAVIGATE || t.type === module401.default.PUSH;
}

var S = function () {
  return {};
};

function P(t) {
  return t.type === module401.default.RESET && null === t.key;
}

exports.default = function (t) {
  var N = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  module402.default(t);
  var T = {},
    b = Object.keys(t);
  b.forEach(function (n) {
    var o = module396.default(t, n);
    if (o && o.router) T[n] = o.router;
    else T[n] = null;
  });
  var h = N.initialRouteParams,
    x = N.getCustomActionCreators || S,
    O = N.initialRouteName || b[0],
    R = T[O];

  function E(n) {
    var u = {},
      f = T[n.routeName];

    if (A(n) && undefined !== f) {
      var s = {};

      if (null !== f) {
        var l =
          n.action ||
          module378.default.init({
            params: n.params,
          });
        s = f.getStateForAction(l);
      }

      return {
        key: 'StackRouterRoot',
        isTransitioning: false,
        index: 0,
        routes: [
          k(
            {
              params: n.params,
            },
            s,
            {
              key: n.key || module418.generateKey(),
              routeName: n.routeName,
            }
          ),
        ],
      };
    }

    if (R)
      u = R.getStateForAction(
        module378.default.navigate({
          routeName: O,
          params: h,
        })
      );
    var y = (t[O].params || u.params || n.params || h) && k({}, t[O].params || {}, u.params || {}, n.params || {}, h || {}),
      c = N.initialRouteKey;
    return {
      key: 'StackRouterRoot',
      isTransitioning: false,
      index: 0,
      routes: [
        (u = k(
          {},
          u,
          y
            ? {
                params: y,
              }
            : {},
          {
            routeName: O,
            key: n.key || c || module418.generateKey(),
          }
        )),
      ],
    };
  }

  function F(n, o) {
    var u = t[n];
    return u && u.params ? k({}, u.params, o.params) : o.params;
  }

  var j = module403.createPathParser(T, t, N),
    C = j.getPathAndParamsForRoute,
    K = j.getActionForPathAndParams;
  return {
    childRouters: T,
    getComponentForState: function (n) {
      var o = n.routes[n.index],
        u = o.routeName;
      return T[u] ? T[u].getComponentForState(o) : module396.default(t, u);
    },
    getComponentForRouteName: function (n) {
      return module396.default(t, n);
    },
    getActionCreators: function (t, n) {
      return k({}, x(t, n), {
        pop: function (t, n) {
          return module401.default.pop(
            k(
              {
                n: t,
              },
              n
            )
          );
        },
        popToTop: function (t) {
          return module401.default.popToTop(t);
        },
        push: function (t, n, o) {
          return module401.default.push({
            routeName: t,
            params: n,
            action: o,
          });
        },
        replace: function (n, o, f, s) {
          if ('string' == typeof n)
            return module401.default.replace({
              routeName: n,
              params: o,
              action: f,
              key: t.key,
              newKey: s,
            });
          else {
            module375.default('object' == typeof n, 'Must replaceWith an object or a string');
            module375.default(null == o, 'Params must not be provided to .replace() when specifying an object');
            module375.default(null == f, 'Child action must not be provided to .replace() when specifying an object');
            module375.default(null == s, 'Child action must not be provided to .replace() when specifying an object');
            return module401.default.replace(n);
          }
        },
        reset: function (t, o) {
          return module401.default.reset({
            actions: t,
            index: null == o ? t.length - 1 : o,
            key: n,
          });
        },
        dismiss: function () {
          return module378.default.back({
            key: n,
          });
        },
      });
    },
    getStateForAction: function (t, f) {
      if (!f) return E(t);
      var s,
        y = f.routes[f.index];

      if (P(t) || t.type === module378.default.NAVIGATE) {
        if (t.type === module378.default.NAVIGATE) {
          var v = f.routes.slice().reverse(),
            N = Array.isArray(v),
            S = 0;

          for (v = N ? v : v['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
            var b;

            if (N) {
              if (S >= v.length) break;
              b = v[S++];
            } else {
              if ((S = v.next()).done) break;
              b = S.value;
            }

            var h = b,
              x = T[h.routeName],
              O = t.routeName === h.routeName && t.action ? t.action : t;

            if (x) {
              var R = x.getStateForAction(O, h);

              if (null === R || R !== h) {
                var j = module374.default.replaceAndPrune(f, R ? R.key : h.key, R || h);
                return k({}, j, {
                  isTransitioning: f.index !== j.index ? true !== t.immediate : f.isTransitioning,
                });
              }
            }
          }
        }
      } else {
        var C = T[y.routeName];

        if (C) {
          var K = C.getStateForAction(t, y);
          if (null !== K && K !== y) return module374.default.replaceAt(f, y.key, K, t.type === module378.default.SET_PARAMS);
        }
      }

      if (A(t) && undefined !== T[t.routeName]) {
        var _,
          w = T[t.routeName];

        module375.default(t.type !== module401.default.PUSH || null == t.key, 'StackRouter does not support key on the push action');
        var I = f.routes.findIndex(function (n) {
          return t.key ? n.key === t.key : n.routeName === t.routeName;
        });

        if (t.type !== module401.default.PUSH && -1 !== I) {
          if (f.index === I && !t.params) return null;
          var M = f.routes.slice(0, I + 1);

          if (t.params) {
            var H = f.routes[I];
            M[I] = k({}, H, {
              params: k({}, H.params, t.params),
            });
          }

          return k({}, f, {
            isTransitioning: f.index !== I ? true !== t.immediate : f.isTransitioning,
            index: I,
            routes: M,
          });
        }

        if (w) {
          var U =
            t.action ||
            module378.default.init({
              params: F(t.routeName, t),
            });
          _ = k(
            {
              params: F(t.routeName, t),
            },
            w.getStateForAction(U),
            {
              routeName: t.routeName,
              key: t.key || module418.generateKey(),
            }
          );
        } else
          _ = {
            params: F(t.routeName, t),
            routeName: t.routeName,
            key: t.key || module418.generateKey(),
          };

        return k({}, module374.default.push(f, _), {
          isTransitioning: true !== t.immediate,
        });
      }

      if (t.type === module401.default.PUSH && undefined === T[t.routeName]) return f;
      if (A(t))
        for (var G = Object.keys(T), L = 0; L < G.length; L++) {
          var V = G[L],
            D = T[V];

          if (D) {
            var W = D.getStateForAction(module378.default.init()),
              B = D.getStateForAction(t, W),
              q = null;

            if ((null === B ? (q = W) : B !== W && (q = B), q)) {
              var z = k({}, q, {
                routeName: V,
                key: t.key || module418.generateKey(),
              });
              return k({}, module374.default.push(f, z), {
                isTransitioning: true !== t.immediate,
              });
            }
          }
        }
      if (t.type === module401.default.POP_TO_TOP)
        return t.key && f.key !== t.key
          ? f
          : f.index > 0
          ? k({}, f, {
              isTransitioning: true !== t.immediate,
              index: 0,
              routes: [f.routes[0]],
            })
          : f;

      if (
        t.type === module401.default.REPLACE &&
        -1 !==
          (s =
            undefined === t.key && f.routes.length
              ? f.routes.length - 1
              : f.routes.findIndex(function (n) {
                  return n.key === t.key;
                }))
      ) {
        var J = T[t.routeName],
          Q = {};

        if (J) {
          var X =
            t.action ||
            module378.default.init({
              params: F(t.routeName, t),
            });
          Q = J.getStateForAction(X);
        }

        var Y = module392.default(f.routes);
        Y[s] = k(
          {
            params: F(t.routeName, t),
          },
          Q,
          {
            routeName: t.routeName,
            key: t.newKey || module418.generateKey(),
          }
        );
        return k({}, f, {
          routes: Y,
        });
      }

      if (t.type === module401.default.COMPLETE_TRANSITION && (null == t.key || t.key === f.key) && t.toChildKey === f.routes[f.index].key && f.isTransitioning)
        return k({}, f, {
          isTransitioning: false,
        });

      if (t.type === module378.default.SET_PARAMS) {
        var Z = t.key,
          $ = f.routes.find(function (t) {
            return t.key === Z;
          });

        if ($) {
          var ee = k({}, $.params, t.params),
            te = module392.default(f.routes);
          te[f.routes.indexOf($)] = k({}, $, {
            params: ee,
          });
          return k({}, f, {
            routes: te,
          });
        }
      }

      if (t.type === module401.default.RESET)
        return null != t.key && t.key != f.key
          ? f
          : k({}, f, {
              routes: t.actions.map(function (t) {
                var n = T[t.routeName],
                  u = {};

                if (n) {
                  var f =
                    t.action ||
                    module378.default.init({
                      params: F(t.routeName, t),
                    });
                  u = n.getStateForAction(f);
                }

                return k(
                  {
                    params: F(t.routeName, t),
                  },
                  u,
                  {
                    routeName: t.routeName,
                    key: t.key || module418.generateKey(),
                  }
                );
              }),
              index: t.index,
            });

      if (t.type === module378.default.BACK || t.type === module401.default.POP) {
        var re = t.key,
          ae = t.n,
          ne = t.immediate,
          ie = f.index;
        if (t.type === module401.default.POP && null != ae) ie = 1 ** (f.index - ae + 1);
        else if (re) {
          var oe = f.routes.find(function (t) {
            return t.key === re;
          });
          ie = f.routes.indexOf(oe);
        }
        if (ie > 0)
          return k({}, f, {
            routes: f.routes.slice(0, ie),
            index: ie - 1,
            isTransitioning: true !== ne,
          });
      }

      var ue = t.key ? module374.default.indexOf(f, t.key) : -1,
        fe = f.routes.slice().reverse(),
        se = Array.isArray(fe),
        le = 0;

      for (fe = se ? fe : fe['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var de;

        if (se) {
          if (le >= fe.length) break;
          de = fe[le++];
        } else {
          if ((le = fe.next()).done) break;
          de = le.value;
        }

        var ye = de;

        if (ye.key !== y.key && !(ue >= 0 && ye.key !== t.key)) {
          var me = T[ye.routeName];

          if (me) {
            var ce = me.getStateForAction(t, ye);
            if (null === ce) return f;
            if (ce && ce !== ye)
              return module374.default.replaceAt(
                f,
                ye.key,
                ce,
                t.type === module378.default.SET_PARAMS || t.type === module401.default.COMPLETE_TRANSITION || t.type.includes('DRAWER')
              );
          }
        }
      }

      return f;
    },
    getPathAndParamsForState: function (t) {
      var n = t.routes[t.index];
      return C(n);
    },
    getActionForPathAndParams: function (t, n) {
      return K(t, n);
    },
    getScreenOptions: module399.default(t, N.defaultNavigationOptions),
  };
};
