require('./43');

require('./52');

var module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module303 = require('./303'),
  React = require('react'),
  v = function () {
    return false;
  },
  f = function () {
    return true;
  };

class p {
  constructor() {
    var n, o;
    module22(this, b);

    (o = module30(this, (n = module33(b)).call.apply(n, [this].concat(args))))._handleChange = function (n) {
      if (null != o._nativeSwitchRef) {
        var t = true === o.props.value;

        o._nativeSwitchRef.setNativeProps({
          on: t,
        });

        if (null != o.props.onChange) o.props.onChange(n);
        if (null != o.props.onValueChange) o.props.onValueChange(n.nativeEvent.value);
      }
    };

    o._handleSwitchNativeComponentRef = function (n) {
      o._nativeSwitchRef = n;
    };

    return o;
  }

  render() {
    var t,
      l = this.props,
      u = l.disabled,
      s = l.style,
      h = l.thumbColor,
      p = l.trackColor,
      b = l.value,
      _ = module9(l, ['disabled', 'ios_backgroundColor', 'onChange', 'onValueChange', 'style', 'thumbColor', 'trackColor', 'value']),
      R = h,
      k = null == p ? undefined : p.false,
      y = null == p ? undefined : p.true,
      S = _,
      w = S.thumbTintColor,
      T = S.tintColor,
      V = S.onTintColor;

    if (null != w) R = w;
    if (null != T) k = T;
    if (null != V) y = V;
    var F = {
      enabled: true !== u,
      on: true === b,
      style: s,
      thumbTintColor: R,
      trackColorForFalse: k,
      trackColorForTrue: y,
      trackTintColor: true === b ? y : k,
    };
    return <module303 />;
  }
}

module.exports = p;
