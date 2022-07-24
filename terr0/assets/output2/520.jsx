import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module366 = require('./366'),
  module521 = require('./521'),
  module580 = require('./580'),
  v = parseInt(module2.Platform.Version, 10),
  L = 'ios' === module2.Platform.OS,
  S = v >= 11 && L,
  w = 125,
  k = (function (t) {
    function f() {
      module356.default(this, f);
      return module358.default(this, module361.default(f).apply(this, arguments));
    }

    module362.default(f, t);
    module357(f, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.onPress,
            l = t.onLongPress,
            s = t.testID,
            u = t.accessibilityLabel,
            c = t.accessibilityRole,
            f = t.accessibilityStates,
            y = module370(t, ['onPress', 'onLongPress', 'testID', 'accessibilityLabel', 'accessibilityRole', 'accessibilityStates']);
          return (
            <module2.TouchableWithoutFeedback
              onPress={n}
              onLongPress={l}
              testID={s}
              hitSlop={{
                left: 15,
                right: 15,
                top: 0,
                bottom: 5,
              }}
              accessibilityLabel={u}
              accessibilityRole={c}
              accessibilityStates={f}
            >
              <module2.View />
            </module2.TouchableWithoutFeedback>
          );
        },
      },
    ]);
    return f;
  })(React.Component),
  _ = (function (t, ...args) {
    function o() {
      var t, l;
      module356.default(this, o);
      (l = module358.default(this, (t = module361.default(o)).call.apply(t, [this].concat(args)))).state = {
        layout: {
          height: 0,
          width: 0,
        },
        keyboard: false,
        visible: new module2.Animated.Value(1),
      };

      l._handleKeyboardShow = function () {
        return l.setState(
          {
            keyboard: true,
          },
          function () {
            return module2.Animated.timing(l.state.visible, {
              toValue: 0,
              duration: 150,
              useNativeDriver: true,
            }).start();
          }
        );
      };

      l._handleKeyboardHide = function () {
        return module2.Animated.timing(l.state.visible, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start(function () {
          l.setState({
            keyboard: false,
          });
        });
      };

      l._handleLayout = function (t) {
        var o = l.state.layout,
          n = t.nativeEvent.layout,
          s = n.height,
          u = n.width;
        if (!(s === o.height && u === o.width))
          l.setState({
            layout: {
              height: s,
              width: u,
            },
          });
      };

      l._renderLabel = function (t) {
        var o = t.route,
          n = t.focused,
          s = l.props,
          u = s.activeTintColor,
          c = s.inactiveTintColor,
          f = s.labelStyle,
          y = s.showLabel,
          p = s.showIcon,
          v = s.allowFontScaling;
        if (false === y) return null;
        var L = l.props.getLabelText({
            route: o,
          }),
          S = n ? u : c;
        return 'string' == typeof L
          ? React.createElement(
              module2.Animated.Text,
              {
                numberOfLines: 1,
                style: [
                  C.label,
                  {
                    color: S,
                  },
                  p && l._shouldUseHorizontalLabels() ? C.labelBeside : C.labelBeneath,
                  f,
                ],
                allowFontScaling: v,
              },
              L
            )
          : 'function' == typeof L
          ? L({
              route: o,
              focused: n,
              tintColor: S,
            })
          : L;
      };

      l._renderIcon = function (t) {
        var o = t.route,
          n = t.focused,
          s = l.props,
          u = s.navigation,
          c = s.activeTintColor,
          h = s.inactiveTintColor,
          f = s.renderIcon,
          p = s.showIcon,
          v = s.showLabel;
        if (false === p) return null;

        var L = l._shouldUseHorizontalLabels(),
          S = n ? 1 : 0,
          w = n ? 0 : 1;

        return React.createElement(module521.default, {
          route: o,
          horizontal: L,
          navigation: u,
          activeOpacity: S,
          inactiveOpacity: w,
          activeTintColor: c,
          inactiveTintColor: h,
          renderIcon: f,
          style: [C.iconWithExplicitHeight, false === v && !L && C.iconWithoutLabel, false !== v && !L && C.iconWithLabel],
        });
      };

      l._shouldUseHorizontalLabels = function () {
        var t = l.props.navigation.state.routes,
          o = l.props,
          n = o.isLandscape,
          s = o.dimensions,
          u = o.adaptive,
          c = o.tabStyle;
        if (!u) return false;

        if (module2.Platform.isPad) {
          var b = w,
            f = module2.StyleSheet.flatten(c);
          if (f) 'number' == typeof f.width ? (b = f.width) : 'number' == typeof f.maxWidth && (b = f.maxWidth);
          return t.length * b <= s.width;
        }

        return n;
      };

      return l;
    }

    module362.default(o, t);
    module357(o, [
      {
        key: 'componentDidMount',
        value: function () {
          if ('ios' === module2.Platform.OS) {
            module2.Keyboard.addListener('keyboardWillShow', this._handleKeyboardShow);
            module2.Keyboard.addListener('keyboardWillHide', this._handleKeyboardHide);
          } else {
            module2.Keyboard.addListener('keyboardDidShow', this._handleKeyboardShow);
            module2.Keyboard.addListener('keyboardDidHide', this._handleKeyboardHide);
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('ios' === module2.Platform.OS) {
            module2.Keyboard.removeListener('keyboardWillShow', this._handleKeyboardShow);
            module2.Keyboard.removeListener('keyboardWillHide', this._handleKeyboardHide);
          } else {
            module2.Keyboard.removeListener('keyboardDidShow', this._handleKeyboardShow);
            module2.Keyboard.removeListener('keyboardDidHide', this._handleKeyboardHide);
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            n = o.navigation,
            l = o.keyboardHidesTabBar,
            s = o.activeBackgroundColor,
            u = o.inactiveBackgroundColor,
            c = o.onTabPress,
            y = o.onTabLongPress,
            p = o.safeAreaInset,
            v = o.style,
            L = o.tabStyle,
            S = n.state.routes,
            w = [C.tabBar, this._shouldUseHorizontalLabels() && !module2.Platform.isPad ? C.tabBarCompact : C.tabBarRegular, v];
          return React.createElement(
            module2.Animated.View,
            {
              style: [
                C.container,
                l
                  ? {
                      transform: [
                        {
                          translateY: this.state.visible.interpolate({
                            inputRange: [0, 1],
                            outputRange: [this.state.layout.height, 0],
                          }),
                        },
                      ],
                      position: this.state.keyboard ? 'absolute' : null,
                    }
                  : null,
              ],
              pointerEvents: l && this.state.keyboard ? 'none' : 'auto',
              onLayout: this._handleLayout,
            },
            React.createElement(
              module366.SafeAreaView,
              {
                style: w,
                forceInset: p,
              },
              S.map(function (o, l) {
                var h = l === n.state.index,
                  f = {
                    route: o,
                    focused: h,
                  },
                  p = t.props.getAccessibilityLabel({
                    route: o,
                  }),
                  v = t.props.getTestID({
                    route: o,
                  }),
                  S = h ? s : u,
                  w =
                    t.props.getButtonComponent({
                      route: o,
                    }) || k;
                return React.createElement(
                  w,
                  {
                    key: o.key,
                    onPress: function () {
                      return c({
                        route: o,
                      });
                    },
                    onLongPress: function () {
                      return y({
                        route: o,
                      });
                    },
                    testID: v,
                    accessibilityLabel: p,
                    style: [
                      C.tab,
                      {
                        backgroundColor: S,
                      },
                      t._shouldUseHorizontalLabels() ? C.tabLandscape : C.tabPortrait,
                      L,
                    ],
                  },
                  t._renderIcon(f),
                  t._renderLabel(f)
                );
              })
            )
          );
        },
      },
    ]);
    return o;
  })(React.Component);

_.defaultProps = {
  keyboardHidesTabBar: true,
  activeTintColor: '#007AFF',
  activeBackgroundColor: 'transparent',
  inactiveTintColor: '#8E8E93',
  inactiveBackgroundColor: 'transparent',
  showLabel: true,
  showIcon: true,
  allowFontScaling: true,
  adaptive: S,
  safeAreaInset: {
    bottom: 'always',
    top: 'never',
  },
};
var C = module2.StyleSheet.create({
    tabBar: {
      backgroundColor: '#fff',
      borderTopWidth: module2.StyleSheet.hairlineWidth,
      borderTopColor: 'rgba(0, 0, 0, .3)',
      flexDirection: 'row',
    },
    container: {
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 8,
    },
    tabBarCompact: {
      height: 29,
    },
    tabBarRegular: {
      height: 49,
    },
    tab: {
      flex: 1,
      alignItems: L ? 'center' : 'stretch',
    },
    tabPortrait: {
      justifyContent: 'flex-end',
      flexDirection: 'column',
    },
    tabLandscape: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
    iconWithoutLabel: {
      flex: 1,
    },
    iconWithLabel: {
      flex: 1,
    },
    iconWithExplicitHeight: {
      height: module2.Platform.isPad ? 49 : 29,
    },
    label: {
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
    labelBeneath: {
      fontSize: 11,
      marginBottom: 1.5,
    },
    labelBeside: {
      fontSize: 12,
      marginLeft: 15,
    },
  }),
  P = module580.default(_);
export default P;
