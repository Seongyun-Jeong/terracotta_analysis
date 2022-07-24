import module9 from '@babel/runtime/helpers/defineEnumerableProperties';

var module46 = require('./46');

function o(t, n) {
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

function c(n) {
  for (var c = 1; c < arguments.length; c++) {
    var s = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      o(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

require('./43');

require('./166');

import React from 'react';

var module52 = require('./52'),
  module75 = require('./75'),
  module167 = require('./167'),
  p = React.forwardRef(function (t, o) {
    var p,
      O = t.onLayout,
      b = t.style,
      h = module9(t, ['onLayout', 'style']);

    switch (t.size) {
      case 'small':
        p = f.sizeSmall;
        break;

      case 'large':
        p = f.sizeLarge;
        break;

      default:
        p = {
          height: t.size,
          width: t.size,
        };
    }

    var j = c({}, h, {
      ref: o,
      style: p,
      styleAttr: 'Normal',
      indeterminate: true,
    });
    return (
      <module75 onLayout={O} style={module52.compose(f.container, b)}>
        <module167 />
      </module75>
    );
  });

p.displayName = 'ActivityIndicator';
p.defaultProps = {
  animating: true,
  color: null,
  hidesWhenStopped: true,
  size: 'small',
};
var f = module52.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeSmall: {
    width: 20,
    height: 20,
  },
  sizeLarge: {
    width: 36,
    height: 36,
  },
});
module.exports = p;
