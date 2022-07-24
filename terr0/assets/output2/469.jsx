import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module284 = require('./284'),
  module51 = require('./51');

function u(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

var s = module2.Animated.Text,
  O = module2.StyleSheet.create({
    title: (function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var c = null != arguments[o] ? arguments[o] : {};
        if (o % 2)
          u(Object(c), true).forEach(function (o) {
            module284.default(t, o, c[o]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
        else
          u(Object(c)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
          });
      }

      return t;
    })(
      {},
      module2.Platform.select({
        ios: {
          fontSize: 17,
          fontWeight: '600',
        },
        default: {
          fontSize: 20,
          fontWeight: '500',
        },
      }),
      {
        color: 'rgba(0, 0, 0, .9)',
        marginHorizontal: 16,
      }
    ),
  }),
  b = function (t) {
    var n = t.style,
      f = module370(t, ['style']);
    return <s />;
  };

export default b;
