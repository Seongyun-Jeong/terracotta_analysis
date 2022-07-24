var module375 = require('./375');

function u(n) {
  for (var t = 1; t < arguments.length; t++) {
    var u = null != arguments[t] ? arguments[t] : {},
      f = Object.keys(u);
    if ('function' == typeof Object.getOwnPropertySymbols)
      f = f.concat(
        Object.getOwnPropertySymbols(u).filter(function (n) {
          return Object.getOwnPropertyDescriptor(u, n).enumerable;
        })
      );
    f.forEach(function (t) {
      o(n, t, u[t]);
    });
  }

  return n;
}

function o(n, t, u) {
  if (t in n)
    Object.defineProperty(n, t, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else n[t] = u;
  return n;
}

var f = {
    get: function (n, t) {
      return (
        n.routes.find(function (n) {
          return n.key === t;
        }) || null
      );
    },
    indexOf: function (n, t) {
      return n.routes.findIndex(function (n) {
        return n.key === t;
      });
    },
    has: function (n, t) {
      return !!n.routes.some(function (n) {
        return n.key === t;
      });
    },
    push: function (n, o) {
      module375.default(-1 === f.indexOf(n, o.key), 'should not push route with duplicated key %s', o.key);
      var c = n.routes.slice();
      c.push(o);
      return u({}, n, {
        index: c.length - 1,
        routes: c,
      });
    },
    pop: function (n) {
      if (n.index <= 0) return n;
      var t = n.routes.slice(0, -1);
      return u({}, n, {
        index: t.length - 1,
        routes: t,
      });
    },
    jumpToIndex: function (n, o) {
      if (o === n.index) return n;
      else {
        module375.default(!!n.routes[o], 'invalid index %s to jump to', o);
        return u({}, n, {
          index: o,
        });
      }
    },
    jumpTo: function (n, t) {
      var u = f.indexOf(n, t);
      return f.jumpToIndex(n, u);
    },
    back: function (n) {
      var t = n.index - 1;
      return n.routes[t] ? f.jumpToIndex(n, t) : n;
    },
    forward: function (n) {
      var t = n.index + 1;
      return n.routes[t] ? f.jumpToIndex(n, t) : n;
    },
    replaceAndPrune: function (n, t, o) {
      var c = f.indexOf(n, t),
        l = f.replaceAtIndex(n, c, o);
      return u({}, l, {
        routes: l.routes.slice(0, c + 1),
      });
    },
    replaceAt: function (n, t, u) {
      var o = arguments.length > 3 && undefined !== arguments[3] && arguments[3],
        c = f.indexOf(n, t),
        l = o ? n.index : c,
        s = f.replaceAtIndex(n, c, u);
      s.index = l;
      return s;
    },
    replaceAtIndex: function (n, o, f) {
      if ((module375.default(!!n.routes[o], 'invalid index %s for replacing route %s', o, f.key), n.routes[o] === f && o === n.index)) return n;
      var c = n.routes.slice();
      c[o] = f;
      return u({}, n, {
        index: o,
        routes: c,
      });
    },
    reset: function (n, o, f) {
      module375.default(o.length && Array.isArray(o), 'invalid routes to replace');
      var c = undefined === f ? o.length - 1 : f;

      if (n.routes.length === o.length && n.index === c) {
        if (
          n.routes.every(function (n, t) {
            return o[t] === n;
          })
        )
          return n;
      }

      module375.default(!!o[c], 'invalid index %s to reset', c);
      return u({}, n, {
        index: c,
        routes: o,
      });
    },
  },
  c = f;
export default c;
