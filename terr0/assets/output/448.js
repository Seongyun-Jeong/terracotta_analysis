Object.defineProperty(exports, 'PureNativeButton', {
  enumerable: true,
  get: function () {
    return module449.default;
  },
});

var module284 = require('./284'),
  module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module2 = require('./2'),
  module439 = require('./439'),
  module449 = require('./449'),
  module444 = require('./444');

function A(t, n) {
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

function _(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      A(Object(l), true).forEach(function (o) {
        module284.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      A(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var b = module439.default(module449.default, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: false,
});
exports.RawButton = b;

var E = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);

    (o = module358.default(this, module361.default(n).call(this, t)))._handleEvent = function (t) {
      var n = t.nativeEvent,
        l = n.state,
        u = n.oldState,
        s = n.pointerInside && l === module444.default.ACTIVE;
      if (s !== o._lastActive && o.props.onActiveStateChange) o.props.onActiveStateChange(s);
      if (u === module444.default.ACTIVE && l !== module444.default.CANCELLED && o._lastActive && o.props.onPress) o.props.onPress(s);
      o._lastActive = s;
    };

    o._onHandlerStateChange = function (t) {
      if (o.props.onHandlerStateChange) o.props.onHandlerStateChange(t);

      o._handleEvent(t);
    };

    o._onGestureEvent = function (t) {
      if (o.props.onGestureEvent) o.props.onGestureEvent(t);

      o._handleEvent(t);
    };

    o._lastActive = false;
    return o;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = t.rippleColor,
          s = module370.default(t, ['style', 'rippleColor']);
        return React.default.createElement(
          b,
          module51.default(
            {
              style: [
                {
                  overflow: 'hidden',
                },
                n,
              ],
              rippleColor: module2.processColor(u),
            },
            s,
            {
              onGestureEvent: this._onGestureEvent,
              onHandlerStateChange: this._onHandlerStateChange,
            }
          )
        );
      },
    },
  ]);
  return n;
})(React.default.Component);

exports.BaseButton = E;
E.propTypes = _({}, b.propTypes, {
  onPress: PropTypes.default.func,
  onActiveStateChange: PropTypes.default.func,
});

var P = module2.Animated.createAnimatedComponent(E),
  j = module2.StyleSheet.create({
    underlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  }),
  B = (function (t) {
    function n(t) {
      var o;
      module356.default(this, n);

      (o = module358.default(this, module361.default(n).call(this, t)))._onActiveStateChange = function (t) {
        if ('android' !== module2.Platform.OS) o._opacity.setValue(t ? o.props.activeOpacity : 0);
        if (o.props.onActiveStateChange) o.props.onActiveStateChange(t);
      };

      o._opacity = new module2.Animated.Value(0);
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.children,
            u = module370.default(t, ['children']);
          return React.default.createElement(
            E,
            module51.default({}, u, {
              onActiveStateChange: this._onActiveStateChange,
            }),
            React.default.createElement(module2.Animated.View, {
              style: [
                j.underlay,
                {
                  opacity: this._opacity,
                },
                {
                  backgroundColor: this.props.underlayColor,
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

exports.RectButton = B;
B.propTypes = E.propTypes;
B.defaultProps = {
  activeOpacity: 0.105,
  underlayColor: 'black',
};

var w = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);

    (o = module358.default(this, module361.default(n).call(this, t)))._onActiveStateChange = function (t) {
      if ('android' !== module2.Platform.OS) o._opacity.setValue(t ? o.props.activeOpacity : 1);
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
          u = t.style,
          s = module370.default(t, ['children', 'style']);
        return React.default.createElement(
          P,
          module51.default({}, s, {
            onActiveStateChange: this._onActiveStateChange,
            style: [
              u,
              'ios' === module2.Platform.OS && {
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

exports.BorderlessButton = w;
w.propTypes = _({}, E.propTypes, {
  borderless: PropTypes.default.bool,
});
w.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};
