var module404 = require('./404');

var module284 = require('./284'),
  module392 = require('./392'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  PropTypes = require('prop-types'),
  module2 = require('./2'),
  module497 = require('./497'),
  module498 = require('./498');

function S(t, n) {
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

function w(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(l), true).forEach(function (n) {
        module284.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      S(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var T = Boolean(module2.NativeModules.NativeAnimatedModule),
  P = (function (t) {
    function n(t) {
      var o;
      module356.default(this, n);
      (o = module358.default(this, module361.default(n).call(this, t)))._isIntial = true;
      o._isManualScroll = false;
      o._isMomentumScroll = false;

      o._startTrackingPosition = function () {
        o._offsetXListener = o.props.offsetX.addListener(function (t) {
          var n = t.value;
          o._lastOffsetX = n;

          o._handlePosition();
        });
        o._panXListener = o.props.panX.addListener(function (t) {
          var n = t.value;
          o._lastPanX = n;

          o._handlePosition();
        });
      };

      o._stopTrackingPosition = function () {
        o.props.offsetX.removeListener(o._offsetXListener);
        o.props.panX.removeListener(o._panXListener);
      };

      o._handlePosition = function () {
        var t = o.props,
          n = t.navigationState,
          l = t.layout;

        if (0 !== l.width) {
          var s = (('number' == typeof o._lastPanX ? o._lastPanX : 0) + ('number' == typeof o._lastOffsetX ? o._lastOffsetX : -n.index * l.width)) / -(l.width || 0.001);

          o._adjustScroll(s);
        }
      };

      o._renderLabel = function (t) {
        if (undefined !== o.props.renderLabel) return o.props.renderLabel(t);
        var n = o.props.getLabelText(t);
        return 'string' != typeof n
          ? null
          : React.createElement(
              module2.Animated.Text,
              {
                style: [O.tabLabel, o.props.labelStyle],
              },
              n
            );
      };

      o._renderIndicator = function (t) {
        if (undefined !== o.props.renderIndicator) return o.props.renderIndicator(t);
        var n = t.width,
          l = t.position,
          s = t.navigationState,
          c = module2.Animated.multiply(
            module2.Animated.multiply(
              l.interpolate({
                inputRange: [-1, s.routes.length],
                outputRange: [-1, s.routes.length],
                extrapolate: 'clamp',
              }),
              n
            ),
            module2.I18nManager.isRTL ? -1 : 1
          );
        return React.createElement(module2.Animated.View, {
          style: [
            O.indicator,
            {
              width: n,
              transform: [
                {
                  translateX: c,
                },
              ],
            },
            o.props.indicatorStyle,
          ],
        });
      };

      o._getTabWidth = function (t) {
        var n = t.layout,
          o = t.navigationState,
          l = t.tabStyle,
          s = module2.StyleSheet.flatten(l);
        if (s)
          switch (typeof s.width) {
            case 'number':
              return s.width;

            case 'string':
              if (s.width.endsWith('%')) {
                var c = parseFloat(s.width);
                if (Number.isFinite(c)) return n.width * (c / 100);
              }
          }
        return t.scrollEnabled ? (n.width / 5) * 2 : n.width / o.routes.length;
      };

      o._handleTabPress = function (t) {
        var n = t.route;
        o._pendingIndex = o.props.navigationState.routes.indexOf(n);
        if (o.props.onTabPress)
          o.props.onTabPress({
            route: n,
          });
        o.props.jumpTo(n.key);
      };

      o._handleTabLongPress = function (t) {
        var n = t.route;
        if (o.props.onTabLongPress)
          o.props.onTabLongPress({
            route: n,
          });
      };

      o._normalizeScrollValue = function (t, n) {
        var l = t.layout,
          s = t.navigationState,
          c = o._getTabWidth(t),
          u = (c * s.routes.length) ** l.width - l.width;

        return (n ** u) ** 0;
      };

      o._getScrollAmount = function (t, n) {
        var l = t.layout,
          s = o._getTabWidth(t) * (n + 0.5) - l.width / 2;
        return o._normalizeScrollValue(t, s);
      };

      o._adjustScroll = function (t) {
        if (o.props.scrollEnabled) {
          globals.cancelAnimationFrame(o._scrollResetCallback);
          if (o._scrollView)
            o._scrollView.scrollTo({
              x: o._normalizeScrollValue(o.props, o._getScrollAmount(o.props, t)),
              animated: !o._isIntial,
            });
          o._isIntial = false;
        }
      };

      o._resetScroll = function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];

        if (o.props.scrollEnabled) {
          globals.cancelAnimationFrame(o._scrollResetCallback);
          o._scrollResetCallback = globals.requestAnimationFrame(function () {
            if (o._scrollView)
              o._scrollView.scrollTo({
                x: o._getScrollAmount(o.props, t),
                animated: n,
              });
          });
        }
      };

      o._handleBeginDrag = function () {
        o._isManualScroll = true;
        o._isMomentumScroll = false;
      };

      o._handleEndDrag = function () {
        globals.requestAnimationFrame(function () {
          if (!o._isMomentumScroll) o._isManualScroll = false;
        });
      };

      o._handleMomentumScrollBegin = function () {
        o._isMomentumScroll = true;
      };

      o._handleMomentumScrollEnd = function () {
        o._isMomentumScroll = false;
        o._isManualScroll = false;
      };

      var l = 1;
      if (o.props.scrollEnabled) o._getTabWidth(o.props) || (l = 0);
      var c =
        o.props.scrollEnabled && o.props.layout.width
          ? {
              x: o._getScrollAmount(o.props, o.props.navigationState.index),
              y: 0,
            }
          : undefined;
      o.state = {
        visibility: new module2.Animated.Value(l),
        scrollAmount: new module2.Animated.Value(0),
        initialOffset: c,
      };
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.scrollEnabled) this._startTrackingPosition();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this._getTabWidth(t),
            o = this._getTabWidth(this.props),
            l = 'number' == typeof this._pendingIndex ? this._pendingIndex : this.props.navigationState.index;

          this._pendingIndex = null;
          if (n !== o && o) this.state.visibility.setValue(1);
          if (t.navigationState.routes.length !== this.props.navigationState.routes.length || t.layout.width !== this.props.layout.width)
            this._resetScroll(this.props.navigationState.index, false);
          else if (t.navigationState.index !== l) this._resetScroll(this.props.navigationState.index);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._stopTrackingPosition();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.position,
            s = n.navigationState,
            c = n.scrollEnabled,
            u = n.bounces,
            p = s.routes,
            f = this._getTabWidth(this.props),
            h = f * p.length,
            _ = [-1].concat(
              module392.default(
                p.map(function (t, n) {
                  return n;
                })
              )
            ),
            S = module2.Animated.multiply(this.state.scrollAmount, -1);

          return React.createElement(
            module2.Animated.View,
            {
              style: [O.tabBar, this.props.style],
            },
            React.createElement(
              module2.Animated.View,
              {
                pointerEvents: 'none',
                style: [
                  O.indicatorContainer,
                  c
                    ? {
                        width: h,
                        transform: [
                          {
                            translateX: S,
                          },
                        ],
                      }
                    : null,
                ],
              },
              this._renderIndicator(
                w({}, this.props, {
                  width: f,
                })
              )
            ),
            React.createElement(
              module2.View,
              {
                style: O.scroll,
              },
              React.createElement(
                module2.Animated.ScrollView,
                {
                  horizontal: true,
                  keyboardShouldPersistTaps: 'handled',
                  scrollEnabled: c,
                  bounces: u,
                  alwaysBounceHorizontal: false,
                  scrollsToTop: false,
                  showsHorizontalScrollIndicator: false,
                  automaticallyAdjustContentInsets: false,
                  overScrollMode: 'never',
                  contentContainerStyle: [O.tabContent, c ? null : O.container],
                  scrollEventThrottle: 1,
                  onScroll: module2.Animated.event(
                    [
                      {
                        nativeEvent: {
                          contentOffset: {
                            x: this.state.scrollAmount,
                          },
                        },
                      },
                    ],
                    {
                      useNativeDriver: T,
                    }
                  ),
                  onScrollBeginDrag: this._handleBeginDrag,
                  onScrollEndDrag: this._handleEndDrag,
                  onMomentumScrollBegin: this._handleMomentumScrollBegin,
                  onMomentumScrollEnd: this._handleMomentumScrollEnd,
                  contentOffset: this.state.initialOffset,
                  ref: function (n) {
                    return (t._scrollView = n && n.getNode());
                  },
                },
                p.map(function (n, l) {
                  var u = _.map(function (t) {
                      return t === l ? 1 : 0.7;
                    }),
                    p = module2.Animated.multiply(
                      t.state.visibility,
                      o.interpolate({
                        inputRange: _,
                        outputRange: u,
                      })
                    ),
                    h = t._renderLabel({
                      route: n,
                    }),
                    S = t.props.renderIcon
                      ? t.props.renderIcon({
                          route: n,
                        })
                      : null,
                    w = t.props.renderBadge
                      ? t.props.renderBadge({
                          route: n,
                        })
                      : null,
                    T = {};

                  T.opacity = p;
                  if (S) h ? (T.paddingTop = 8) : (T.padding = 12);
                  var P = module2.StyleSheet.flatten(t.props.tabStyle),
                    x = (P && undefined !== P.width) || true === c,
                    A = {};
                  if (x) T.width = f;
                  if (P && 'number' == typeof P.flex) A.flex = P.flex;
                  else if (!x) A.flex = 1;
                  var E = t.props.getAccessibilityLabel({
                    route: n,
                  });
                  E =
                    undefined !== E
                      ? E
                      : t.props.getLabelText({
                          route: n,
                        });
                  var L = l === s.index;
                  return React.createElement(
                    module497.default,
                    {
                      borderless: true,
                      key: n.key,
                      testID: t.props.getTestID({
                        route: n,
                      }),
                      accessible: t.props.getAccessible({
                        route: n,
                      }),
                      accessibilityLabel: E,
                      accessibilityTraits: L ? ['button', 'selected'] : 'button',
                      accessibilityComponentType: 'button',
                      accessibilityRole: 'button',
                      accessibilityStates: L ? ['selected'] : [],
                      pressColor: t.props.pressColor,
                      pressOpacity: t.props.pressOpacity,
                      delayPressIn: 0,
                      onPress: function () {
                        return t._handleTabPress({
                          route: n,
                        });
                      },
                      onLongPress: function () {
                        return t._handleTabLongPress({
                          route: n,
                        });
                      },
                      style: A,
                    },
                    React.createElement(
                      module2.View,
                      {
                        pointerEvents: 'none',
                        style: O.container,
                      },
                      React.createElement(
                        module2.Animated.View,
                        {
                          style: [O.tabItem, T, P, O.container],
                        },
                        S,
                        h
                      ),
                      w
                        ? React.createElement(
                            module2.Animated.View,
                            {
                              style: [
                                O.badge,
                                {
                                  opacity: t.state.visibility,
                                },
                              ],
                            },
                            w
                          )
                        : null
                    )
                  );
                })
              )
            )
          );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = P;
P.propTypes = w({}, module498.SceneRendererPropType, {
  scrollEnabled: PropTypes.default.bool,
  bounces: PropTypes.default.bool,
  pressColor: module497.default.propTypes.pressColor,
  pressOpacity: module497.default.propTypes.pressOpacity,
  getLabelText: PropTypes.default.func,
  getAccessible: PropTypes.default.func,
  getAccessibilityLabel: PropTypes.default.func,
  getTestID: PropTypes.default.func,
  renderIcon: PropTypes.default.func,
  renderLabel: PropTypes.default.func,
  renderIndicator: PropTypes.default.func,
  onTabPress: PropTypes.default.func,
  onTabLongPress: PropTypes.default.func,
  labelStyle: PropTypes.default.any,
  style: PropTypes.default.any,
});
P.defaultProps = {
  getLabelText: function (t) {
    var n = t.route;
    return 'string' == typeof n.title ? n.title.toUpperCase() : n.title;
  },
  getAccessible: function (t) {
    var n = t.route;
    return undefined === n.accessible || n.accessible;
  },
  getAccessibilityLabel: function (t) {
    return t.route.accessibilityLabel;
  },
  getTestID: function (t) {
    return t.route.testID;
  },
};
var O = module2.StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    overflow: 'web' === module2.Platform.OS ? 'auto' : 'scroll',
  },
  tabBar: {
    backgroundColor: '#2196f3',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: module2.StyleSheet.hairlineWidth,
    shadowOffset: {
      height: module2.StyleSheet.hairlineWidth,
    },
    zIndex: 'android' === module2.Platform.OS ? 0 : 1,
  },
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  tabLabel: {
    backgroundColor: 'transparent',
    color: 'white',
    margin: 8,
  },
  tabItem: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2,
  },
});
