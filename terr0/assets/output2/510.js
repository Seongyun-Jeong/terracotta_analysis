import React from 'react';
import module2 from './2';

var module392 = require('./392'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module373 = require('./373'),
  module453 = require('./453'),
  module464 = require('./464'),
  module509 = require('./509'),
  module511 = require('./511'),
  module513 = require('./513'),
  module514 = require('./514'),
  R = (function (t, ...args) {
    function R() {
      var t, n;
      module356.default(this, R);
      (n = module358.default(this, (t = module361.default(R)).call.apply(t, [this].concat(args)))).state = {
        loaded: [n.props.navigation.state.index],
        drawerWidth: 'function' == typeof n.props.navigationConfig.drawerWidth ? n.props.navigationConfig.drawerWidth() : n.props.navigationConfig.drawerWidth,
      };
      n.drawerGestureRef = React.createRef();

      n._handleDrawerStateChange = function (t, o) {
        if ('Idle' === t) {
          if (!n.props.navigation.state.isDrawerIdle)
            n.props.navigation.dispatch({
              type: module509.default.MARK_DRAWER_IDLE,
              key: n.props.navigation.state.key,
            });
        } else if ('Settling' === t)
          n.props.navigation.dispatch({
            type: module509.default.MARK_DRAWER_SETTLING,
            key: n.props.navigation.state.key,
            willShow: o,
          });
        else if (n.props.navigation.state.isDrawerIdle)
          n.props.navigation.dispatch({
            type: module509.default.MARK_DRAWER_ACTIVE,
            key: n.props.navigation.state.key,
          });
      };

      n._handleDrawerOpen = function () {
        n.props.navigation.dispatch({
          type: module509.default.DRAWER_OPENED,
          key: n.props.navigation.state.key,
        });
      };

      n._handleDrawerClose = function () {
        n.props.navigation.dispatch({
          type: module509.default.DRAWER_CLOSED,
          key: n.props.navigation.state.key,
        });
      };

      n._updateWidth = function () {
        var t = 'function' == typeof n.props.navigationConfig.drawerWidth ? n.props.navigationConfig.drawerWidth() : n.props.navigationConfig.drawerWidth;
        if (n.state.drawerWidth !== t)
          n.setState({
            drawerWidth: t,
          });
      };

      n._renderNavigationView = function (t) {
        return React.createElement(
          module513.default.Provider,
          {
            value: n.drawerGestureRef,
          },
          React.createElement(
            module511.default,
            module51.default(
              {
                screenProps: n.props.screenProps,
                drawerOpenProgress: t,
                navigation: n.props.navigation,
                descriptors: n.props.descriptors,
                contentComponent: n.props.navigationConfig.contentComponent,
                contentOptions: n.props.navigationConfig.contentOptions,
                drawerPosition: n.props.navigationConfig.drawerPosition,
                style: n.props.navigationConfig.style,
              },
              n.props.navigationConfig
            )
          )
        );
      };

      n._renderContent = function () {
        var t = n.props,
          o = t.lazy,
          s = t.navigation,
          p = n.state.loaded,
          l = s.state.routes;

        if (n.props.navigationConfig.unmountInactiveRoutes) {
          var u = s.state.routes[s.state.index].key,
            f = n.props.descriptors[u];
          return React.createElement(module373.SceneView, {
            navigation: f.navigation,
            screenProps: n.props.screenProps,
            component: f.getComponent(),
          });
        }

        return React.createElement(
          module464.ScreenContainer,
          {
            style: E.pages,
          },
          l.map(function (t, l) {
            if (o && !p.includes(l)) return null;
            var u = s.state.index === l,
              f = n.props.descriptors[t.key];
            return React.createElement(
              module514.default,
              {
                key: t.key,
                style: [
                  module2.StyleSheet.absoluteFill,
                  {
                    opacity: u ? 1 : 0,
                  },
                ],
                isVisible: u,
              },
              React.createElement(module373.SceneView, {
                navigation: f.navigation,
                screenProps: n.props.screenProps,
                component: f.getComponent(),
              })
            );
          })
        );
      };

      n._setDrawerGestureRef = function (t) {
        n.drawerGestureRef.current = t;
      };

      return n;
    }

    module362.default(R, t);
    module357(
      R,
      [
        {
          key: 'componentDidMount',
          value: function () {
            module2.Dimensions.addEventListener('change', this._updateWidth);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (t) {
            var n = this,
              o = this.props.navigation.state,
              s = o.openId,
              p = o.closeId,
              l = o.toggleId,
              u = o.isDrawerOpen,
              f = t.navigation.state,
              c = [f.openId, f.closeId, f.toggleId];
            [s, p, l]
              .filter(function (t) {
                return !c.includes(t);
              })
              .sort(function (t, n) {
                return t > n;
              })
              .forEach(function (t) {
                if (t === s) n._drawer.openDrawer();
                else if (t === p) n._drawer.closeDrawer();
                else if (t === l) u ? n._drawer.closeDrawer() : n._drawer.openDrawer();
              });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            module2.Dimensions.removeEventListener('change', this._updateWidth);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props.navigation,
              o = n.state.routes[n.state.index].key,
              s = this.props.descriptors[o].options.drawerLockMode;
            return React.createElement(
              module453.default,
              {
                ref: function (n) {
                  t._drawer = n;
                },
                onGestureRef: this._setDrawerGestureRef,
                drawerLockMode: s || (this.props.screenProps && this.props.screenProps.drawerLockMode) || this.props.navigationConfig.drawerLockMode,
                drawerBackgroundColor: this.props.navigationConfig.drawerBackgroundColor,
                keyboardDismissMode: this.props.navigationConfig.keyboardDismissMode,
                drawerWidth: this.state.drawerWidth,
                onDrawerOpen: this._handleDrawerOpen,
                onDrawerClose: this._handleDrawerClose,
                onDrawerStateChanged: this._handleDrawerStateChange,
                useNativeAnimations: this.props.navigationConfig.useNativeAnimations,
                renderNavigationView: this._renderNavigationView,
                drawerPosition: 'right' === this.props.navigationConfig.drawerPosition ? module453.default.positions.Right : module453.default.positions.Left,
                drawerType: this.props.navigationConfig.drawerType,
                edgeWidth: this.props.navigationConfig.edgeWidth,
                hideStatusBar: this.props.navigationConfig.hideStatusBar,
                statusBarAnimation: this.props.navigationConfig.statusBarAnimation,
                minSwipeDistance: this.props.navigationConfig.minSwipeDistance,
                overlayColor: this.props.navigationConfig.overlayColor,
                contentContainerStyle: this.props.navigationConfig.contentContainerStyle,
              },
              React.createElement(
                module513.default.Provider,
                {
                  value: this.drawerGestureRef,
                },
                this._renderContent()
              )
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            var s = t.navigation.state.index;
            return {
              loaded: o.loaded.includes(s) ? o.loaded : [].concat(module392.default(o.loaded), [s]),
            };
          },
        },
      ]
    );
    return R;
  })(React.PureComponent);

export default R;
R.defaultProps = {
  lazy: true,
};
var E = module2.StyleSheet.create({
  pages: {
    flex: 1,
  },
});
