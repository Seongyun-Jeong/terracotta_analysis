var module404 = require('./404');

var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module583 = require('./583'),
  module522 = require('./522'),
  w = (function (t, ...args) {
    function o() {
      var t, n;
      module356.default(this, o);

      (n = module358.default(this, (t = module361.default(o)).call.apply(t, [this].concat(args))))._renderLabel = function (t) {
        var o = t.route,
          l = t.focused,
          c = t.color,
          u = n.props,
          s = u.showLabel,
          f = u.upperCaseLabel,
          p = u.labelStyle,
          b = u.allowFontScaling;
        if (false === s) return null;
        var h = n.props.getLabelText({
          route: o,
        });
        return 'string' == typeof h
          ? React.createElement(
              module522.default.Text,
              {
                style: [
                  S.label,
                  {
                    color: c,
                  },
                  p,
                ],
                allowFontScaling: b,
              },
              f ? h.toUpperCase() : h
            )
          : 'function' == typeof h
          ? h({
              focused: l,
              tintColor: c,
            })
          : h;
      };

      n._renderIcon = function (t) {
        var o = t.route,
          l = t.focused,
          c = t.color,
          u = n.props,
          s = u.renderIcon,
          f = u.showIcon,
          p = u.iconStyle;
        return false === f
          ? null
          : React.createElement(
              module2.View,
              {
                style: [S.icon, p],
              },
              s({
                route: o,
                focused: l,
                tintColor: c,
              })
            );
      };

      return n;
    }

    module362.default(o, t);
    module357.default(o, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            o = t.navigation,
            c = t.activeTintColor,
            u = t.inactiveTintColor,
            s = module370.default(t, [
              'navigation',
              'activeTintColor',
              'inactiveTintColor',
              'renderIcon',
              'getLabelText',
              'allowFontScaling',
              'showLabel',
              'showIcon',
              'upperCaseLabel',
              'tabBarPosition',
              'navigationState',
              'screenProps',
              'iconStyle',
            ]);
          return React.createElement(
            module583.TabBar,
            module51.default({}, s, {
              activeColor: c,
              inactiveColor: u,
              navigationState: o.state,
              renderIcon: this._renderIcon,
              renderLabel: this._renderLabel,
            })
          );
        },
      },
    ]);
    return o;
  })(React.PureComponent);

exports.default = w;
w.defaultProps = {
  activeTintColor: 'rgba(255, 255, 255, 1)',
  inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true,
  allowFontScaling: true,
};
var S = module2.StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent',
  },
});
