export default function default(t, n, c, u) {
  if (t.forEach(function (t) {
    var n = t.route;
    if (u && u[n.key]) t.descriptor = u[n.key];
  }), c === n) return t;
  var l = new Map(),
      h = new Map(),
      p = new Map();
  t.forEach(function (t) {
    var n = t.key;
    if (t.isStale) p.set(n, t);
    l.set(n, t);
  });
  var k = new Set(),
      b = n.routes;

  if (b.length > n.index + 1) {
    console.warn('StackRouter provided invalid state, index should always be the top route');
    b = n.routes.slice(0, n.index + 1);
  }

  if (b.forEach(function (t, n) {
    var c = f + t.key,
        s = {
      index: n,
      isActive: false,
      isStale: false,
      key: c,
      route: t,
      descriptor: u && u[t.key]
    };
    module601.default(!k.has(c), "navigation.state.routes[" + n + "].key \"" + c + "\" conflicts with another route!");
    k.add(c);
    if (p.has(c)) p.delete(c);
    h.set(c, s);
  }), c) {
    var O = c.routes;

    if (O.length > c.index + 1) {
      console.warn('StackRouter provided invalid state, index should always be the top route');
      O = O.slice(0, c.index + 1);
    }

    O.forEach(function (n, o) {
      var c = f + n.key;

      if (!h.has(c)) {
        var s = t.find(function (t) {
          return t.route.key === n.key;
        }),
            l = s ? s.descriptor : u[n.key];
        if (l) p.set(c, {
          index: o,
          isActive: false,
          isStale: true,
          key: c,
          route: n,
          descriptor: l
        });
      }
    });
  }

  var w = [],
      x = function (t) {
    var n = t.key,
        o = l.has(n) ? l.get(n) : null;
    if (o && v(o, t)) w.push(o);else w.push(t);
  };

  p.forEach(x);
  h.forEach(x);
  w.sort(y);
  var j = 0;
  if (w.forEach(function (t, o) {
    var c = !t.isStale && t.index === n.index;
    if (c !== t.isActive) w[o] = s({}, t, {
      isActive: c
    });
    if (c) j++;
  }), module601.default(1 === j, 'there should always be only one scene active, not %s.', j), w.length !== t.length) return w;
  if (w.some(function (n, o) {
    return !v(t[o], n);
  })) return w;
  return t;
}

var module284 = require("./284"),
    module601 = require("./601"),
    module620 = require("./620");

function u(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n) c = c.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    });
    o.push.apply(o, c);
  }

  return o;
}

function s(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2) u(Object(c), true).forEach(function (o) {
      module284.default(t, o, c[o]);
    });else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));else u(Object(c)).forEach(function (n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
    });
  }

  return t;
}

var f = 'scene_';

function l(t, n) {
  var o = t.length - n.length;
  return o > 0 ? 1 : o < 0 ? -1 : t > n ? 1 : -1;
}

function y(t, n) {
  return t.index > n.index ? 1 : t.index < n.index ? -1 : l(t.key, n.key);
}

function v(t, n) {
  return t.key === n.key && t.index === n.index && t.isStale === n.isStale && t.isActive === n.isActive && h(t.route, n.route);
}

function h(t, n) {
  return t && n ? t.key === n.key && module620.default(t, n) : t === n;
}