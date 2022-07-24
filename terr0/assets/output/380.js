function t(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {},
      c = Object.keys(u);
    if ('function' == typeof Object.getOwnPropertySymbols)
      c = c.concat(
        Object.getOwnPropertySymbols(u).filter(function (t) {
          return Object.getOwnPropertyDescriptor(u, t).enumerable;
        })
      );
    c.forEach(function (o) {
      n(t, o, u[o]);
    });
  }

  return t;
}

function n(t, n, o) {
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

exports.default = function (n, o) {
  var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'didBlur',
    c = new Set(),
    l = new Set(),
    s = new Set(),
    f = new Set(),
    w = new Set(),
    y = new Set(),
    v = function () {
      [c, l, s, f, w, y].forEach(function (t) {
        return t.clear();
      });
      b.forEach(function (t) {
        return t && t.remove();
      });
    },
    F = function (t) {
      switch (t) {
        case 'action':
          return c;

        case 'willFocus':
          return l;

        case 'didFocus':
          return s;

        case 'willBlur':
          return f;

        case 'didBlur':
          return w;

        case 'refocus':
          return y;

        default:
          return null;
      }
    },
    B = function (n, o) {
      var u = t({}, o, {
          type: n,
        }),
        c = F(n);
      if (c)
        c.forEach(function (t) {
          t(u);
        });
    },
    p = u,
    b = ['willFocus', 'didFocus', 'willBlur', 'didBlur', 'refocus', 'action'].map(function (t) {
      return n(t, function (n) {
        if ('refocus' !== t) {
          var u = n.state,
            c = n.lastState,
            l = n.action,
            s = c && c.routes,
            f = u && u.routes,
            w = f && f[u.index].key,
            y = w === o,
            F =
              s &&
              s.find(function (t) {
                return t.key === o;
              }),
            b =
              f &&
              f.find(function (t) {
                return t.key === o;
              }),
            S = {
              context: o + ':' + l.type + '_' + (n.context || 'Root'),
              state: b,
              lastState: F,
              action: l,
              type: t,
            },
            h = !!u && u.isTransitioning,
            O = p;
          if ('didBlur' === p) 'willFocus' === t && y ? B((p = 'willFocus'), S) : 'action' === t && y && B((p = 'willFocus'), S);
          if ('willFocus' === p) 'didFocus' === t && y && !h ? B((p = 'didFocus'), S) : 'action' === t && y && !h && B((p = 'didFocus'), S);
          if ('didFocus' === p) y ? ('willBlur' === t ? B((p = 'willBlur'), S) : 'action' === t && 'didFocus' === O && B('action', S)) : B((p = 'willBlur'), S);
          if ('willBlur' === p)
            'action' !== t || y || h
              ? 'didBlur' === t
                ? B((p = 'didBlur'), S)
                : 'action' === t && y && !h
                ? B((p = 'didFocus'), S)
                : 'action' === t && y && h && B((p = 'willFocus'), S)
              : B((p = 'didBlur'), S);
          if (!('didBlur' !== p || b)) v();
        } else B(t, n);
      });
    });

  return {
    addListener: function (t, n) {
      var o = F(t);
      if (!o) throw new Error('Invalid event name "' + t + '"');
      o.add(n);
      return {
        remove: function () {
          o.delete(n);
        },
      };
    },
    emit: function (t, n) {
      if ('refocus' === t) B(t, n);
      else console.error("navigation.emit only supports the 'refocus' event currently.");
    },
  };
};
