import PropTypes from 'prop-types';

var module284 = require('./284'),
  module441 = require('./441'),
  module445 = require('./445');

function l(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

var f = module441.default(
  'NativeViewGestureHandler',
  (function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var c = null != arguments[n] ? arguments[n] : {};
      if (n % 2)
        l(Object(c), true).forEach(function (n) {
          module284.default(t, n, c[n]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
      else
        l(Object(c)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(c, o));
        });
    }

    return t;
  })({}, module445.default, {
    shouldActivateOnStart: PropTypes.bool,
    disallowInterruption: PropTypes.bool,
  })
);
export default f;
