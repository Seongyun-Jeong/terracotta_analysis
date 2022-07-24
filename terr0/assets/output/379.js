var module380 = require('./380'),
  module381 = require('./381'),
  module377 = require('./377'),
  module382 = require('./382');

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(u);
    if ('function' == typeof Object.getOwnPropertySymbols)
      o = o.concat(
        Object.getOwnPropertySymbols(u).filter(function (t) {
          return Object.getOwnPropertyDescriptor(u, t).enumerable;
        })
      );
    o.forEach(function (n) {
      s(t, n, u[n]);
    });
  }

  return t;
}

function s(t, n, u) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = u;
  return t;
}

var l = function (t) {
  return function (n, u) {
    var o = t.params;
    return o && n in o ? o[n] : u;
  };
};

var v = function t(s, v, y) {
  var p = module382.default(s),
    b = s.state.routes.find(function (t) {
      return t.key === v;
    });
  if (!b) return null;
  if (p[v] && p[v].state === b) return p[v];
  var O = module381.default(s.router, b.routeName),
    P = b.routes && 'number' == typeof b.index ? b.routes[b.index] : null,
    h = f({}, s.actions, s.router.getActionCreators(b, s.state.key), O ? O.getActionCreators(P, b.key) : {}, module377.default(b)),
    j = {};

  if (
    (Object.keys(h).forEach(function (t) {
      j[t] = function () {
        var n = h[t].apply(undefined, arguments);
        return s.dispatch(n);
      };
    }),
    p[v])
  ) {
    p[v] = f({}, p[v], j, {
      state: b,
      router: O,
      actions: h,
      getParam: l(b),
    });
    return p[v];
  }

  var k = module380.default(s.addListener, v);
  p[v] = f({}, j, {
    state: b,
    router: O,
    actions: h,
    getParam: l(b),
    getChildNavigation: function (n) {
      return t(p[v], n, function () {
        var t = y();
        return t && t.getChildNavigation(v);
      });
    },
    isFocused: function () {
      var t = y();
      if (!t) return false;
      var n = t.state,
        u = n.routes,
        o = n.index;
      return !!t.isFocused() && u[o].key === v;
    },
    dispatch: s.dispatch,
    getScreenProps: s.getScreenProps,
    dangerouslyGetParent: y,
    addListener: k.addListener,
    emit: k.emit,
  });
  return p[v];
};

exports.default = v;
