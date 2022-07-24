var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module373 = require('./373'),
  module512 = require('./512'),
  y = (function (t, ...args) {
    function y() {
      var t, o;
      module356.default(this, y);

      (o = module358.default(this, (t = module361.default(y)).call.apply(t, [this].concat(args))))._getScreenOptions = function (t) {
        var n = o.props.descriptors[t];
        module512.default(n.options, 'Cannot access screen descriptor options from drawer sidebar');
        return n.options;
      };

      o._getLabel = function (t) {
        var n = t.focused,
          s = t.tintColor,
          u = t.route,
          p = o._getScreenOptions(u.key),
          c = p.drawerLabel,
          l = p.title;

        if (c)
          return 'function' == typeof c
            ? c({
                tintColor: s,
                focused: n,
              })
            : c;
        else return 'string' == typeof l ? l : u.routeName;
      };

      o._renderIcon = function (t) {
        var n = t.focused,
          s = t.tintColor,
          u = t.route,
          p = o._getScreenOptions(u.key).drawerIcon;

        return p
          ? 'function' == typeof p
            ? p({
                tintColor: s,
                focused: n,
              })
            : p
          : null;
      };

      o._onItemPress = function (t) {
        var n = t.route;
        if (t.focused) o.props.navigation.closeDrawer();
        else
          o.props.navigation.dispatch(
            module373.NavigationActions.navigate({
              routeName: n.routeName,
            })
          );
      };

      return o;
    }

    module362.default(y, t);
    module357.default(y, [
      {
        key: 'render',
        value: function () {
          var t = this.props.contentComponent;
          if (!t) return null;
          var n = this.props.navigation.state;
          module512.default('number' == typeof n.index, 'should be set');
          return React.default.createElement(
            module2.View,
            {
              style: [_.container, this.props.style],
            },
            React.default.createElement(
              t,
              module51.default({}, this.props.contentOptions, {
                navigation: this.props.navigation,
                descriptors: this.props.descriptors,
                drawerOpenProgress: this.props.drawerOpenProgress,
                items: n.routes,
                activeItemKey: n.routes[n.index] ? n.routes[n.index].key : null,
                screenProps: this.props.screenProps,
                getLabel: this._getLabel,
                renderIcon: this._renderIcon,
                onItemPress: this._onItemPress,
                drawerPosition: this.props.drawerPosition,
              })
            )
          );
        },
      },
    ]);
    return y;
  })(React.default.PureComponent);

exports.default = y;

var _ = module2.StyleSheet.create({
  container: {
    flex: 1,
  },
});
