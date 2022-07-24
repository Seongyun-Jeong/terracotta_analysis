var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module392 = require('./392'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module494 = require('./494'),
  module490 = require('./490'),
  T = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);

      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args))))._renderLabel = function (t) {
        var n = t.route,
          l = o.props,
          c = l.position,
          f = l.navigation,
          p = l.activeTintColor,
          s = l.inactiveTintColor,
          v = l.showLabel,
          C = l.upperCaseLabel,
          y = l.labelStyle,
          T = l.allowFontScaling;
        if (false === v) return null;

        var w = f.state.routes,
          I = w.indexOf(n),
          S = I === f.state.index,
          x = [-1].concat(
            module392.default(
              w.map(function (t, n) {
                return n;
              })
            )
          ),
          _ = x.map(function (t) {
            return t === I ? p : s;
          }),
          R = c.interpolate({
            inputRange: x,
            outputRange: _,
          }),
          O = S ? p : s,
          A = o.props.getLabelText({
            route: n,
          });

        return 'string' == typeof A
          ? React.createElement(
              module2.Animated.Text,
              {
                style: [
                  L.label,
                  {
                    color: R,
                  },
                  y,
                ],
                allowFontScaling: T,
              },
              C ? A.toUpperCase() : A
            )
          : 'function' == typeof A
          ? A({
              focused: S,
              tintColor: O,
            })
          : A;
      };

      o._renderIcon = function (t) {
        var n = t.route,
          l = o.props,
          c = l.position,
          f = l.navigation,
          p = l.activeTintColor,
          s = l.inactiveTintColor,
          v = l.renderIcon,
          h = l.showIcon,
          C = l.iconStyle;
        if (false === h) return null;
        var T = f.state.routes.indexOf(n),
          w = [-1].concat(
            module392.default(
              f.state.routes.map(function (t, n) {
                return n;
              })
            )
          ),
          I = c.interpolate({
            inputRange: w,
            outputRange: w.map(function (t) {
              return t === T ? 1 : 0;
            }),
          }),
          S = c.interpolate({
            inputRange: w,
            outputRange: w.map(function (t) {
              return t === T ? 0 : 1;
            }),
          });
        return React.createElement(module490.default, {
          route: n,
          navigation: f,
          activeOpacity: I,
          inactiveOpacity: S,
          activeTintColor: p,
          inactiveTintColor: s,
          renderIcon: v,
          style: [L.icon, C],
        });
      };

      return o;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.navigation,
            u = module370(t, ['navigation', 'renderIcon', 'getLabelText']);
          return React.createElement(
            module494.TabBar,
            module51.default({}, u, {
              navigationState: n.state,
              renderIcon: this._renderIcon,
              renderLabel: this._renderLabel,
            })
          );
        },
      },
    ]);
    return n;
  })(React.PureComponent);

export default T;
T.defaultProps = {
  activeTintColor: '#fff',
  inactiveTintColor: '#fff',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true,
  allowFontScaling: true,
};
var L = module2.StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 8,
    backgroundColor: 'transparent',
  },
});
