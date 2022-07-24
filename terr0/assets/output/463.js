var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module373 = require('./373'),
  module366 = require('./366'),
  module464 = require('./464'),
  module436 = require('./436'),
  module465 = require('./465'),
  module468 = require('./468'),
  module478 = require('./478'),
  module475 = require('./475'),
  module481 = require('./481'),
  module482 = require('./482'),
  module480 = require('./480');

function A(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function I(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      A(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      A(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var O = module2.Dimensions.get('window'),
  C = O.width,
  M = O.height,
  x = !('ios' !== module2.Platform.OS || module2.Platform.isPad || module2.Platform.isTVOS || (812 !== M && 812 !== C && 896 !== M && 896 !== C)),
  T = module2.Easing.inOut(module2.Easing.ease),
  R = ['center', 'left'],
  D = ['fade-in-place', 'uikit'],
  B = ['toggle', 'fade', 'translate'],
  j = true,
  L = function (t) {
    return 'ios' === module2.Platform.OS ? (t && !module2.Platform.isPad ? 32 : x ? 88 : 64) : 56;
  },
  X = (function (t) {
    function o(t) {
      var n;
      module356.default(this, o);
      (n = module358.default(this, module361.default(o).call(this, t)))._immediateIndex = null;

      n._onFloatingHeaderLayout = function (t) {
        var s = t.nativeEvent.layout.height;
        if (s !== n.state.floatingHeaderHeight)
          n.setState({
            floatingHeaderHeight: s,
          });
      };

      n._handlePanGestureStateChange = function (t) {
        var s = t.nativeEvent;

        if (s.oldState === module436.State.ACTIVE) {
          if (1 === n.positionSwitch.__getValue()) return;
          if (n._isMotionVertical()) n._handleReleaseVertical(s);
          else n._handleReleaseHorizontal(s);
        } else s.state === module436.State.ACTIVE && (n.props.onGestureBegin && n.props.onGestureBegin(), n.positionSwitch.setValue(0));
      };

      n._renderCard = function (t) {
        var o,
          l = n.props,
          p = l.transitionProps,
          u = l.shadowEnabled,
          h = l.cardOverlayEnabled,
          c = l.transparentCard,
          v = l.cardStyle,
          _ = n._transitionConfig.screenInterpolator,
          y =
            _ &&
            _(
              I({}, p, {
                shadowEnabled: u,
                cardOverlayEnabled: h,
                position: n.position,
                scene: t,
              })
            ),
          P = t.descriptor.options,
          k = null !== P.header,
          S = n._getHeaderMode();

        if (k && 'float' === S && !P.headerTransparent)
          o = {
            paddingTop: n.state.floatingHeaderHeight,
          };
        return React.default.createElement(
          module465.default,
          module51.default({}, p, {
            key: 'card_' + t.key,
            position: n.position,
            realPosition: p.position,
            animatedStyle: y,
            transparent: c,
            style: [o, v],
            scene: t,
          }),
          n._renderInnerScene(t)
        );
      };

      n.panGestureRef = React.default.createRef();
      n.gestureX = new module2.Animated.Value(0);
      n.gestureY = new module2.Animated.Value(0);
      n.positionSwitch = new module2.Animated.Value(1);
      if (module2.Animated.subtract) n.gestureSwitch = module2.Animated.subtract(1, n.positionSwitch);
      else n.gestureSwitch = module2.Animated.add(1, module2.Animated.multiply(-1, n.positionSwitch));
      n.gestureEvent = module2.Animated.event(
        [
          {
            nativeEvent: {
              translationX: n.gestureX,
              translationY: n.gestureY,
            },
          },
        ],
        {
          useNativeDriver: j,
        }
      );
      n.state = {
        floatingHeaderHeight: L(t.isLandscape),
      };
      return n;
    }

    module362.default(o, t);
    module357.default(o, [
      {
        key: '_renderHeader',
        value: function (t, s) {
          var o = t.descriptor.options.header;
          if (null === o && 'screen' === s) return null;
          if (React.default.isValidElement(o)) return o;

          var l =
              o ||
              function (t) {
                return React.default.createElement(module468.default, t);
              },
            p = this._transitionConfig,
            u = p.headerLeftInterpolator,
            h = p.headerTitleInterpolator,
            c = p.headerRightInterpolator,
            v = p.headerBackgroundInterpolator,
            y = this._getHeaderBackgroundTransitionPreset();

          if (y) v = y;
          var P = this.props,
            k = P.transitionProps,
            V = module370.default(P, ['transitionProps']);
          return React.default.createElement(
            module373.NavigationProvider,
            {
              value: t.descriptor.navigation,
            },
            l(
              I({}, V, {}, k, {
                position: this.position,
                scene: t,
                mode: s,
                transitionPreset: this._getHeaderTransitionPreset(),
                layoutPreset: this._getHeaderLayoutPreset(),
                backTitleVisible: this._getHeaderBackTitleVisible(),
                leftInterpolator: u,
                titleInterpolator: h,
                rightInterpolator: c,
                backgroundInterpolator: v,
              })
            )
          );
        },
      },
      {
        key: '_reset',
        value: function (t, n) {
          if ('ios' === module2.Platform.OS && module480.supportsImprovedSpringAnimation())
            module2.Animated.spring(this.props.transitionProps.position, {
              toValue: t,
              stiffness: 6e3,
              damping: 100,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
              useNativeDriver: j,
            }).start();
          else
            module2.Animated.timing(this.props.transitionProps.position, {
              toValue: t,
              duration: n,
              easing: T,
              useNativeDriver: j,
            }).start();
        },
      },
      {
        key: '_goBack',
        value: function (t, n) {
          var s = this,
            o = this.props.transitionProps,
            l = o.navigation,
            p = o.position,
            u = o.scenes,
            h = (t - 1) ** 0;
          this._immediateIndex = h;

          var c = function () {
            s._immediateIndex = null;
            var t = u.find(function (t) {
              return t.index === h + 1;
            });

            if (t) {
              l.dispatch(
                module373.NavigationActions.back({
                  key: t.route.key,
                  immediate: true,
                })
              );
              l.dispatch(module373.StackActions.completeTransition());
            }
          };

          if ('ios' === module2.Platform.OS && module480.supportsImprovedSpringAnimation())
            module2.Animated.spring(p, {
              toValue: h,
              stiffness: 7e3,
              damping: 300,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
              useNativeDriver: j,
            }).start(c);
          else
            module2.Animated.timing(p, {
              toValue: h,
              duration: n,
              easing: T,
              useNativeDriver: j,
            }).start(c);
        },
      },
      {
        key: '_prepareAnimated',
        value: function () {
          if (this.props !== this._prevProps) {
            this._prevProps = this.props;

            this._prepareGesture();

            this._preparePosition();

            this._prepareTransitionConfig();
          }
        },
      },
      {
        key: 'render',
        value: function () {
          this._prepareAnimated();

          var t = this.props.transitionProps,
            n = t.navigation.state.index,
            o = t.scenes,
            l = this._getHeaderMode(),
            p = null;

          if ('float' === l) {
            var u = t.scene;
            p = React.default.createElement(
              module2.View,
              {
                style: Y.floatingHeader,
                pointerEvents: 'box-none',
                onLayout: this._onFloatingHeaderLayout,
              },
              this._renderHeader(u, l)
            );
          }

          return React.default.createElement(
            module436.PanGestureHandler,
            module51.default({}, this._gestureActivationCriteria(), {
              ref: this.panGestureRef,
              onGestureEvent: this.gestureEvent,
              onHandlerStateChange: this._handlePanGestureStateChange,
              enabled: n > 0 && this._isGestureEnabled(),
            }),
            React.default.createElement(
              module2.Animated.View,
              {
                style: [Y.container, this._transitionConfig.containerStyle],
              },
              React.default.createElement(
                module481.default.Provider,
                {
                  value: this.panGestureRef,
                },
                React.default.createElement(
                  module464.ScreenContainer,
                  {
                    style: Y.scenes,
                  },
                  o.map(this._renderCard)
                ),
                p
              )
            )
          );
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = t.transitionProps.navigation.state,
            s = this.props.transitionProps.navigation.state;
          if (n.index !== s.index) this._maybeCancelGesture();
        },
      },
      {
        key: '_getGestureResponseDistance',
        value: function () {
          var t = this.props.transitionProps.scene.descriptor.options.gestureResponseDistance,
            n = undefined === t ? {} : t;
          return this._isModal() ? n.vertical || 135 : n.horizontal || 50;
        },
      },
      {
        key: '_gestureActivationCriteria',
        value: function () {
          var t = this.props.transitionProps.layout,
            n = this._getGestureResponseDistance(),
            s = this._isMotionInverted();

          if (this._isMotionVertical()) {
            var o = t.height.__getValue();

            return {
              maxDeltaX: 15,
              minOffsetY: s ? -5 : 5,
              hitSlop: s
                ? {
                    top: -o + n,
                  }
                : {
                    bottom: -o + n,
                  },
            };
          }

          var l = -t.width.__getValue() + n;
          return {
            minOffsetX: s ? -5 : 5,
            maxDeltaY: 20,
            hitSlop: s
              ? {
                  left: l,
                }
              : {
                  right: l,
                },
          };
        },
      },
      {
        key: '_isGestureEnabled',
        value: function () {
          var t = this.props.transitionProps.scene.descriptor.options.gesturesEnabled;
          return 'boolean' == typeof t ? t : 'ios' === module2.Platform.OS;
        },
      },
      {
        key: '_isMotionVertical',
        value: function () {
          return this._isModal();
        },
      },
      {
        key: '_isModal',
        value: function () {
          return 'modal' === this.props.mode;
        },
      },
      {
        key: '_isMotionInverted',
        value: function () {
          var t = this.props.transitionProps.scene.descriptor.options.gestureDirection;
          return this._isModal() ? 'inverted' === t : 'string' == typeof t ? 'inverted' === t : module2.I18nManager.isRTL;
        },
      },
      {
        key: '_computeHorizontalGestureValue',
        value: function (t) {
          var n = t.translationX,
            s = this.props.transitionProps,
            o = s.navigation,
            l = s.layout,
            p = o.state.index,
            u = l.width.__getValue(),
            h = p - (this._isMotionInverted() ? -1 * n : n) / u;

          return module482.default(p - 1, h, p);
        },
      },
      {
        key: '_computeVerticalGestureValue',
        value: function (t) {
          var n = t.translationY,
            s = this.props.transitionProps,
            o = s.navigation,
            l = s.layout,
            p = o.state.index,
            u = l.height.__getValue(),
            h = p - (this._isMotionInverted() ? -1 * n : n) / u;

          return module482.default(p - 1, h, p);
        },
      },
      {
        key: '_maybeCancelGesture',
        value: function () {
          this.positionSwitch.setValue(1);
        },
      },
      {
        key: '_prepareGesture',
        value: function () {
          if (!this._isGestureEnabled()) {
            if (1 !== this.positionSwitch.__getValue()) this.positionSwitch.setValue(1);
            return void (this.gesturePosition = undefined);
          }

          if (0 !== this.props.transitionProps.layout.width.__getValue() && 0 !== this.props.transitionProps.layout.height.__getValue())
            this._isMotionVertical() ? this._prepareGestureVertical() : this._prepareGestureHorizontal();
        },
      },
      {
        key: '_prepareGestureHorizontal',
        value: function () {
          var t = this.props.transitionProps.navigation.state.index;
          if (this._isMotionInverted())
            this.gesturePosition = module2.Animated.add(t, module2.Animated.divide(this.gestureX, this.props.transitionProps.layout.width)).interpolate({
              inputRange: [t - 1, t],
              outputRange: [t - 1, t],
              extrapolate: 'clamp',
            });
          else
            this.gesturePosition = module2.Animated.add(
              t,
              module2.Animated.multiply(-1, module2.Animated.divide(this.gestureX, this.props.transitionProps.layout.width))
            ).interpolate({
              inputRange: [t - 1, t],
              outputRange: [t - 1, t],
              extrapolate: 'clamp',
            });
        },
      },
      {
        key: '_prepareGestureVertical',
        value: function () {
          var t = this.props.transitionProps.navigation.state.index;
          if (this._isMotionInverted())
            this.gesturePosition = module2.Animated.add(t, module2.Animated.divide(this.gestureY, this.props.transitionProps.layout.height)).interpolate({
              inputRange: [t - 1, t],
              outputRange: [t - 1, t],
              extrapolate: 'clamp',
            });
          else
            this.gesturePosition = module2.Animated.add(
              t,
              module2.Animated.multiply(-1, module2.Animated.divide(this.gestureY, this.props.transitionProps.layout.height))
            ).interpolate({
              inputRange: [t - 1, t],
              outputRange: [t - 1, t],
              extrapolate: 'clamp',
            });
        },
      },
      {
        key: '_handleReleaseHorizontal',
        value: function (t) {
          var n = this.props.transitionProps,
            s = n.navigation,
            o = n.position,
            l = n.layout,
            p = s.state.index,
            u = null == this._immediateIndex ? p : this._immediateIndex,
            h = l.width.__getValue(),
            c = this._isMotionInverted() ? -1 : 1,
            f = c * t.translationX,
            v = c * t.velocityX,
            _ = h / 500,
            y = Math.abs(v) ** _,
            P = this._isMotionInverted() ? (h - f) / y : f / y,
            k = this._isMotionInverted() ? f / y : (h - f) / y,
            V = this._computeHorizontalGestureValue(t);

          o.setValue(V);
          this.positionSwitch.setValue(1);

          if (v < -50) {
            if (this.props.onGestureCanceled) this.props.onGestureCanceled();
            return void this._reset(u, P);
          } else if (v > 50) {
            if (this.props.onGestureEnd) this.props.onGestureEnd();
            return void this._goBack(u, k);
          } else
            return void (V <= p - 0.5
              ? (this.props.onGestureEnd && this.props.onGestureEnd(), this._goBack(u, k))
              : (this.props.onGestureCanceled && this.props.onGestureCanceled(), this._reset(u, P)));
        },
      },
      {
        key: '_handleReleaseVertical',
        value: function (t) {
          var n = this.props.transitionProps,
            s = n.navigation,
            o = n.position,
            l = n.layout,
            p = s.state.index,
            u = null == this._immediateIndex ? p : this._immediateIndex,
            h = l.height.__getValue(),
            c = this._isMotionInverted(),
            f = c ? -1 : 1,
            v = f * t.translationY,
            _ = f * t.velocityY,
            y = h / 500,
            P = Math.abs(_) ** y,
            k = c ? (h - v) / P : v / P,
            V = c ? v / P : (h - v) / P,
            S = this._computeVerticalGestureValue(t);

          o.setValue(S);
          this.positionSwitch.setValue(1);

          if (_ < -50) {
            if (this.props.onGestureCanceled) this.props.onGestureCanceled();
            return void this._reset(u, k);
          } else if (_ > 50) {
            if (this.props.onGestureEnd) this.props.onGestureEnd();
            return void this._goBack(u, V);
          } else
            return void (S <= p - 0.5
              ? (this.props.onGestureEnd && this.props.onGestureEnd(), this._goBack(u, V))
              : (this.props.onGestureCanceled && this.props.onGestureCanceled(), this._reset(u, k)));
        },
      },
      {
        key: '_getHeaderMode',
        value: function () {
          return this.props.headerMode ? this.props.headerMode : 'ios' !== module2.Platform.OS || 'modal' === this.props.mode ? 'screen' : 'float';
        },
      },
      {
        key: '_getHeaderBackgroundTransitionPreset',
        value: function () {
          var t = this.props.headerBackgroundTransitionPreset;

          if (t && B.includes(t)) {
            if ('fade' === t) return module475.default.forBackgroundWithFade;
            if ('translate' === t) return module475.default.forBackgroundWithTranslation;
            if ('toggle' === t) return module475.default.forBackgroundWithInactiveHidden;
          }

          return null;
        },
      },
      {
        key: '_getHeaderLayoutPreset',
        value: function () {
          var t = this.props.headerLayoutPreset;
          return t && R.includes(t) ? t : 'ios' !== module2.Platform.OS ? 'left' : 'center';
        },
      },
      {
        key: '_getHeaderTransitionPreset',
        value: function () {
          if ('ios' !== module2.Platform.OS || 'screen' === this._getHeaderMode()) return 'fade-in-place';
          var t = this.props.headerTransitionPreset;
          return t && D.includes(t) ? t : 'fade-in-place';
        },
      },
      {
        key: '_getHeaderBackTitleVisible',
        value: function () {
          var t = this.props.headerBackTitleVisible,
            n = !('left' === this._getHeaderLayoutPreset() || 'ios' !== module2.Platform.OS);
          return 'boolean' == typeof t ? t : n;
        },
      },
      {
        key: '_renderInnerScene',
        value: function (t) {
          var n = t.descriptor,
            s = n.navigation,
            o = n.getComponent(),
            l = this.props.screenProps,
            p = this._getHeaderMode();

          return 'screen' === p
            ? React.default.createElement(
                module2.View,
                {
                  style: Y.container,
                },
                React.default.createElement(
                  module2.View,
                  {
                    style: Y.scenes,
                  },
                  React.default.createElement(module373.SceneView, {
                    screenProps: l,
                    navigation: s,
                    component: o,
                  })
                ),
                this._renderHeader(t, p)
              )
            : React.default.createElement(module373.SceneView, {
                screenProps: l,
                navigation: s,
                component: o,
              });
        },
      },
      {
        key: '_prepareTransitionConfig',
        value: function () {
          this._transitionConfig = module478.default.getTransitionConfig(
            this.props.transitionConfig,
            I({}, this.props.transitionProps, {
              position: this.position,
            }),
            this.props.lastTransitionProps,
            this._isModal()
          );
        },
      },
      {
        key: '_preparePosition',
        value: function () {
          if (this.gesturePosition)
            this.position = module2.Animated.add(
              module2.Animated.multiply(this.props.transitionProps.position, this.positionSwitch),
              module2.Animated.multiply(this.gesturePosition, this.gestureSwitch)
            );
          else this.position = this.props.transitionProps.position;
        },
      },
    ]);
    return o;
  })(React.default.Component),
  Y = module2.StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column-reverse',
      overflow: 'hidden',
    },
    scenes: {
      flex: 1,
    },
    floatingHeader: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
    },
  }),
  z = module366.withOrientation(X);

exports.default = z;
