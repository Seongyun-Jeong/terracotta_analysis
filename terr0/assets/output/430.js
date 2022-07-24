var module398 = require('./398'),
  o = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  },
  p = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  },
  y = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  },
  n = {};

function s(p) {
  return module398.isMemo(p) ? y : n[p.$$typeof] || o;
}

n[module398.ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
var c = Object.defineProperty,
  f = Object.getOwnPropertyNames,
  l = Object.getOwnPropertySymbols,
  u = Object.getOwnPropertyDescriptor,
  O = Object.getPrototypeOf,
  P = Object.prototype;

module.exports = function t(o, y, n) {
  if ('string' != typeof y) {
    if (P) {
      var v = O(y);
      if (v && v !== P) t(o, v, n);
    }

    var b = f(y);
    if (l) b = b.concat(l(y));

    for (var j = s(o), T = s(y), $ = 0; $ < b.length; ++$) {
      var x = b[$];

      if (!(p[x] || (n && n[x]) || (T && T[x]) || (j && j[x]))) {
        var h = u(y, x);

        try {
          c(o, x, h);
        } catch (t) {}
      }
    }
  }

  return o;
};
