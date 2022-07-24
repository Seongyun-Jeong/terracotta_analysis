var module46 = require('./46');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(t);
    if (o)
      b = b.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, b);
  }

  return n;
}

import PropTypes from 'prop-types';

var module58 = require('./58'),
  module60 = require('./60'),
  module65 = (function (n) {
    for (var b = 1; b < arguments.length; b++) {
      var c = null != arguments[b] ? arguments[b] : {};
      if (b % 2)
        o(Object(c), true).forEach(function (o) {
          module46(n, o, c[o]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(c));
      else
        o(Object(c)).forEach(function (t) {
          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(c, t));
        });
    }

    return n;
  })({}, module60, {}, require('./64'), {}, require('./65'), {
    resizeMode: PropTypes.oneOf(['center', 'contain', 'cover', 'repeat', 'stretch']),
    backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
    backgroundColor: module58,
    borderColor: module58,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    overflow: PropTypes.oneOf(['visible', 'hidden']),
    tintColor: module58,
    opacity: PropTypes.number,
    overlayColor: PropTypes.string,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
  });

module.exports = module65;
