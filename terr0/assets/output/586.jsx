var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module587 = require('./587'),
  module522 = require('./522'),
  module588 = require('./588'),
  _ = '/Users/osdnk/work/react-native-tab-view/src/TabBarItem.tsx',
  N = (function (t, ...args) {
    function l() {
      var t, o;
      module356.default(this, l);
      (o = module358.default(this, (t = module361.default(l)).call.apply(t, [this].concat(args)))).getActiveOpacity = module588.default(function (t, l, n) {
        if (l.length > 1) {
          var o = l.map(function (t, l) {
            return l;
          });
          return module522.default.interpolate(t, {
            inputRange: o,
            outputRange: o.map(function (t) {
              return t === n ? 1 : 0;
            }),
          });
        }

        return 1;
      });
      o.getInactiveOpacity = module588.default(function (t, l, n) {
        if (l.length > 1) {
          var o = l.map(function (t, l) {
            return l;
          });
          return module522.default.interpolate(t, {
            inputRange: o,
            outputRange: o.map(function (t) {
              return t === n ? 0 : 1;
            }),
          });
        }

        return 0;
      });
      return o;
    }

    module362.default(l, t);
    module357.default(l, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.route,
            n = t.position,
            o = t.navigationState,
            u = t.renderLabel,
            s = t.renderIcon,
            c = t.renderBadge,
            v = t.getLabelText,
            N = t.getTestID,
            w = t.getAccessibilityLabel,
            E = t.getAccessible,
            S = t.activeColor,
            C = undefined === S ? 'rgba(255, 255, 255, 1)' : S,
            I = t.inactiveColor,
            L = undefined === I ? 'rgba(255, 255, 255, 0.7)' : I,
            O = t.pressColor,
            V = t.pressOpacity,
            x = t.labelStyle,
            T = t.style,
            P = t.onLayout,
            A = t.onPress,
            R = t.onLongPress,
            k = o.routes.indexOf(l),
            j = o.index === k,
            B = this.getActiveOpacity(n, o.routes, k),
            D = this.getInactiveOpacity(n, o.routes, k),
            F = null,
            H = null;

          if (s) {
            var M = s({
                route: l,
                focused: true,
                color: C,
              }),
              U = s({
                route: l,
                focused: false,
                color: L,
              });
            if (null != U && null != M)
              F = (
                <module2.View
                  style={h.icon}
                  __source={{
                    fileName: _,
                    lineNumber: 133,
                  }}
                >
                  {React.createElement(
                    module522.default.View,
                    {
                      style: {
                        opacity: D,
                      },
                      __source: {
                        fileName: _,
                        lineNumber: 134,
                      },
                    },
                    U
                  )}
                  {React.createElement(
                    module522.default.View,
                    {
                      style: [
                        module2.StyleSheet.absoluteFill,
                        {
                          opacity: B,
                        },
                      ],
                      __source: {
                        fileName: _,
                        lineNumber: 137,
                      },
                    },
                    M
                  )}
                </module2.View>
              );
          }

          var q =
            undefined !== u
              ? u
              : function (t) {
                  var l = t.route,
                    n = t.color,
                    o = v({
                      route: l,
                    });
                  return 'string' == typeof o
                    ? React.createElement(
                        module522.default.Text,
                        {
                          style: [
                            h.label,
                            F
                              ? {
                                  marginTop: 0,
                                }
                              : null,
                            {
                              color: n,
                            },
                            x,
                          ],
                          __source: {
                            fileName: _,
                            lineNumber: 155,
                          },
                        },
                        o
                      )
                    : o;
                };

          if (q) {
            var z = q({
                route: l,
                focused: true,
                color: C,
              }),
              G = q({
                route: l,
                focused: false,
                color: L,
              });
            H = React.createElement(
              module2.View,
              {
                __source: {
                  fileName: _,
                  lineNumber: 184,
                },
              },
              React.createElement(
                module522.default.View,
                {
                  style: {
                    opacity: D,
                  },
                  __source: {
                    fileName: _,
                    lineNumber: 185,
                  },
                },
                G
              ),
              React.createElement(
                module522.default.View,
                {
                  style: [
                    module2.StyleSheet.absoluteFill,
                    {
                      opacity: B,
                    },
                  ],
                  __source: {
                    fileName: _,
                    lineNumber: 188,
                  },
                },
                z
              )
            );
          }

          var J = module2.StyleSheet.flatten(T),
            K =
              J && undefined !== J.width
                ? null
                : {
                    flex: 1,
                  },
            Q = {
              route: l,
            },
            W = w(Q);
          W = undefined !== W ? W : v(Q);
          var X = c ? c(Q) : null;
          return React.createElement(
            module587.default,
            {
              borderless: true,
              testID: N(Q),
              accessible: E(Q),
              accessibilityLabel: W,
              accessibilityTraits: j ? ['button', 'selected'] : 'button',
              accessibilityComponentType: 'button',
              accessibilityRole: 'button',
              accessibilityStates: j ? ['selected'] : [],
              pressColor: O,
              pressOpacity: V,
              delayPressIn: 0,
              onLayout: P,
              onPress: A,
              onLongPress: R,
              style: K,
              __source: {
                fileName: _,
                lineNumber: 213,
              },
            },
            React.createElement(
              module2.View,
              {
                pointerEvents: 'none',
                style: [h.item, J],
                __source: {
                  fileName: _,
                  lineNumber: 230,
                },
              },
              F,
              H,
              null != X
                ? React.createElement(
                    module2.View,
                    {
                      style: h.badge,
                      __source: {
                        fileName: _,
                        lineNumber: 233,
                      },
                    },
                    X
                  )
                : null
            )
          );
        },
      },
    ]);
    return l;
  })(React.Component);

exports.default = N;
var h = module2.StyleSheet.create({
  label: {
    margin: 4,
    backgroundColor: 'transparent',
  },
  icon: {
    margin: 2,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    minHeight: 48,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
