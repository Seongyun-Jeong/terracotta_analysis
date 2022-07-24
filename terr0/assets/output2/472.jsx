import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import PropTypes from 'prop-types';
import module2 from './2';

var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module436 = require('./436');

function b(t, n) {
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

var j = module2.Animated.createAnimatedComponent(module436.BaseButton);

class P {
  constructor(t) {
    var o;
    module356.default(this, n);

    (o = module358.default(this, module361.default(n).call(this, t)))._onActiveStateChange = function (t) {
      if ('android' !== module2.Platform.OS)
        module2.Animated.spring(o._opacity, {
          stiffness: 1e3,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
          toValue: t ? o.props.activeOpacity : 1,
          useNativeDriver: true,
        }).start();
      if (o.props.onActiveStateChange) o.props.onActiveStateChange(t);
    };

    o._opacity = new module2.Animated.Value(1);
    return o;
  }

  render() {
    var t = this.props,
      n = t.children,
      c = t.style,
      l = t.enabled,
      p = module370(t, ['children', 'style', 'enabled']);
    return <j>{n}</j>;
  }
}

export default P;

P.propTypes = (function (t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      b(Object(s), true).forEach(function (o) {
        module284.default(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      b(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
})({}, module436.BaseButton.propTypes, {
  borderless: PropTypes.bool,
});

P.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};
