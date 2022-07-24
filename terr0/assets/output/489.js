var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module366 = require('./366'),
  module490 = require('./490'),
  module491 = require('./491'),
  y = parseInt(module2.Platform.Version, 10),
  L = 'ios' === module2.Platform.OS,
  C = y >= 11 && L,
  P = 125,
  w = (function (t) {
    function h() {
      module356.default(this, h);
      return module358.default(this, module361.default(h).apply(this, arguments));
    }

    module362.default(h, t);
    module357.default(h, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.onPress,
            l = t.onLongPress,
            s = t.testID,
            u = t.accessibilityLabel,
            c = module370.default(t, ['onPress', 'onLongPress', 'testID', 'accessibilityLabel']);
          return React.default.createElement(
            module2.TouchableWithoutFeedback,
            {
              onPress: n,
              onLongPress: l,
              testID: s,
              hitSlop: {
                left: 15,
                right: 15,
                top: 5,
                bottom: 5,
              },
              accessibilityLabel: u,
            },
            React.default.createElement(module2.View, c)
          );
        },
      },
    ]);
    return h;
  })(React.default.Component),
  I = (function (t, ...args) {
    function o() {
      var t, l;
      module356.default(this, o);

      (l = module358.default(this, (t = module361.default(o)).call.apply(t, [this].concat(args))))._renderLabel = function (t) {
        var o = t.route,
          n = t.focused,
          s = l.props,
          u = s.activeTintColor,
          c = s.inactiveTintColor,
          h = s.labelStyle,
          p = s.showLabel,
          v = s.showIcon,
          y = s.allowFontScaling;
        if (false === p) return null;
        var L = l.props.getLabelText({
            route: o,
          }),
          C = n ? u : c;
        return 'string' == typeof L
          ? React.default.createElement(
              module2.Animated.Text,
              {
                numberOfLines: 1,
                style: [
                  S.label,
                  {
                    color: C,
                  },
                  v && l._shouldUseHorizontalLabels() ? S.labelBeside : S.labelBeneath,
                  h,
                ],
                allowFontScaling: y,
              },
              L
            )
          : 'function' == typeof L
          ? L({
              route: o,
              focused: n,
              tintColor: C,
            })
          : L;
      };

      l._renderIcon = function (t) {
        var o = t.route,
          n = t.focused,
          s = l.props,
          u = s.navigation,
          c = s.activeTintColor,
          b = s.inactiveTintColor,
          h = s.renderIcon,
          v = s.showIcon,
          y = s.showLabel;
        if (false === v) return null;

        var L = l._shouldUseHorizontalLabels(),
          C = n ? 1 : 0,
          P = n ? 0 : 1;

        return React.default.createElement(module490.default, {
          route: o,
          horizontal: L,
          navigation: u,
          activeOpacity: C,
          inactiveOpacity: P,
          activeTintColor: c,
          inactiveTintColor: b,
          renderIcon: h,
          style: [S.iconWithExplicitHeight, false === y && !L && S.iconWithoutLabel, false !== y && !L && S.iconWithLabel],
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
          var f = P,
            h = module2.StyleSheet.flatten(c);
          if (h) 'number' == typeof h.width ? (f = h.width) : 'number' == typeof h.maxWidth && (f = h.maxWidth);
          return t.length * f <= s.width;
        }

        return n;
      };

      return l;
    }

    module362.default(o, t);
    module357.default(o, [
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            n = o.navigation,
            l = o.activeBackgroundColor,
            s = o.inactiveBackgroundColor,
            u = o.onTabPress,
            c = o.onTabLongPress,
            p = o.safeAreaInset,
            v = o.style,
            y = o.tabStyle,
            L = n.state.routes,
            C = [S.tabBar, this._shouldUseHorizontalLabels() && !module2.Platform.isPad ? S.tabBarCompact : S.tabBarRegular, v];
          return React.default.createElement(
            module366.SafeAreaView,
            {
              style: C,
              forceInset: p,
            },
            L.map(function (o, b) {
              var h = b === n.state.index,
                p = {
                  route: o,
                  focused: h,
                },
                v = t.props.getAccessibilityLabel({
                  route: o,
                }),
                L = t.props.getTestID({
                  route: o,
                }),
                C = h ? l : s,
                P =
                  t.props.getButtonComponent({
                    route: o,
                  }) || w;
              return React.default.createElement(
                P,
                {
                  key: o.key,
                  onPress: function () {
                    return u({
                      route: o,
                    });
                  },
                  onLongPress: function () {
                    return c({
                      route: o,
                    });
                  },
                  testID: L,
                  accessibilityLabel: v,
                  style: [
                    S.tab,
                    {
                      backgroundColor: C,
                    },
                    t._shouldUseHorizontalLabels() ? S.tabLandscape : S.tabPortrait,
                    y,
                  ],
                },
                t._renderIcon(p),
                t._renderLabel(p)
              );
            })
          );
        },
      },
    ]);
    return o;
  })(React.default.Component);

I.defaultProps = {
  activeTintColor: '#007AFF',
  activeBackgroundColor: 'transparent',
  inactiveTintColor: '#8E8E93',
  inactiveBackgroundColor: 'transparent',
  showLabel: true,
  showIcon: true,
  allowFontScaling: true,
  adaptive: C,
  safeAreaInset: {
    bottom: 'always',
    top: 'never',
  },
};
var S = module2.StyleSheet.create({
    tabBar: {
      backgroundColor: '#fff',
      borderTopWidth: module2.StyleSheet.hairlineWidth,
      borderTopColor: 'rgba(0, 0, 0, .3)',
      flexDirection: 'row',
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
  B = module491.default(I);
exports.default = B;
