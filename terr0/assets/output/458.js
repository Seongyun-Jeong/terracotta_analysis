var module404 = require('./404');

var module284 = require('./284'),
  module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module2 = require('./2'),
  module456 = module404(require('./456')),
  React = module404(require('react')),
  PropTypes = require('prop-types');

function b(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, o);
  }

  return l;
}

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var S = (function (t, ...args) {
  function n() {
    var t, l;
    module356.default(this, n);

    (l = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).getChildStyleOpacityWithDefault = function () {
      var t = module2.StyleSheet.flatten(l.props.style) || {};
      return null == t.opacity ? 1 : t.opacity;
    };

    l.opacity = new module2.Animated.Value(l.getChildStyleOpacityWithDefault());

    l.setOpacityTo = function (t, n) {
      module2.Animated.timing(l.opacity, {
        toValue: t,
        duration: n,
        easing: module2.Easing.inOut(module2.Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    l.onStateChange = function (t, n) {
      if (n === module456.TOUCHABLE_STATE.BEGAN) l.setOpacityTo(l.props.activeOpacity, 0);
      else if (!(n !== module456.TOUCHABLE_STATE.UNDETERMINED && n !== module456.TOUCHABLE_STATE.MOVED_OUTSIDE)) l.setOpacityTo(l.getChildStyleOpacityWithDefault(), 150);
    };

    return l;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          l = undefined === n ? {} : n,
          c = module370.default(t, ['style']);
        return React.default.createElement(
          module456.default,
          module51.default({}, c, {
            style: [
              l,
              {
                opacity: this.opacity,
              },
            ],
            onStateChange: this.onStateChange,
          }),
          this.props.children ? this.props.children : React.default.createElement(module2.View, null)
        );
      },
    },
  ]);
  return n;
})(React.Component);

exports.default = S;
S.defaultProps = T({}, module456.default.defaultProps, {
  activeOpacity: 0.2,
});
S.propTypes = T({}, module456.default.publicPropTypes, {
  style: PropTypes.default.any,
  activeOpacity: PropTypes.default.number,
});
