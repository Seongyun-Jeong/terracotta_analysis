var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module392 = require('./392'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module372 = require('./372'),
  module464 = require('./464'),
  module488 = require('./488'),
  module489 = require('./489'),
  module492 = require('./492'),
  _ = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
        loaded: [o.props.navigation.state.index],
      };

      o._renderTabBar = function () {
        var t = o.props,
          n = t.tabBarComponent,
          s = undefined === n ? module489.default : n,
          u = t.tabBarOptions,
          c = t.navigation,
          p = t.screenProps,
          f = t.getLabelText,
          b = t.getAccessibilityLabel,
          y = t.getButtonComponent,
          T = t.getTestID,
          h = t.renderIcon,
          P = t.onTabPress,
          _ = t.onTabLongPress,
          B = o.props.descriptors,
          S = o.props.navigation.state;
        return false === B[S.routes[S.index].key].options.tabBarVisible ? null : <s />;
      };

      o._jumpTo = function (t) {
        var n = o.props,
          l = n.navigation;
        n.onIndexChange(
          l.state.routes.findIndex(function (n) {
            return n.key === t;
          })
        );
      };

      return o;
    }

    module362.default(n, t);
    module357(
      n,
      [
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.navigation,
              o = t.renderScene,
              l = t.lazy,
              s = n.state.routes,
              u = this.state.loaded;
            return React.createElement(
              module2.View,
              {
                style: B.container,
              },
              React.createElement(
                module464.ScreenContainer,
                {
                  style: B.pages,
                },
                s.map(function (t, s) {
                  if (l && !u.includes(s)) return null;
                  var c = n.state.index === s;
                  return React.createElement(
                    module492.default,
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
            var l = t.navigation.state.index;
            return {
              loaded: n.loaded.includes(l) ? n.loaded : [].concat(module392.default(n.loaded), [l]),
            };
          },
        },
      ]
    );
    return n;
  })(React.PureComponent);

_.defaultProps = {
  lazy: true,
};
module372.polyfill(_);
var B = module2.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    pages: {
      flex: 1,
    },
  }),
  S = module488.default(_);
export default S;
