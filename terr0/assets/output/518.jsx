var module404 = require('./404');

var module392 = require('./392'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module464 = require('./464'),
  module519 = require('./519'),
  module520 = require('./520'),
  module581 = require('./581'),
  x = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
        loaded: [o.props.navigation.state.index],
      };

      o._getButtonComponent = function (t) {
        var n = t.route,
          s = o.props.descriptors[n.key].options;
        return s.tabBarButtonComponent ? s.tabBarButtonComponent : null;
      };

      o._renderTabBar = function () {
        var t = o.props,
          n = t.tabBarComponent,
          l = undefined === n ? module520.default : n,
          u = t.tabBarOptions,
          c = t.navigation,
          p = t.screenProps,
          f = t.getLabelText,
          v = t.getAccessibilityLabel,
          y = t.getAccessibilityRole,
          T = t.getAccessibilityStates,
          h = t.getTestID,
          x = t.renderIcon,
          P = t.onTabPress,
          _ = t.onTabLongPress,
          C = o.props.descriptors,
          S = o.props.navigation.state;
        return false === C[S.routes[S.index].key].options.tabBarVisible ? null : <l />;
      };

      o._jumpTo = function (t) {
        var n = o.props,
          s = n.navigation;
        n.onIndexChange(
          s.state.routes.findIndex(function (n) {
            return n.key === t;
          })
        );
      };

      return o;
    }

    module362.default(n, t);
    module357.default(
      n,
      [
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.navigation,
              o = t.renderScene,
              s = t.lazy,
              l = n.state.routes,
              u = this.state.loaded;
            return React.createElement(
              module2.View,
              {
                style: P.container,
              },
              React.createElement(
                module464.ScreenContainer,
                {
                  style: P.pages,
                },
                l.map(function (t, l) {
                  if (s && !u.includes(l)) return null;
                  var c = n.state.index === l;
                  return React.createElement(
                    module581.default,
                    {
                      key: t.key,
                      style: module2.StyleSheet.absoluteFill,
                      isVisible: c,
                    },
                    o({
                      route: t,
                    })
                  );
                })
              ),
              this._renderTabBar()
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            var s = t.navigation.state.index;
            return {
              loaded: n.loaded.includes(s) ? n.loaded : [].concat(module392.default(n.loaded), [s]),
            };
          },
        },
      ]
    );
    return n;
  })(React.PureComponent);

x.defaultProps = {
  lazy: true,
};

var P = module2.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    pages: {
      flex: 1,
    },
  }),
  _ = module519.default(x);

exports.default = _;
