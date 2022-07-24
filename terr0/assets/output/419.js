var module391 = require('./391'),
  module420 = require('./420');

function u(t) {
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
      l(t, n, o[n]);
    });
  }

  return t;
}

function l(t, n, o) {
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

exports.default = function (t) {
  var l = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  l = u({}, l);
  l = module420.default(l, 'resetOnBlur', false);
  l = module420.default(l, 'backBehavior', 'initialRoute');
  return module391.default(t, l);
};
