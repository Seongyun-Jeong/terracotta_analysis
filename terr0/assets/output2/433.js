var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module424 = require('./424'),
  module434 = require('./434');

function L(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      L(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      L(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

((undefined === j ? {} : j).reactNativeVersion || {}).minor;

var _ = function () {
    var t = module2.Dimensions.get('window'),
      n = t.width,
      o = t.height;
    return 0 === n && 0 === o
      ? module2.Dimensions.get('screen')
      : {
          width: n,
          height: o,
        };
  },
  S = _(),
  P = S.height,
  B = S.width,
  j = module2.NativeModules.PlatformConstants,
  I =
    'web' !== module2.Platform.OS &&
    (('ios' === module2.Platform.OS && ((812 === P && 375 === B) || (375 === P && 812 === B))) || (896 === P && 414 === B) || (414 === P && 896 === B)),
  R = 'ios' === module2.Platform.OS && ((1194 === P && 834 === B) || (834 === P && 1194 === B) || (1024 === P && 1366 === B) || (1366 === P && 1024 === B)),
  T = !('ios' !== module2.Platform.OS || I || (P > B && B < 768) || (B > P && P < 768)),
  M = null,
  k = function (t) {
    return null !== M ? M : 'android' === module2.Platform.OS ? (globals.Expo ? globals.Expo.Constants.statusBarHeight : 0) : I ? (t ? 0 : 44) : R ? 24 : T ? 20 : t ? 0 : 20;
  },
  E = function (t) {
    if (!t.includes('%')) return 0;
    var n = parseFloat(t) / 100;
    return isNaN(n) ? 0 : n;
  },
  x = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
        touchesTop: true,
        touchesBottom: true,
        touchesLeft: true,
        touchesRight: true,
        orientation: null,
        viewWidth: 0,
        viewHeight: 0,
      };

      o._onLayout = function (...args) {
        if (o._isMounted && o.view) {
          var p = o.props.isLandscape,
            u = o.state.orientation,
            c = p ? 'landscape' : 'portrait';

          if (!u || u !== c) {
            var f = _(),
              l = f.width,
              h = f.height;

            o.view._component.measureInWindow(function (t, s, p, u) {
              var f;

              if (o.view) {
                var v = s,
                  y = t;
                if (v >= h) v %= h;
                else if (v < 0) v = (v % h) + h;
                if (y >= l) y %= l;
                else if (y < 0) y = (y % l) + l;
                var w = 0 === v,
                  b = v + u >= h,
                  L = 0 === y,
                  O = y + p >= l;
                o.setState({
                  touchesTop: w,
                  touchesBottom: b,
                  touchesLeft: L,
                  touchesRight: O,
                  orientation: c,
                  viewWidth: p,
                  viewHeight: u,
                });
                if (o.props.onLayout) (f = o.props).onLayout.apply(f, args);
              }
            });
          }
        }
      };

      o._getSafeAreaStyle = function () {
        var t = o.state,
          n = t.touchesTop,
          s = t.touchesBottom,
          p = t.touchesLeft,
          u = t.touchesRight,
          c = o.props,
          f = c.forceInset,
          l = o._getViewStyles(),
          h = l.paddingTop,
          v = l.paddingBottom,
          y = l.paddingLeft,
          w = l.paddingRight,
          b = O({}, l.viewStyle, {
            paddingTop: n ? o._getInset('top') : 0,
            paddingBottom: s ? o._getInset('bottom') : 0,
            paddingLeft: p ? o._getInset('left') : 0,
            paddingRight: u ? o._getInset('right') : 0,
          });

        if (f)
          Object.keys(f).forEach(function (t) {
            var n = f[t];

            switch (('always' === n && (n = o._getInset(t)), 'never' === n && (n = 0), t)) {
              case 'horizontal':
                b.paddingLeft = n;
                b.paddingRight = n;
                break;

              case 'vertical':
                b.paddingTop = n;
                b.paddingBottom = n;
                break;

              case 'left':
              case 'right':
              case 'top':
              case 'bottom':
                var s = 'padding' + t[0].toUpperCase() + t.slice(1);
                b[s] = n;
            }
          });
        if (b.height && 'number' == typeof b.height) b.height += b.paddingTop + b.paddingBottom;
        if (b.width && 'number' == typeof b.width) b.width += b.paddingLeft + b.paddingRight;
        b.paddingTop = b.paddingTop ** h;
        b.paddingBottom = b.paddingBottom ** v;
        b.paddingLeft = b.paddingLeft ** y;
        b.paddingRight = b.paddingRight ** w;
        return b;
      };

      o._getViewStyles = function () {
        var t = o.state.viewWidth,
          n = module2.StyleSheet.flatten(o.props.style || {}),
          p = n.padding,
          u = undefined === p ? 0 : p,
          c = n.paddingVertical,
          f = undefined === c ? u : c,
          l = n.paddingHorizontal,
          h = undefined === l ? u : l,
          v = n.paddingTop,
          w = undefined === v ? f : v,
          b = n.paddingBottom,
          L = undefined === b ? f : b,
          O = n.paddingLeft,
          _ = undefined === O ? h : O,
          S = n.paddingRight,
          P = undefined === S ? h : S,
          B = module370(n, ['padding', 'paddingVertical', 'paddingHorizontal', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']);

        if ('number' != typeof w) w = E(w) * t;
        if ('number' != typeof L) L = E(L) * t;
        if ('number' != typeof _) _ = E(_) * t;
        if ('number' != typeof P) P = E(P) * t;
        return {
          paddingTop: w,
          paddingBottom: L,
          paddingLeft: _,
          paddingRight: P,
          viewStyle: B,
        };
      };

      o._getInset = function (t) {
        var n = o.props.isLandscape;

        switch (t) {
          case 'horizontal':
          case 'right':
          case 'left':
            return n && I ? 44 : 0;

          case 'vertical':
          case 'top':
            return k(n);

          case 'bottom':
            if (I) return n ? 24 : 34;
            else return R ? 20 : 0;
        }
      };

      return o;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this._isMounted = true;
          module2.InteractionManager.runAfterInteractions(function () {
            t._onLayout();
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._isMounted = false;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this._onLayout();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            p = module370(n, ['forceInset', 'isLandscape', 'style']),
            u = this._getSafeAreaStyle();

          return React.createElement(
            module2.Animated.View,
            module51.default(
              {
                ref: function (n) {
                  return (t.view = n);
                },
                pointerEvents: 'box-none',
              },
              p,
              {
                onLayout: this._onLayout,
                style: u,
              }
            )
          );
        },
      },
    ]);
    return n;
  })(React.Component);

x.setStatusBarHeight = function (t) {
  M = t;
};

var A = module434.default(x),
  D = A;
export default D;
export function withSafeArea() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  return function (n) {
    var o = (function (o) {
      function s() {
        module356.default(this, s);
        return module358.default(this, module361.default(s).apply(this, arguments));
      }

      module362.default(s, o);
      module357(s, [
        {
          key: 'render',
          value: function () {
            return React.createElement(
              A,
              {
                style: {
                  flex: 1,
                },
                forceInset: t,
              },
              React.createElement(n, this.props)
            );
          },
        },
      ]);
      return s;
    })(React.Component);

    return module424.default(o, n);
  };
}
