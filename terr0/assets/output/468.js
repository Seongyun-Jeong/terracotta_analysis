var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module366 = require('./366'),
  module469 = require('./469'),
  module470 = require('./470'),
  module474 = require('./474'),
  module475 = require('./475');

function C(t, n) {
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

function x(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      C(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      C(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var _ = 'ios' === module2.Platform.OS ? 44 : 56,
  T = 'ios' === module2.Platform.OS ? 20 : 0,
  L = 'ios' === module2.Platform.OS ? 70 : 56,
  B = 'ios' === module2.Platform.OS ? 20 : 56,
  I = function (t, n, o, l) {
    if ('left' === t) {
      var s = {
        left: B,
        right: B,
      };
      if (!o) s.left = 0;
      if (!l) s.right = 0;
      return s;
    }

    if ('center' === t) {
      var u = {
        left: L,
        right: L,
      };

      if (!(o || l)) {
        u.left = 0;
        u.right = 0;
      }

      return u;
    }
  },
  P = function (t) {
    return 'ios' === module2.Platform.OS ? (t && !module2.Platform.isPad ? 32 : 44) : 56;
  },
  module477 = (function (t, ...args) {
    function w() {
      var t, n;
      module356.default(this, w);
      (n = module358.default(this, (t = module361.default(w)).call.apply(t, [this].concat(args)))).state = {
        widths: {},
      };

      n._renderTitleComponent = function (t) {
        var o = n.props.layoutPreset,
          s = t.scene.descriptor.options,
          u = s.headerTitle;
        if (React.default.isValidElement(u)) return u;

        var c = n._getHeaderTitleString(t.scene),
          f = s.headerTitleStyle,
          p = s.headerTintColor,
          y = s.headerTitleAllowFontScaling,
          k =
            'center' === o
              ? function (o) {
                  n.setState({
                    widths: x({}, n.state.widths, module284.default({}, t.scene.key, o.nativeEvent.layout.width)),
                  });
                }
              : undefined,
          b = u && 'string' != typeof u ? u : module469.default;

        return React.default.createElement(
          b,
          {
            onLayout: k,
            allowFontScaling: !!y,
            style: [
              p
                ? {
                    color: p,
                  }
                : null,
              'center' === o
                ? {
                    textAlign: 'center',
                  }
                : {
                    textAlign: 'left',
                  },
              f,
            ],
          },
          c
        );
      };

      n._renderLeftComponent = function (t) {
        var o = t.scene.descriptor.options;
        if (React.default.isValidElement(o.headerLeft) || null === o.headerLeft) return o.headerLeft;

        if (o.headerLeft || 0 !== t.scene.index) {
          var l = n._getBackButtonTitleString(t.scene),
            s = n._getTruncatedBackButtonTitle(t.scene),
            u = n.state.widths[t.scene.key] ? (n.props.layout.initWidth - n.state.widths[t.scene.key]) / 2 : undefined,
            c = o.headerLeft || module470.default;

          return React.default.createElement(c, {
            onPress: function () {
              requestAnimationFrame(function () {
                t.scene.descriptor.navigation.goBack(t.scene.descriptor.key);
              });
            },
            pressColorAndroid: o.headerPressColorAndroid,
            tintColor: o.headerTintColor,
            backImage: o.headerBackImage,
            title: l,
            truncatedTitle: s,
            backTitleVisible: n.props.backTitleVisible,
            allowFontScaling: o.headerBackAllowFontScaling,
            titleStyle: o.headerBackTitleStyle,
            layoutPreset: n.props.layoutPreset,
            width: u,
            scene: t.scene,
          });
        }
      };

      n._renderModularLeftComponent = function (t, o, l) {
        var s = t.scene.descriptor,
          u = s.options,
          c = s.navigation,
          f = n._getBackButtonTitleString(t.scene),
          p = n._getTruncatedBackButtonTitle(t.scene),
          y = n.state.widths[t.scene.key] ? (n.props.layout.initWidth - n.state.widths[t.scene.key]) / 2 : undefined;

        return React.default.createElement(module474.default, {
          onPress: function () {
            requestAnimationFrame(function () {
              c.goBack(t.scene.descriptor.key);
            });
          },
          ButtonContainerComponent: o,
          LabelContainerComponent: l,
          backTitleVisible: n.props.backTitleVisible,
          pressColorAndroid: u.headerPressColorAndroid,
          tintColor: u.headerTintColor,
          backImage: u.headerBackImage,
          title: f,
          truncatedTitle: p,
          titleStyle: u.headerBackTitleStyle,
          width: y,
        });
      };

      n._renderRightComponent = function (t) {
        return t.scene.descriptor.options.headerRight || null;
      };

      return n;
    }

    module362.default(w, t);
    module357.default(
      w,
      [
        {
          key: '_getHeaderTitleString',
          value: function (t) {
            var n = t.descriptor.options;
            if ('string' == typeof n.headerTitle) return n.headerTitle;
            else {
              if (n.title) n.title;
              return n.title;
            }
          },
        },
        {
          key: '_getLastScene',
          value: function (t) {
            return this.props.scenes.find(function (n) {
              return n.index === t.index - 1;
            });
          },
        },
        {
          key: '_getBackButtonTitleString',
          value: function (t) {
            var n = this._getLastScene(t);

            if (!n) return null;
            var o = n.descriptor.options.headerBackTitle;
            return o || null === o ? o : this._getHeaderTitleString(n);
          },
        },
        {
          key: '_getTruncatedBackButtonTitle',
          value: function (t) {
            var n = this._getLastScene(t);

            return n ? n.descriptor.options.headerTruncatedBackTitle : null;
          },
        },
        {
          key: '_renderLeft',
          value: function (t) {
            var n = t.scene.descriptor.options,
              o = this.props.transitionPreset,
              l = t.style;
            if (n.headerLeftContainerStyle) l = [l, n.headerLeftContainerStyle];
            return 'uikit' !== o || n.headerBackImage || n.headerLeft || null === n.headerLeft
              ? this._renderSubView(
                  x({}, t, {
                    style: l,
                  }),
                  'left',
                  this._renderLeftComponent,
                  this.props.leftInterpolator
                )
              : this._renderModularSubView(
                  x({}, t, {
                    style: l,
                  }),
                  'left',
                  this._renderModularLeftComponent,
                  this.props.leftLabelInterpolator,
                  this.props.leftButtonInterpolator
                );
          },
        },
        {
          key: '_renderTitle',
          value: function (t, n) {
            var o = this.props,
              l = o.layoutPreset,
              s = o.transitionPreset,
              u = [
                {
                  justifyContent: 'center' === l ? 'center' : 'flex-start',
                },
                I(l, 0, n.hasLeftComponent, n.hasRightComponent),
                n.headerTitleContainerStyle,
              ];
            return this._renderSubView(
              x({}, t, {
                style: u,
              }),
              'title',
              this._renderTitleComponent,
              'uikit' === s ? this.props.titleFromLeftInterpolator : this.props.titleInterpolator
            );
          },
        },
        {
          key: '_renderRight',
          value: function (t) {
            var n = t.scene.descriptor.options,
              o = t.style;
            if (n.headerRightContainerStyle) o = [o, n.headerRightContainerStyle];
            return this._renderSubView(
              x({}, t, {
                style: o,
              }),
              'right',
              this._renderRightComponent,
              this.props.rightInterpolator
            );
          },
        },
        {
          key: '_renderBackground',
          value: function (t) {
            var n = t.scene,
              o = n.index,
              l = n.descriptor.options,
              s = this.props.navigation.state.index - o;
            return Math.abs(s) > 2
              ? null
              : this._renderSubView(
                  x({}, t, {
                    style: module2.StyleSheet.absoluteFill,
                  }),
                  'background',
                  function () {
                    return l.headerBackground;
                  },
                  this.props.backgroundInterpolator
                );
          },
        },
        {
          key: '_renderModularSubView',
          value: function (t, n, o, l, s) {
            var u = this,
              c = t.scene,
              f = c.index,
              p = c.isStale,
              k = c.key;

            if (0 !== f) {
              var v = this.props.navigation.state.index - f;
              if (Math.abs(v) > 2) return null;
              var b = o(
                t,
                function (n) {
                  var o = n.children;
                  return React.default.createElement(
                    module2.Animated.View,
                    {
                      style: [s(x({}, u.props, {}, t))],
                    },
                    o
                  );
                },
                function (n) {
                  var o = n.children;
                  return React.default.createElement(
                    module2.Animated.View,
                    {
                      style: [l(x({}, u.props, {}, t))],
                    },
                    o
                  );
                }
              );
              if (null === b) return b;
              var S = 0 !== v || p ? 'none' : 'box-none';
              return React.default.createElement(
                module2.View,
                {
                  key: n + '_' + k,
                  pointerEvents: S,
                  style: [A.item, A[n], t.style],
                },
                b
              );
            }
          },
        },
        {
          key: '_renderSubView',
          value: function (t, n, o, l) {
            var s = t.scene,
              u = s.index,
              c = s.isStale,
              f = s.key,
              p = this.props.navigation.state.index - u;
            if (Math.abs(p) > 2) return null;
            var k = o(t);
            if (null == k) return null;
            var v = 0 !== p || c ? 'none' : 'box-none';
            return React.default.createElement(
              module2.Animated.View,
              {
                pointerEvents: v,
                key: n + '_' + f,
                style: [A.item, A[n], t.style, l(x({}, this.props, {}, t))],
              },
              k
            );
          },
        },
        {
          key: '_renderHeader',
          value: function (t) {
            var n = t.scene.descriptor.options;
            if (null === n.header) return null;

            var l = this._renderLeft(t),
              s = this._renderRight(t),
              u = this._renderTitle(t, {
                hasLeftComponent: !!l,
                hasRightComponent: !!s,
                headerTitleContainerStyle: n.headerTitleContainerStyle,
              }),
              c = this.props.transitionPreset,
              f = {
                style: A.header,
                key: 'scene_' + t.scene.key,
              };

            return n.headerLeft || n.headerBackImage || 'ios' !== module2.Platform.OS || 'uikit' !== c
              ? React.default.createElement(module2.View, f, u, l, s)
              : React.default.createElement(
                  module2.MaskedViewIOS,
                  module51.default({}, f, {
                    maskElement: React.default.createElement(
                      module2.View,
                      {
                        style: A.iconMaskContainer,
                      },
                      React.default.createElement(module2.Image, {
                        source: require('./477'),
                        style: A.iconMask,
                      }),
                      React.default.createElement(module2.View, {
                        style: A.iconMaskFillerRect,
                      })
                    ),
                  }),
                  u,
                  l,
                  s
                );
          },
        },
        {
          key: 'render',
          value: function () {
            var t,
              o,
              l = this,
              s = this.props,
              u = s.mode,
              c = s.scene,
              f = s.isLandscape;

            if ('float' === u) {
              var p = {};
              this.props.scenes.forEach(function (t) {
                p[t.index] = t;
              });
              var v = Object.values(p).map(function (t) {
                return {
                  position: l.props.position,
                  scene: t,
                };
              });
              t = v.map(this._renderHeader, this);
              o = v.map(this._renderBackground, this);
            } else {
              var b = {
                position: new module2.Animated.Value(this.props.scene.index),
                scene: this.props.scene,
              };
              t = this._renderHeader(b);
              o = this._renderBackground(b);
            }

            var S = c.descriptor.options,
              w = S.headerStyle,
              C = undefined === w ? {} : w,
              x = module2.StyleSheet.flatten(C),
              _ = P(f),
              T = module370.default(x, [
                'alignItems',
                'justifyContent',
                'flex',
                'flexDirection',
                'flexGrow',
                'flexShrink',
                'flexBasis',
                'flexWrap',
                'position',
                'padding',
                'paddingHorizontal',
                'paddingRight',
                'paddingLeft',
                'top',
                'right',
                'bottom',
                'left',
              ]),
              L = [
                S.headerTransparent ? A.transparentContainer : A.container,
                {
                  height: _,
                },
                T,
              ],
              B = S.headerForceInset || {
                top: 'always',
                bottom: 'never',
                horizontal: 'always',
              };

            return React.default.createElement(
              module2.Animated.View,
              {
                style: [
                  this.props.layoutInterpolator(this.props),
                  'ios' !== module2.Platform.OS || S.headerTransparent
                    ? null
                    : {
                        backgroundColor: T.backgroundColor || V,
                      },
                ],
              },
              React.default.createElement(
                module366.SafeAreaView,
                {
                  forceInset: B,
                  style: L,
                },
                o,
                React.default.createElement(
                  module2.View,
                  {
                    style: A.flexOne,
                  },
                  t
                )
              )
            );
          },
        },
      ],
      [
        {
          key: 'HEIGHT',
          get: function () {
            return _ + T;
          },
        },
      ]
    );
    return w;
  })(React.default.PureComponent);

module477.defaultProps = {
  layoutInterpolator: module475.default.forLayout,
  leftInterpolator: module475.default.forLeft,
  leftButtonInterpolator: module475.default.forLeftButton,
  leftLabelInterpolator: module475.default.forLeftLabel,
  titleFromLeftInterpolator: module475.default.forCenterFromLeft,
  titleInterpolator: module475.default.forCenter,
  rightInterpolator: module475.default.forRight,
  backgroundInterpolator: module475.default.forBackground,
};
var E = module2.Platform.select({
    android: {
      elevation: 4,
    },
    ios: {
      borderBottomWidth: module2.StyleSheet.hairlineWidth,
      borderBottomColor: '#A7A7AA',
    },
    default: {
      boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)',
    },
  }),
  V = '#FFF',
  A = module2.StyleSheet.create({
    container: x(
      {
        backgroundColor: V,
      },
      E
    ),
    transparentContainer: x(
      {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      E,
      {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
      }
    ),
    header: x({}, module2.StyleSheet.absoluteFillObject, {
      flexDirection: 'row',
    }),
    item: {
      backgroundColor: 'transparent',
    },
    iconMaskContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconMaskFillerRect: {
      flex: 1,
      backgroundColor: '#d8d8d8',
      marginLeft: -5,
    },
    iconMask: {
      height: 23,
      width: 14.5,
      marginLeft: 8.5,
      marginTop: -2.5,
      alignSelf: 'center',
      resizeMode: 'contain',
      transform: [
        {
          scaleX: module2.I18nManager.isRTL ? -1 : 1,
        },
      ],
    },
    title: {
      bottom: 0,
      top: 0,
      position: 'absolute',
      alignItems: 'center',
      flexDirection: 'row',
    },
    left: {
      left: 0,
      bottom: 0,
      top: 0,
      position: 'absolute',
      alignItems: 'center',
      flexDirection: 'row',
    },
    right: {
      right: 0,
      bottom: 0,
      top: 0,
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
    },
    flexOne: {
      flex: 1,
    },
  }),
  j = module366.withOrientation(module477);
exports.default = j;
