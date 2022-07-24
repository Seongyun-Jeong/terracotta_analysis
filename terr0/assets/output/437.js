var module404 = require('./404');

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module438 = require('./438');

function O(t, n) {
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

function S(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      O(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      O(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var _ = 0.05;
if (!Math.sign)
  Math.sign = function (t) {
    return Number(t > 0) - Number(t < 0) || +t;
  };

var b = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);

    (o = module358.default(this, module361.default(n).call(this, t)))._updateAnimatedEvent = function (t, n) {
      var s = t.friction,
        l = t.overshootFriction,
        p = n.dragX,
        u = n.rowTranslation,
        h = n.leftWidth,
        f = undefined === h ? 0 : h,
        c = n.rowWidth,
        w = undefined === c ? 0 : c,
        O = n.rightOffset,
        S = undefined === O ? w : O,
        _ = 0 ** (w - S),
        b = t.overshootLeft,
        A = undefined === b ? f > 0 : b,
        y = t.overshootRight,
        R = undefined === y ? _ > 0 : y,
        E = module2.Animated.add(
          u,
          p.interpolate({
            inputRange: [0, s],
            outputRange: [0, 1],
          })
        ).interpolate({
          inputRange: [-_ - (R ? 1 : l), -_, f, f + (A ? 1 : l)],
          outputRange: [-_ - (R || l > 1 ? 1 : 0), -_, f, f + (A || l > 1 ? 1 : 0)],
        });

      o._transX = E;
      o._showLeftAction =
        f > 0
          ? E.interpolate({
              inputRange: [-1, 0, f],
              outputRange: [0, 0, 1],
            })
          : new module2.Animated.Value(0);
      o._leftActionTranslate = o._showLeftAction.interpolate({
        inputRange: [0, Number.MIN_VALUE],
        outputRange: [-1e4, 0],
        extrapolate: 'clamp',
      });
      o._showRightAction =
        _ > 0
          ? E.interpolate({
              inputRange: [-_, 0, 1],
              outputRange: [1, 0, 0],
            })
          : new module2.Animated.Value(0);
      o._rightActionTranslate = o._showRightAction.interpolate({
        inputRange: [0, Number.MIN_VALUE],
        outputRange: [-1e4, 0],
        extrapolate: 'clamp',
      });
    };

    o._onTapHandlerStateChange = function (t) {
      if (t.nativeEvent.oldState === module438.State.ACTIVE) o.close();
    };

    o._onHandlerStateChange = function (t) {
      var n = t.nativeEvent;
      if (n.oldState === module438.State.ACTIVE) o._handleRelease(n);
    };

    o._handleRelease = function (t) {
      var n = t.velocityX,
        s = t.translationX,
        l = o.state,
        p = l.leftWidth,
        u = undefined === p ? 0 : p,
        h = l.rowWidth,
        f = undefined === h ? 0 : h,
        c = l.rowState,
        v = o.state.rightOffset,
        w = f - (undefined === v ? f : v),
        O = o.props,
        S = O.friction,
        b = O.leftThreshold,
        A = undefined === b ? u / 2 : b,
        y = O.rightThreshold,
        R = undefined === y ? w / 2 : y,
        E = o._currentOffset() + s / S,
        W = (s + _ * n) / S,
        L = 0;
      if (0 === c) W > A ? (L = u) : W < -R && (L = -w);
      else if (1 === c) {
        if (W > -A) L = u;
      } else if (W < R) L = -w;

      o._animateRow(E, L, n / S);
    };

    o._animateRow = function (t, n, s) {
      var l = o.state,
        p = l.dragX,
        u = l.rowTranslation;
      p.setValue(0);
      u.setValue(t);
      o.setState({
        rowState: Math.sign(n),
      });
      module2.Animated.spring(
        u,
        S(
          {
            restSpeedThreshold: 1.7,
            restDisplacementThreshold: 0.4,
            velocity: s,
            bounciness: 0,
            toValue: n,
            useNativeDriver: o.props.useNativeAnimations,
          },
          o.props.animationOptions
        )
      ).start(function (t) {
        if (t.finished) {
          if (n > 0 && o.props.onSwipeableLeftOpen) o.props.onSwipeableLeftOpen();
          else if (n < 0 && o.props.onSwipeableRightOpen) o.props.onSwipeableRightOpen();
          if (0 === n) {
            if (o.props.onSwipeableClose) o.props.onSwipeableClose();
          } else if (o.props.onSwipeableOpen) o.props.onSwipeableOpen();
        }
      });
      if (n > 0 && o.props.onSwipeableLeftWillOpen) o.props.onSwipeableLeftWillOpen();
      else if (n < 0 && o.props.onSwipeableRightWillOpen) o.props.onSwipeableRightWillOpen();
      if (0 === n) {
        if (o.props.onSwipeableWillClose) o.props.onSwipeableWillClose();
      } else if (o.props.onSwipeableWillOpen) o.props.onSwipeableWillOpen();
    };

    o._onRowLayout = function (t) {
      var n = t.nativeEvent;
      o.setState({
        rowWidth: n.layout.width,
      });
    };

    o._currentOffset = function () {
      var t = o.state,
        n = t.leftWidth,
        s = undefined === n ? 0 : n,
        l = t.rowWidth,
        p = undefined === l ? 0 : l,
        u = t.rowState,
        h = o.state.rightOffset;
      return 1 === u ? s : -1 === u ? -(p - (undefined === h ? p : h)) : 0;
    };

    o.close = function () {
      o._animateRow(o._currentOffset(), 0);
    };

    o.openLeft = function () {
      var t = o.state.leftWidth,
        n = undefined === t ? 0 : t;

      o._animateRow(o._currentOffset(), n);
    };

    o.openRight = function () {
      var t = o.state.rowWidth,
        n = undefined === t ? 0 : t,
        s = o.state.rightOffset,
        l = n - (undefined === s ? n : s);

      o._animateRow(o._currentOffset(), -l);
    };

    var s = new module2.Animated.Value(0);
    o.state = {
      dragX: s,
      rowTranslation: new module2.Animated.Value(0),
      rowState: 0,
      leftWidth: undefined,
      rightOffset: undefined,
      rowWidth: undefined,
    };

    o._updateAnimatedEvent(t, o.state);

    o._onGestureEvent = module2.Animated.event(
      [
        {
          nativeEvent: {
            translationX: s,
          },
        },
      ],
      {
        useNativeDriver: t.useNativeAnimations,
      }
    );
    return o;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: 'componentWillUpdate',
      value: function (t, n) {
        if (
          !(
            this.props.friction === t.friction &&
            this.props.overshootLeft === t.overshootLeft &&
            this.props.overshootRight === t.overshootRight &&
            this.props.overshootFriction === t.overshootFriction &&
            this.state.leftWidth === n.leftWidth &&
            this.state.rightOffset === n.rightOffset &&
            this.state.rowWidth === n.rowWidth
          )
        )
          this._updateAnimatedEvent(t, n);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.state.rowState,
          s = this.props,
          l = s.children,
          p = s.renderLeftActions,
          u = s.renderRightActions,
          h =
            p &&
            React.default.createElement(
              module2.Animated.View,
              {
                style: [
                  A.leftActions,
                  {
                    transform: [
                      {
                        translateX: this._leftActionTranslate,
                      },
                    ],
                  },
                ],
              },
              p(this._showLeftAction, this._transX),
              React.default.createElement(module2.View, {
                onLayout: function (n) {
                  var o = n.nativeEvent;
                  return t.setState({
                    leftWidth: o.layout.x,
                  });
                },
              })
            ),
          f =
            u &&
            React.default.createElement(
              module2.Animated.View,
              {
                style: [
                  A.rightActions,
                  {
                    transform: [
                      {
                        translateX: this._rightActionTranslate,
                      },
                    ],
                  },
                ],
              },
              u(this._showRightAction, this._transX),
              React.default.createElement(module2.View, {
                onLayout: function (n) {
                  var o = n.nativeEvent;
                  return t.setState({
                    rightOffset: o.layout.x,
                  });
                },
              })
            );
        return React.default.createElement(
          module438.PanGestureHandler,
          module51.default({}, this.props, {
            minDeltaX: 10,
            onGestureEvent: this._onGestureEvent,
            onHandlerStateChange: this._onHandlerStateChange,
          }),
          React.default.createElement(
            module2.Animated.View,
            {
              onLayout: this._onRowLayout,
              style: [A.container, this.props.containerStyle],
            },
            h,
            f,
            React.default.createElement(
              module438.TapGestureHandler,
              {
                enabled: 0 !== n,
                onHandlerStateChange: this._onTapHandlerStateChange,
              },
              React.default.createElement(
                module2.Animated.View,
                {
                  pointerEvents: 0 === n ? 'auto' : 'box-only',
                  style: [
                    {
                      transform: [
                        {
                          translateX: this._transX,
                        },
                      ],
                    },
                    this.props.childrenContainerStyle,
                  ],
                },
                l
              )
            )
          )
        );
      },
    },
  ]);
  return n;
})(React.Component);

exports.default = b;
b.defaultProps = {
  friction: 1,
  overshootFriction: 1,
  useNativeAnimations: true,
};
var A = module2.StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  leftActions: S({}, module2.StyleSheet.absoluteFillObject, {
    flexDirection: 'row',
  }),
  rightActions: S({}, module2.StyleSheet.absoluteFillObject, {
    flexDirection: 'row-reverse',
  }),
});
