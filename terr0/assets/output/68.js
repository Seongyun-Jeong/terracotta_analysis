var module46 = require('./46');

function t(o, t) {
  var b = Object.keys(o);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    if (t)
      n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      });
    b.push.apply(b, n);
  }

  return b;
}

var module58 = require('./58'),
  module60 = require('./60'),
  PropTypes = require('prop-types'),
  module65 = (function (b) {
    for (var n = 1; n < arguments.length; n++) {
      var u = null != arguments[n] ? arguments[n] : {};
      if (n % 2)
        t(Object(u), true).forEach(function (t) {
          module46(b, t, u[t]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(b, Object.getOwnPropertyDescriptors(u));
      else
        t(Object(u)).forEach(function (o) {
          Object.defineProperty(b, o, Object.getOwnPropertyDescriptor(u, o));
        });
    }

    return b;
  })({}, module60, {}, require('./64'), {}, require('./65'), {
    backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
    backgroundColor: module58,
    borderColor: module58,
    borderTopColor: module58,
    borderRightColor: module58,
    borderBottomColor: module58,
    borderLeftColor: module58,
    borderStartColor: module58,
    borderEndColor: module58,
    borderRadius: PropTypes.number,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderTopStartRadius: PropTypes.number,
    borderTopEndRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
    borderBottomStartRadius: PropTypes.number,
    borderBottomEndRadius: PropTypes.number,
    borderStyle: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
    borderWidth: PropTypes.number,
    borderTopWidth: PropTypes.number,
    borderRightWidth: PropTypes.number,
    borderBottomWidth: PropTypes.number,
    borderLeftWidth: PropTypes.number,
    opacity: PropTypes.number,
    elevation: PropTypes.number,
  });

module.exports = module65;
