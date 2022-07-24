var module284 = require('./284'),
  module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module2 = require('./2'),
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

var j = module2.Animated.createAnimatedComponent(module436.BaseButton),
  P = (function (t) {
    function n(t) {
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

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.children,
            c = t.style,
            l = t.enabled,
            p = module370.default(t, ['children', 'style', 'enabled']);
          return React.default.createElement(
            j,
            module51.default({}, p, {
              onActiveStateChange: this._onActiveStateChange,
              style: [
                c,
                'ios' === module2.Platform.OS &&
                  l && {
                    opacity: this._opacity,
                  },
              ],
            }),
            n
          );
        },
      },
    ]);
    return n;
  })(React.default.Component);

exports.default = P;

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
  borderless: PropTypes.default.bool,
});

P.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};
