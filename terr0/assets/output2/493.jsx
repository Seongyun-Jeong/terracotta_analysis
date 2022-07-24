var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module392 = require('./392'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module372 = require('./372'),
  module494 = require('./494'),
  module488 = require('./488'),
  module505 = require('./505'),
  module492 = require('./492'),
  I = (function (n, ...args) {
    function t() {
      var n, o;
      module356.default(this, t);
      (o = module358.default(this, (n = module361.default(t)).call.apply(n, [this].concat(args)))).state = {
        index: 0,
        isSwiping: false,
        loaded: [o.props.navigation.state.index],
        transitioningFromIndex: null,
      };

      o._renderIcon = function (n) {
        var t = n.focused,
          s = n.route,
          l = n.tintColor,
          u = o.props.descriptors[s.key].options;
        return u.tabBarIcon
          ? 'function' == typeof u.tabBarIcon
            ? u.tabBarIcon({
                tintColor: l,
                focused: t,
              })
            : u.tabBarIcon
          : null;
      };

      o._renderTabBar = function (n) {
        var t = o.props.navigation.state,
          s = t.routes[t.index],
          u = o.props.descriptors[s.key].options,
          p = null == u.tabBarVisible || u.tabBarVisible,
          c = o.props,
          f = c.tabBarComponent,
          b = undefined === f ? module505.default : f,
          h = c.tabBarPosition,
          x = c.tabBarOptions;
        return null !== b && p ? <b /> : null;
      };

      o._renderPanPager = function (n) {
        return <module494.PagerPan />;
      };

      o._handleAnimationEnd = function () {
        if (o.props.lazy)
          o.setState({
            transitioningFromIndex: null,
            isSwiping: false,
          });
      };

      o._handleSwipeStart = function () {
        var n = o.props,
          t = n.navigation;
        if (n.lazy)
          o.setState({
            isSwiping: true,
            loaded: module392.default(new Set([].concat(module392.default(o.state.loaded), [(t.state.index - 1) ** 0, (t.state.index + 1) ** (t.state.routes.length - 1)]))),
          });
      };

      o._handleIndexChange = function (n) {
        var t = o.props,
          s = t.animationEnabled,
          l = t.navigation,
          u = t.onIndexChange;
        if (t.lazy && s)
          o.setState({
            transitioningFromIndex: l.state.index || 0,
          });
        u(n);
      };

      o._mustBeVisible = function (n) {
        var t = n.index,
          s = n.focused,
          l = o.props,
          u = l.animationEnabled,
          p = l.navigation,
          c = o.state,
          f = c.isSwiping,
          b = c.transitioningFromIndex;
        if (f && (p.state.index === t - 1 || p.state.index === t + 1)) return true;
        return !(!u || b !== t) || s;
      };

      o._renderScene = function (n) {
        var t = n.route,
          s = o.props,
          l = s.renderScene,
          u = s.descriptors,
          p = s.lazy,
          c = s.optimizationsEnabled;

        if (p) {
          var f = o.state.loaded,
            b = o.props.navigation.state.routes.findIndex(function (n) {
              return n.key === t.key;
            }),
            x = u[t.key].navigation,
            y = o._mustBeVisible({
              index: b,
              focused: x.isFocused(),
            });

          if (!f.includes(b) && !y) return <module2.View />;
          if (c)
            return (
              <module492.default isVisible={y}>
                {l({
                  route: t,
                })}
              </module492.default>
            );
        }

        return l({
          route: t,
        });
      };

      return o;
    }

    module362.default(t, n);
    module357(
      t,
      [
        {
          key: 'render',
          value: function () {
            var n = this.props,
              t = n.navigation,
              s = n.animationEnabled,
              u = module370(n, ['navigation', 'animationEnabled', 'renderScene', 'onIndexChange']),
              p = u.renderPager,
              c = this.props.navigation.state,
              f = c.routes[c.index],
              b = this.props.descriptors[f.key].options,
              h = null == b.swipeEnabled ? this.props.swipeEnabled : b.swipeEnabled;
            if ('function' == typeof h) h = h(c);
            if (false === s && false === h) p = this._renderPanPager;
            return <module494.TabView />;
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (n, t) {
            var o = n.navigation.state.index;
            return t.index === o
              ? null
              : {
                  loaded: t.loaded.includes(o) ? t.loaded : [].concat(module392.default(t.loaded), [o]),
                  index: o,
                };
          },
        },
      ]
    );
    return t;
  })(React.PureComponent);

I.defaultProps = {
  initialLayout: module2.Platform.select({
    android: {
      width: 1,
      height: 0,
    },
  }),
  animationEnabled: true,
  lazy: false,
  optimizationsEnabled: false,
};
module372.polyfill(I);

var _ = module488.default(I);

export default _;
