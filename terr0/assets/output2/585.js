var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module522 = require('./522'),
  module586 = require('./586'),
  module589 = require('./589'),
  module588 = require('./588'),
  T = '/Users/osdnk/work/react-native-tab-view/src/TabBar.tsx';

function W(t, n) {
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

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      W(o, true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      W(o).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var C = (function (t, ...args) {
  function n() {
    var t, o;
    module356.default(this, n);
    (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
      layout: {
        width: 0,
        height: 0,
      },
      tabWidths: {},
    };
    o.measuredTabWidths = {};
    o.scrollAmount = new module522.default.Value(0);

    o.getFlattenedTabWidth = function (t) {
      var n = module2.StyleSheet.flatten(t);
      return n ? n.width : undefined;
    };

    o.getComputedTabWidth = function (t, n, o, l, s, u) {
      if ('auto' === u) return s[o[t].key] || 0;

      switch (typeof u) {
        case 'number':
          return u;

        case 'string':
          if (u.endsWith('%')) {
            var c = parseFloat(u);
            if (Number.isFinite(c)) return n.width * (c / 100);
          }
      }

      return l ? (n.width / 5) * 2 : n.width / o.length;
    };

    o.getMemoizedTabWidthGettter = module588.default(function (t, n, l, s, u) {
      return function (c) {
        return o.getComputedTabWidth(c, t, n, l, s, u);
      };
    });

    o.getMaxScrollDistance = function (t, n) {
      return t - n;
    };

    o.getTabBarWidth = function (t, n) {
      var l = n.layout,
        s = n.tabWidths,
        u = t.scrollEnabled,
        c = t.tabStyle,
        h = t.navigationState.routes;
      return h.reduce(function (t, n, f) {
        return t + o.getComputedTabWidth(f, l, h, u, s, o.getFlattenedTabWidth(c));
      }, 0);
    };

    o.normalizeScrollValue = function (t, n, l) {
      var s = n.layout,
        u = o.getTabBarWidth(t, n),
        c = o.getMaxScrollDistance(u, s.width),
        h = (l ** c) ** 0;
      return 'android' === module2.Platform.OS && module2.I18nManager.isRTL ? c - h : h;
    };

    o.getScrollAmount = function (t, n, l) {
      var s = n.layout,
        u = n.tabWidths,
        c = t.scrollEnabled,
        h = t.tabStyle,
        f = t.navigationState.routes,
        b =
          Array.from({
            length: l + 1,
          }).reduce(function (t, n, b) {
            var y = o.getComputedTabWidth(b, s, f, c, u, o.getFlattenedTabWidth(h));
            return t + (l === b ? y / 2 : y);
          }, 0) -
          s.width / 2;
      return o.normalizeScrollValue(t, n, b);
    };

    o.resetScroll = function (t) {
      if (o.props.scrollEnabled && o.scrollView)
        o.scrollView.scrollTo({
          x: o.getScrollAmount(o.props, o.state, t),
          animated: true,
        });
    };

    o.handleLayout = function (t) {
      var n = t.nativeEvent.layout,
        l = n.height,
        s = n.width;
      if (!(o.state.layout.width === s && o.state.layout.height === l))
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return o.setState({
              layout: {
                height: l,
                width: s,
              },
            });
          });
        });
    };

    o.getTranslateX = module588.default(function (t, n) {
      return module522.default.multiply('android' === module2.Platform.OS && module2.I18nManager.isRTL ? module522.default.sub(n, t) : t, module2.I18nManager.isRTL ? 1 : -1);
    });
    return o;
  }

  module362.default(n, t);
  module357(n, [
    {
      key: 'componentDidUpdate',
      value: function (t, n) {
        var o = this.props.navigationState,
          l = this.state,
          s = l.layout,
          u = l.tabWidths;

        if (t.navigationState.routes.length !== o.routes.length || t.navigationState.index !== o.index || n.layout.width !== s.width || n.tabWidths !== u) {
          if (
            !(
              'auto' !== this.getFlattenedTabWidth(this.props.tabStyle) ||
              (s.width &&
                o.routes.every(function (t) {
                  return 'number' == typeof u[t.key];
                }))
            )
          )
            return;
          this.resetScroll(o.index);
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props,
          o = n.position,
          l = n.navigationState,
          s = n.jumpTo,
          u = n.scrollEnabled,
          c = n.bounces,
          h = n.getAccessibilityLabel,
          f = n.getAccessible,
          w = n.getLabelText,
          S = n.getTestID,
          W = n.renderBadge,
          C = n.renderIcon,
          L = n.renderLabel,
          E = n.activeColor,
          x = n.inactiveColor,
          A = n.pressColor,
          _ = n.pressOpacity,
          k = n.onTabPress,
          j = n.onTabLongPress,
          D = n.tabStyle,
          I = n.labelStyle,
          N = n.indicatorStyle,
          M = n.contentContainerStyle,
          F = n.style,
          V = n.indicatorContainerStyle,
          B = this.state,
          z = B.layout,
          R = B.tabWidths,
          U = l.routes,
          X = 'auto' === this.getFlattenedTabWidth(D),
          q = this.getTabBarWidth(this.props, this.state),
          G = 40 * U.length + '%',
          H = this.getTranslateX(this.scrollAmount, this.getMaxScrollDistance(q, z.width));
        return React.createElement(
          module522.default.View,
          {
            onLayout: this.handleLayout,
            style: [P.tabBar, F],
            __source: {
              fileName: T,
              lineNumber: 338,
            },
          },
          React.createElement(
            module522.default.View,
            {
              pointerEvents: 'none',
              style: [
                P.indicatorContainer,
                u
                  ? {
                      transform: [
                        {
                          translateX: H,
                        },
                      ],
                    }
                  : null,
                q
                  ? {
                      width: q,
                    }
                  : u
                  ? {
                      width: G,
                    }
                  : null,
                V,
              ],
              __source: {
                fileName: T,
                lineNumber: 342,
              },
            },
            this.props.renderIndicator({
              position: o,
              layout: z,
              navigationState: l,
              jumpTo: s,
              width: X ? 'auto' : 100 / U.length + '%',
              style: N,
              getTabWidth: this.getMemoizedTabWidthGettter(z, U, u, R, this.getFlattenedTabWidth(D)),
            })
          ),
          React.createElement(
            module2.View,
            {
              style: P.scroll,
              __source: {
                fileName: T,
                lineNumber: 371,
              },
            },
            React.createElement(
              module522.default.ScrollView,
              {
                horizontal: true,
                keyboardShouldPersistTaps: 'handled',
                scrollEnabled: u,
                bounces: c,
                alwaysBounceHorizontal: false,
                scrollsToTop: false,
                showsHorizontalScrollIndicator: false,
                automaticallyAdjustContentInsets: false,
                overScrollMode: 'never',
                contentContainerStyle: [
                  P.tabContent,
                  u
                    ? {
                        width: q || G,
                      }
                    : P.container,
                  M,
                ],
                scrollEventThrottle: 16,
                onScroll: module522.default.event([
                  {
                    nativeEvent: {
                      contentOffset: {
                        x: this.scrollAmount,
                      },
                    },
                  },
                ]),
                ref: function (n) {
                  t.scrollView = n && n.getNode();
                },
                __source: {
                  fileName: T,
                  lineNumber: 372,
                },
              },
              U.map(function (n) {
                return React.createElement(module586.default, {
                  onLayout: X
                    ? function (o) {
                        t.measuredTabWidths[n.key] = o.nativeEvent.layout.width;
                        if (
                          U.every(function (n) {
                            return 'number' == typeof t.measuredTabWidths[n.key];
                          })
                        )
                          t.setState({
                            tabWidths: O({}, t.measuredTabWidths),
                          });
                      }
                    : undefined,
                  key: n.key,
                  position: o,
                  route: n,
                  navigationState: l,
                  getAccessibilityLabel: h,
                  getAccessible: f,
                  getLabelText: w,
                  getTestID: S,
                  renderBadge: W,
                  renderIcon: C,
                  renderLabel: L,
                  activeColor: E,
                  inactiveColor: x,
                  pressColor: A,
                  pressOpacity: _,
                  onPress: function () {
                    var o = {
                      route: n,
                      defaultPrevented: false,
                      preventDefault: function () {
                        o.defaultPrevented = true;
                      },
                    };
                    if (k) k(o);
                    if (!o.defaultPrevented) t.props.jumpTo(n.key);
                  },
                  onLongPress: function () {
                    return (
                      j &&
                      j({
                        route: n,
                      })
                    );
                  },
                  labelStyle: I,
                  style: D,
                  __source: {
                    fileName: T,
                    lineNumber: 403,
                  },
                });
              })
            )
          )
        );
      },
    },
  ]);
  return n;
})(React.Component);

export default C;
C.defaultProps = {
  getLabelText: function (t) {
    var n = t.route;
    return 'string' == typeof n.title ? n.title.toUpperCase() : n.title;
  },
  getAccessible: function (t) {
    var n = t.route;
    return undefined === n.accessible || n.accessible;
  },
  getAccessibilityLabel: function (t) {
    var n = t.route;
    return 'string' == typeof n.accessibilityLabel ? n.accessibilityLabel : 'string' == typeof n.title ? n.title : undefined;
  },
  getTestID: function (t) {
    return t.route.testID;
  },
  renderIndicator: function (t) {
    return React.createElement(
      module589.default,
      module51.default({}, t, {
        __source: {
          fileName: T,
          lineNumber: 84,
        },
      })
    );
  },
};
var P = module2.StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    overflow: 'scroll',
  },
  tabBar: {
    backgroundColor: '#2196f3',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: module2.StyleSheet.hairlineWidth,
    shadowOffset: {
      height: module2.StyleSheet.hairlineWidth,
      width: 0,
    },
    zIndex: 1,
  },
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
