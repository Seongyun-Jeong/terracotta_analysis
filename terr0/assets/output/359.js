function o(t) {
  return (o =
    'function' == typeof Symbol && 'symbol' == typeof ('function' == typeof Symbol ? Symbol.iterator : '@@iterator')
      ? function (o) {
          return typeof o;
        }
      : function (o) {
          return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== ('function' == typeof Symbol ? Symbol.prototype : '@@prototype') ? 'symbol' : typeof o;
        })(t);
}

function t(n) {
  if ('function' == typeof Symbol && 'symbol' === o('function' == typeof Symbol ? Symbol.iterator : '@@iterator'))
    module.exports = t = function (t) {
      return o(t);
    };
  else
    module.exports = t = function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== ('function' == typeof Symbol ? Symbol.prototype : '@@prototype') ? 'symbol' : o(t);
    };
  return t(n);
}

module.exports = t;
