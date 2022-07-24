import module11 from './11';
import module9 from '@babel/runtime/helpers/defineEnumerableProperties';

var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function h(t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(s), true).forEach(function (o) {
        module46(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      p(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

import React from 'react';

var module52 = require('./52'),
  module265 = require('./265'),
  module192 = require('./192'),
  module266 = require('./266'),
  j = module52.create({
    rctCheckBox: {
      height: 32,
      width: 32,
    },
  }),
  C = React.forwardRef(function (n, o) {
    return <w />;
  });

class w {
  constructor() {
    var t, n;
    module22(this, p);
    (n = module30(this, (t = module33(p)).call.apply(t, [this].concat(args))))._nativeRef = null;
    n._setNativeRef = module266({
      getForwardedRef: function () {
        return n.props.forwardedRef;
      },
      setLocalRef: function (t) {
        n._nativeRef = t;
      },
    });

    n._onChange = function (t) {
      var o,
        s = null != (o = n.props.value) && o;
      module192(n._nativeRef).setNativeProps({
        value: s,
      });
      if (n.props.onChange) n.props.onChange(t);
      if (n.props.onValueChange) n.props.onValueChange(t.nativeEvent.value);
    };

    return n;
  }

  render() {
    var n,
      s,
      c = this.props,
      u = c.style,
      f = h({}, module9(c, ['disabled', 'value', 'style', 'forwardedRef']), {
        onStartShouldSetResponder: function () {
          return true;
        },
        onResponderTerminationRequest: function () {
          return false;
        },
        enabled: !(null != (n = this.props.disabled) && n),
        on: null != (s = this.props.value) && s,
        style: [j.rctCheckBox, u],
      });
    return <module265 />;
  }
}

module.exports = C;
