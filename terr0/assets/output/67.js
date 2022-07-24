var module46 = require('./46');

function n(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

var module58 = require('./58'),
  PropTypes = require('prop-types'),
  module68 = (function (o) {
    for (var l = 1; l < arguments.length; l++) {
      var c = null != arguments[l] ? arguments[l] : {};
      if (l % 2)
        n(Object(c), true).forEach(function (n) {
          module46(o, n, c[n]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
      else
        n(Object(c)).forEach(function (t) {
          Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
        });
    }

    return o;
  })({}, require('./68'), {
    color: module58,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontStyle: PropTypes.oneOf(['normal', 'italic']),
    fontWeight: PropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),
    fontVariant: PropTypes.arrayOf(PropTypes.oneOf(['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums'])),
    textShadowOffset: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    textShadowRadius: PropTypes.number,
    textShadowColor: module58,
    letterSpacing: PropTypes.number,
    lineHeight: PropTypes.number,
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    textAlignVertical: PropTypes.oneOf(['auto', 'top', 'bottom', 'center']),
    includeFontPadding: PropTypes.bool,
    textDecorationLine: PropTypes.oneOf(['none', 'underline', 'line-through', 'underline line-through']),
    textDecorationStyle: PropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),
    textDecorationColor: module58,
    textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
    writingDirection: PropTypes.oneOf(['auto', 'ltr', 'rtl']),
  });

module.exports = module68;
