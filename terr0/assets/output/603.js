var module284 = require('./284'),
  module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module2 = require('./2');

function u(t, o) {
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

var s = module2.Animated.Text,
  b = module2.StyleSheet.create({
    title: (function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var c = null != arguments[n] ? arguments[n] : {};
        if (n % 2)
          u(Object(c), true).forEach(function (n) {
            module284.default(t, n, c[n]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
        else
          u(Object(c)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(c, o));
          });
      }

      return t;
    })(
      {},
      module2.Platform.select({
        ios: {
          fontSize: 17,
          fontWeight: '600',
          color: 'rgba(0, 0, 0, .9)',
          marginHorizontal: 16,
        },
        android: {
          fontSize: 20,
          fontWeight: '500',
          color: 'rgba(0, 0, 0, .9)',
          marginHorizontal: 16,
        },
        default: {
          fontSize: 18,
          fontWeight: '400',
          color: '#3c4043',
        },
      })
    ),
  }),
  O = function (t) {
    var o = t.style,
      f = module370.default(t, ['style']);
    return React.default.createElement(
      s,
      module51.default(
        {
          numberOfLines: 1,
        },
        f,
        {
          style: [b.title, o],
          accessibilityTraits: 'header',
        }
      )
    );
  };

exports.default = O;
