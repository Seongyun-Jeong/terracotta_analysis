var module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module43 = require('./43'),
  React = require('react'),
  module78 = require('./78'),
  module269 = require('./269'),
  module52 = require('./52'),
  module42 = require('./42'),
  module75 = require('./75'),
  module192 = require('./192'),
  k = module42.getViewManagerConfig('AndroidDrawerLayout').Constants,
  module245 = require('./245'),
  module270 = require('./270'),
  S = ['Idle', 'Dragging', 'Settling'],
  B = (function (D, ...args) {
    function k() {
      var t, o;
      module22(this, k);
      (o = module30(this, (t = module33(k)).call.apply(t, [this].concat(args))))._nativeRef = React.createRef();
      o.state = {
        statusBarBackgroundColor: null,
      };

      o._onDrawerSlide = function (t) {
        if (o.props.onDrawerSlide) o.props.onDrawerSlide(t);
        if ('on-drag' === o.props.keyboardDismissMode) module245();
      };

      o._onDrawerOpen = function () {
        if (o.props.onDrawerOpen) o.props.onDrawerOpen();
      };

      o._onDrawerClose = function () {
        if (o.props.onDrawerClose) o.props.onDrawerClose();
      };

      o._onDrawerStateChanged = function (t) {
        if (o.props.onDrawerStateChanged) o.props.onDrawerStateChanged(S[t.nativeEvent.drawerState]);
      };

      return o;
    }

    module36(k, D);
    module23(k, [
      {
        key: 'render',
        value: function () {
          var n = this.props,
            s = module9(n, ['onDrawerStateChanged']),
            u = module43.Version >= 21 && this.props.statusBarBackgroundColor,
            l = React.createElement(
              module75,
              {
                style: [
                  L.drawerSubview,
                  {
                    width: this.props.drawerWidth,
                    backgroundColor: this.props.drawerBackgroundColor,
                  },
                ],
                collapsable: false,
              },
              this.props.renderNavigationView(),
              u &&
                React.createElement(module75, {
                  style: L.drawerStatusBar,
                })
            ),
            p = React.createElement(
              module75,
              {
                style: L.mainSubview,
                collapsable: false,
              },
              u &&
                React.createElement(module269, {
                  translucent: true,
                  backgroundColor: this.props.statusBarBackgroundColor,
                }),
              u &&
                React.createElement(module75, {
                  style: [
                    L.statusBar,
                    {
                      backgroundColor: this.props.statusBarBackgroundColor,
                    },
                  ],
                }),
              this.props.children
            );
          return React.createElement(
            module270,
            module11({}, s, {
              ref: this._nativeRef,
              drawerWidth: this.props.drawerWidth,
              drawerPosition: this.props.drawerPosition,
              drawerLockMode: this.props.drawerLockMode,
              style: [L.base, this.props.style],
              onDrawerSlide: this._onDrawerSlide,
              onDrawerOpen: this._onDrawerOpen,
              onDrawerClose: this._onDrawerClose,
              onDrawerStateChanged: this._onDrawerStateChanged,
            }),
            p,
            l
          );
        },
      },
      {
        key: 'openDrawer',
        value: function () {
          module42.dispatchViewManagerCommand(this._getDrawerLayoutHandle(), module42.getViewManagerConfig('AndroidDrawerLayout').Commands.openDrawer, null);
        },
      },
      {
        key: 'closeDrawer',
        value: function () {
          module42.dispatchViewManagerCommand(this._getDrawerLayoutHandle(), module42.getViewManagerConfig('AndroidDrawerLayout').Commands.closeDrawer, null);
        },
      },
      {
        key: '_getDrawerLayoutHandle',
        value: function () {
          return module78.findNodeHandle(this._nativeRef.current);
        },
      },
      {
        key: 'blur',
        value: function () {
          module192(this._nativeRef.current).blur();
        },
      },
      {
        key: 'focus',
        value: function () {
          module192(this._nativeRef.current).focus();
        },
      },
      {
        key: 'measure',
        value: function (t) {
          module192(this._nativeRef.current).measure(t);
        },
      },
      {
        key: 'measureInWindow',
        value: function (t) {
          module192(this._nativeRef.current).measureInWindow(t);
        },
      },
      {
        key: 'measureLayout',
        value: function (t, o, n) {
          module192(this._nativeRef.current).measureLayout(t, o, n);
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          module192(this._nativeRef.current).setNativeProps(t);
        },
      },
    ]);
    return k;
  })(React.Component);

B.positions = k.DrawerPosition;
B.defaultProps = {
  drawerBackgroundColor: 'white',
};
var L = module52.create({
  base: {
    flex: 1,
    elevation: 16,
  },
  mainSubview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  drawerSubview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  statusBar: {
    height: module269.currentHeight,
  },
  drawerStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: module269.currentHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.251)',
  },
});
module.exports = B;
