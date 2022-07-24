export default function default(t, l, f, s, b, y) {
  var p = t.getActionCreators(l, null),
      v = {
    actions: p,
    router: t,
    state: l,
    dispatch: f,
    getScreenProps: b,
    getChildNavigation: function (t) {
      return module379.default(v, t, y);
    },
    isFocused: function (t) {
      var n = y().state,
          o = n.routes,
          u = n.index;
      return null == t || o[u].key === t;
    },
    addListener: function (t, n) {
      if ('action' !== t) return {
        remove: function () {}
      };else {
        s.add(n);
        return {
          remove: function () {
            s.delete(n);
          }
        };
      }
    },
    dangerouslyGetParent: function () {
      return null;
    },
    _childrenNavigation: module382.default(y())
  },
      O = c({}, module377.default(v.state), p);
  Object.keys(O).forEach(function (t) {
    v[t] = function () {
      return v.dispatch(O[t].apply(O, arguments));
    };
  });
  return v;
}

var module377 = require("./377"),
    module379 = require("./379"),
    module382 = require("./382");

function c(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {},
        u = Object.keys(o);
    if ('function' == typeof Object.getOwnPropertySymbols) u = u.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
      return Object.getOwnPropertyDescriptor(o, t).enumerable;
    }));
    u.forEach(function (n) {
      l(t, n, o[n]);
    });
  }

  return t;
}

function l(t, n, o) {
  if (n in t) Object.defineProperty(t, n, {
    value: o,
    enumerable: true,
    configurable: true,
    writable: true
  });else t[n] = o;
  return t;
}