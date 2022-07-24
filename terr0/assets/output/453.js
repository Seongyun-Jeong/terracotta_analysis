var module404 = require('./404');

var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module3 = require('./3'),
  module2 = require('./2'),
  module438 = require('./438');

function _(t, n) {
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

function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      _(Object(l), true).forEach(function (n) {
        module284.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      _(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var S = 0.05,
  b = 'Idle',
  V = 'Dragging',
  A = 'Settling',
  O = (function (t) {
    function n(t, o) {
      var s;
      module356.default(this, n);
      (s = module358.default(this, module361.default(n).call(this, t, o)))._accessibilityIsModalView = React.default.createRef();
      s._pointerEventsView = React.default.createRef();
      s._panGestureHandler = React.default.createRef();
      s._drawerShown = false;

      s._updateAnimatedEvent = function (t, n) {
        var o = t.drawerPosition,
          l = t.drawerWidth,
          p = t.drawerType,
          u = n.dragX,
          c = n.touchX,
          w = n.drawerTranslation,
          f = n.containerWidth,
          v = u,
          _ = c;

        if ('left' !== o) {
          v = module2.Animated.multiply(new module2.Animated.Value(-1), u);
          _ = module2.Animated.add(new module2.Animated.Value(f), module2.Animated.multiply(new module2.Animated.Value(-1), c));
          c.setValue(f);
        } else c.setValue(0);

        var y = v;

        if ('front' === p) {
          var S = module2.Animated.add(_, module2.Animated.multiply(new module2.Animated.Value(-1), v)).interpolate({
            inputRange: [l - 1, l, l + 1],
            outputRange: [0, 0, 1],
          });
          y = module2.Animated.add(v, S);
        }

        s._openValue = module2.Animated.add(y, w).interpolate({
          inputRange: [0, l],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        s._onGestureEvent = module2.Animated.event(
          [
            {
              nativeEvent: {
                translationX: u,
                x: c,
              },
            },
          ],
          {
            useNativeDriver: t.useNativeAnimations,
          }
        );
      };

      s._handleContainerLayout = function (t) {
        var n = t.nativeEvent;
        s.setState({
          containerWidth: n.layout.width,
        });
      };

      s._emitStateChanged = function (t, n) {
        if (s.props.onDrawerStateChanged) s.props.onDrawerStateChanged(t, n);
      };

      s._openingHandlerStateChange = function (t) {
        var n = t.nativeEvent;
        if (n.oldState === module438.State.ACTIVE) s._handleRelease(n);
        else if (n.state === module438.State.ACTIVE) {
          s._emitStateChanged(V, false);

          if ('on-drag' === s.props.keyboardDismissMode) module2.Keyboard.dismiss();
          if (s.props.hideStatusBar) module2.StatusBar.setHidden(true, s.props.statusBarAnimation || 'slide');
        }
      };

      s._onTapHandlerStateChange = function (t) {
        var n = t.nativeEvent;
        if (s._drawerShown && n.oldState === module438.State.ACTIVE && 'locked-open' !== s.props.drawerLockMode) s.closeDrawer();
      };

      s._handleRelease = function (t) {
        var n = s.props,
          o = n.drawerWidth,
          l = n.drawerPosition,
          p = n.drawerType,
          u = s.state.containerWidth,
          c = t.translationX,
          w = t.velocityX,
          f = t.x;

        if ('left' !== l) {
          c = -c;
          f = u - f;
          w = -w;
        }

        var h = f - c,
          v = 0;
        if ('front' === p) v = h > o ? h - o : 0;

        var _ = c + v + (s._drawerShown ? o : 0);

        if (_ + S * w > o / 2) s._animateDrawer(_, o, w);
        else s._animateDrawer(_, 0, w);
      };

      s._updateShowing = function (t) {
        s._drawerShown = t;
        if (s._accessibilityIsModalView.current)
          s._accessibilityIsModalView.current.setNativeProps({
            accessibilityViewIsModal: t,
          });
        if (s._pointerEventsView.current)
          s._pointerEventsView.current.setNativeProps({
            pointerEvents: t ? 'auto' : 'none',
          });
        var n = s.props,
          o = n.drawerPosition,
          l = n.minSwipeDistance,
          p = n.edgeWidth,
          u = 'left' === o,
          c = (u ? 1 : -1) * (s._drawerShown ? -1 : 1),
          w = u
            ? {
                left: 0,
                width: t ? undefined : p,
              }
            : {
                right: 0,
                width: t ? undefined : p,
              };
        if (s._panGestureHandler.current)
          s._panGestureHandler.current.setNativeProps({
            hitSlop: w,
            activeOffsetX: c * l,
          });
      };

      s._animateDrawer = function (t, n, o) {
        if ((s.state.dragX.setValue(0), s.state.touchX.setValue('left' === s.props.drawerPosition ? 0 : s.state.containerWidth), undefined !== t)) {
          var l = t;
          if (s.props.useNativeAnimations) t < n && o > 0 ? (l = (t + o / 60) ** n) : t > n && o < 0 && (l = (t + o / 60) ** n);
          s.state.drawerTranslation.setValue(l);
        }

        var p = 0 !== n;

        s._updateShowing(p);

        s._emitStateChanged(A, p);

        if (s.props.hideStatusBar) module2.StatusBar.setHidden(p, s.props.statusBarAnimation || 'slide');
        module2.Animated.spring(s.state.drawerTranslation, {
          velocity: o,
          bounciness: 0,
          toValue: n,
          useNativeDriver: s.props.useNativeAnimations,
        }).start(function (t) {
          if (t.finished) {
            s._emitStateChanged(b, p);

            if (p) {
              if (s.props.onDrawerOpen) s.props.onDrawerOpen();
            } else if (s.props.onDrawerClose) s.props.onDrawerClose();
          }
        });
      };

      s.openDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};

        s._animateDrawer(undefined, s.props.drawerWidth, t.velocity ? t.velocity : 0);

        s.forceUpdate();
      };

      s.closeDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};

        s._animateDrawer(undefined, 0, t.velocity ? t.velocity : 0);

        s.forceUpdate();
      };

      s._renderOverlay = function () {
        module3.default(s._openValue, 'should be set');
        var t = {
          opacity: s._openValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.7],
            extrapolate: 'clamp',
          }),
          backgroundColor: s.props.overlayColor,
        };
        return React.default.createElement(
          module438.TapGestureHandler,
          {
            onHandlerStateChange: s._onTapHandlerStateChange,
          },
          React.default.createElement(module2.Animated.View, {
            pointerEvents: s._drawerShown ? 'auto' : 'none',
            ref: s._pointerEventsView,
            style: [C.overlay, t],
          })
        );
      };

      s._renderDrawer = function () {
        var t,
          n = s.props,
          o = n.drawerBackgroundColor,
          l = n.drawerWidth,
          p = n.drawerPosition,
          u = n.drawerType,
          c = n.drawerContainerStyle,
          v = n.contentContainerStyle,
          _ = 'left' === p,
          y = 'back' !== u,
          S = 'front' !== u,
          b = module2.I18nManager.isRTL ? _ : !_,
          V = {
            backgroundColor: o,
            width: l,
          },
          A = s._openValue;

        if ((module3.default(A, 'should be set'), S))
          t = {
            transform: [
              {
                translateX: A.interpolate({
                  inputRange: [0, 1],
                  outputRange: _ ? [0, l] : [0, -l],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };
        var O = 0;

        if (y) {
          var D = _ ? -l : l;
          O = A.interpolate({
            inputRange: [0, 1],
            outputRange: [D, 0],
            extrapolate: 'clamp',
          });
        }

        var E = {
          transform: [
            {
              translateX: O,
            },
          ],
          flexDirection: b ? 'row-reverse' : 'row',
        };
        return React.default.createElement(
          module2.Animated.View,
          {
            style: C.main,
            onLayout: s._handleContainerLayout,
          },
          React.default.createElement(
            module2.Animated.View,
            {
              style: ['front' === u ? C.containerOnBack : C.containerInFront, t, v],
            },
            'function' == typeof s.props.children ? s.props.children(s._openValue) : s.props.children,
            s._renderOverlay()
          ),
          React.default.createElement(
            module2.Animated.View,
            {
              pointerEvents: 'box-none',
              ref: s._accessibilityIsModalView,
              accessibilityViewIsModal: s._drawerShown,
              style: [C.drawerContainer, E, c],
            },
            React.default.createElement(
              module2.View,
              {
                style: V,
              },
              s.props.renderNavigationView(s._openValue)
            )
          )
        );
      };

      s._setPanGestureRef = function (t) {
        s._panGestureHandler.current = t;
        if (s.props.onGestureRef) s.props.onGestureRef(t);
      };

      var c = new module2.Animated.Value(0),
        _ = new module2.Animated.Value(0),
        y = new module2.Animated.Value(0);

      s.state = {
        dragX: c,
        touchX: _,
        drawerTranslation: y,
        containerWidth: 0,
      };

      s._updateAnimatedEvent(t, s.state);

      return s;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentWillUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.drawerPosition === t.drawerPosition &&
              this.props.drawerWidth === t.drawerWidth &&
              this.props.drawerType === t.drawerType &&
              this.state.containerWidth === n.containerWidth
            )
          )
            this._updateAnimatedEvent(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.drawerPosition,
            o = t.drawerLockMode,
            l = t.edgeWidth,
            s = t.minSwipeDistance,
            p = 'left' === n,
            u = (p ? 1 : -1) * (this._drawerShown ? -1 : 1),
            c = p
              ? {
                  left: 0,
                  width: this._drawerShown ? undefined : l,
                }
              : {
                  right: 0,
                  width: this._drawerShown ? undefined : l,
                };
          return React.default.createElement(
            module438.PanGestureHandler,
            {
              ref: this._setPanGestureRef,
              hitSlop: c,
              activeOffsetX: u * s,
              failOffsetY: [-15, 15],
              onGestureEvent: this._onGestureEvent,
              onHandlerStateChange: this._openingHandlerStateChange,
              enabled: 'locked-closed' !== o && 'locked-open' !== o,
            },
            this._renderDrawer()
          );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = O;
O.defaultProps = {
  drawerWidth: 200,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerType: 'front',
  edgeWidth: 20,
  minSwipeDistance: 3,
  overlayColor: 'black',
  drawerLockMode: 'unlocked',
};
O.positions = {
  Left: 'left',
  Right: 'right',
};
var C = module2.StyleSheet.create({
  drawerContainer: y({}, module2.StyleSheet.absoluteFillObject, {
    zIndex: 1001,
    flexDirection: 'row',
  }),
  containerInFront: y({}, module2.StyleSheet.absoluteFillObject, {
    zIndex: 1002,
  }),
  containerOnBack: y({}, module2.StyleSheet.absoluteFillObject),
  main: {
    flex: 1,
    zIndex: 0,
    overflow: 'hidden',
  },
  overlay: y({}, module2.StyleSheet.absoluteFillObject, {
    zIndex: 1e3,
  }),
});
